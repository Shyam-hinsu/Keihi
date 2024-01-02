import { db } from "./firebaseInit";

import { collection, getDocs } from "firebase/firestore";

async function getTransactionFromFirease() {
  const querySnapshot = await getDocs(collection(db, "transaction"));
  const transactionArray = [];
  querySnapshot.forEach((doc) => {
    let note = {
      id: doc.id,
      content: doc.data().content,
    };
    transactionArray.unshift(note);
  });

  return transactionArray;
}

export { getTransactionFromFirease };
