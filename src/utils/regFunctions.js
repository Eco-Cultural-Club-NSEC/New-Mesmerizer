import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ulid } from "ulid";

let single = {
  Name: "Kunal Ghosh",
  Event: "testEvent",
  Alt_Number: "123456789",
  Whatsapp_Number: "123456789",
  Email: "test@test.com",
  College_Name: "abc college",
  Payment_id: "1234567",
  payment_verified: false,
  entry:false
};

let multiple = {
  Name: ["Kunal Ghosh", "abc"],
  Event: "testEvent",
  Alt_Number: "123456789",
  Whatsapp_Number: "123456789",
  Email: "test@test.com",
  College_Name: "abc college",
  Payment_id: "1234567",
  payment_verified: false,
  entry:false
}

const imageUploader = async (loc, file) => {
  if(!file)
    return new Error("Photo not uploaded");
  const filename = ulid();
  const storageRef = ref(
    storage,
    loc + "/" + filename + "." + file.name.split(".").pop()
  );
  const dataRef = await uploadBytes(storageRef, file, {
    contentType: file.type,
  });
  const url = await getDownloadURL(storageRef);
  return url;
};

export const singleRegistration = async (data,file) => {
  const ssUrl = await imageUploader("singleReg", file);
  const updatedInfo = { ...data, paymentUrl: ssUrl };
  const docRef = await addDoc(collection(db, "singleReg"), updatedInfo);
  return docRef;
};


export const multiRegistration = async (data,file)=>{
  const ssUrl = await imageUploader("multiReg",file);
  const updatedInfo = { ...data, paymentUrl: ssUrl };
  const docRef = await addDoc(collection(db, "multiReg"), updatedInfo);
  return docRef;
}

