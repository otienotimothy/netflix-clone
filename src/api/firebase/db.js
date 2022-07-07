import { addDoc, collection } from "firebase/firestore";
import { db } from "./config"

import { faqs, jumbo } from "../../seed";

const populateStore = async (colName, data) => {
    try {
        const docRef = await addDoc(collection(db, colName), data)
        console.log(docRef.id)
    } catch (error) {
        console.error(error)
    }
}

const populateJumbo = () => {
    jumbo.forEach(item => populateStore('jumboDetails', item))
}

const populateFaqs = () => {
    jumbo.forEach(item => populateStore('faqs', item))
}

// populateJumbo()
// populateFaqs()