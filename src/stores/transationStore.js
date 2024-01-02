import { defineStore } from "pinia";
import { db } from "@/firebase/firebaseInit";
// import moment from "moment";
// import { v4 as uuidv4 } from "uuid";
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

let notesCollectionRef;
let notesCollectionQuery;
let getNotesSnapshots = null;

export const useTransationStore = defineStore("transationStore", {
  state: () => {
    return {
      formState: {
        note: "",
      },
      notes: [],
      isNotesLoaded: false,
    };
  },
  actions: {
    init() {
      //store
      notesCollectionRef = collection(db, "transaction");
      // notesCollectionRef = collection(
      //   db,
      //   "users",
      //   "5tNDlnD77jga5ZCCcr4B7iHPPZB3",
      //   "notes"
      // );
      notesCollectionQuery = query(notesCollectionRef, orderBy("id"));
      this.getNotes();
    },

    async getNotes() {
      this.isNotesLoaded = true;

      getNotesSnapshots = onSnapshot(
        notesCollectionQuery,
        (querySnapshot) => {
          let notes = [];
          querySnapshot.forEach((doc) => {
            console.log(doc);
            let note = {
              id: doc.id,
              category: doc.data().category,
              timestemp: doc.data().timestemp,
              amount: doc.data().amount,
            };
            notes.unshift(note);
          });
          this.notes = notes;
          this.isNotesLoaded = false;
        },
        (error) => {
          console.log(error);
        }
      );
      //later  on
    },
  },
});
