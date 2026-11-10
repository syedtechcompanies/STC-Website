import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb, isFirebaseConfigured } from "./firebase";

export type InquiryInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function submitInquiry(input: InquiryInput): Promise<void> {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase is not configured. Add your keys to .env.local.");
  }

  await addDoc(collection(getDb(), "inquiries"), {
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    service: input.service,
    message: input.message.trim(),
    status: "new",
    createdAt: serverTimestamp(),
  });
}
