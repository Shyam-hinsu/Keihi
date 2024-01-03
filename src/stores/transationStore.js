import { defineStore } from "pinia";
import { db } from "@/firebase/firebaseInit";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
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

let transationCollectionRef;
let transationCollectionQuery;
let getTransationSnapshots = null;

export const useTransationStore = defineStore("transationStore", {
  state: () => {
    return {
      formState: {
        note: "",
      },
      transations: [],
      isTransationLoaded: false,
    };
  },
  actions: {
    init() {
      //store
      transationCollectionRef = collection(db, "transaction");
      // transationCollectionRef = collection(
      //   db,
      //   "users",
      //   "5tNDlnD77jga5ZCCcr4B7iHPPZB3",
      //   "notes"
      // );
      transationCollectionQuery = query(transationCollectionRef, orderBy("id"));
      this.getTransation();
    },

    async getTransation() {
      this.isTransationLoaded = true;

      getTransationSnapshots = onSnapshot(
        transationCollectionQuery,
        (querySnapshot) => {
          let transations = [];
          querySnapshot.forEach((doc) => {
            console.log(doc);
            let note = {
              id: doc.id,
              category: doc.data().category,
              timestemp: doc.data().timestemp,
              amount: doc.data().amount,
              data: doc.data().date,
              discription: doc.data().discription,
            };
            transations.unshift(note);
          });
          this.transations = transations;
          this.isTransationLoaded = false;
        },
        (error) => {
          console.log(error);
        }
      );
      //later  on
    },

    async submit(formDataContext) {
      const formData = formDataContext.value;
      await setDoc(doc(transationCollectionRef, uuidv4()), {
        category: formData.category,
        amount: formData.amount,
        discription: formData.discription,
        timestemp: Date.now(),
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      });
    },
  },
});
