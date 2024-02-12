import "server-only";

import { Feedback } from "@/types/feedback";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const addFeedback = async (feedback: Feedback) => {
  const docRef = await addDoc(collection(db, "feedbacks"), {
    timestamp: Timestamp.now(),
    ...feedback,
  });
  return docRef;
};
