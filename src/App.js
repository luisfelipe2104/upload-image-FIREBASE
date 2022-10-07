import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import './App.css'
import { storage } from "./firebase"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"

function App() {
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState(null)

  const handleImageChange = (e) => {
    if (e.target.files[0]){
      setImage(e.target.files[0])
    }

  }
  console.log(image)

  const handleSubmit = () => {
    const imageRef = ref(storage, "image")
    uploadBytes(imageRef, image)
    .then(() => {
      getDownloadURL(imageRef)
      .then((url) => {
        setUrl(url)
        console.log(url)
        setImage(null)
      }).catch(err => {
        console.log(err.message)
      })
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
