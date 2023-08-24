import React, { useEffect, useState } from 'react';
import Auth from './components/Auth.js';
import {db, auth, storage} from './config/firebase';
import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

function App() {
  const [movieList, setMovieList] = useState([]);
  //New movie States
  const [newMovieTitle,setNewMovieTitle] = useState("");
  const [newReleaseDate,setNewReleaseDate] = useState(0);
  const [NewMovieOscar,setIsNewMovieOscar] = useState(false);

  const moviesCollection = collection(db, "movies");
  //Update title
  const [updatedTitle, setUpdatedTitle] = useState("");
  
  //File upload State
  const [fileUpload, setFileUpload] = useState(null);

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id );  
    await deleteDoc(movieDoc);
  };

  const changeTitle = async (id) => {
    const movieDoc = doc(db, "movies", id ); 
    await updateDoc(movieDoc, {title: updatedTitle}); 
  };

  useEffect(() => {
  const getMovieList = async () => {
    
    try{
    const data = await getDocs(moviesCollection);
    const filteredData = data.docs.map((doc) =>({
    ...doc.data(),
   id: doc.id,
  }))
    setMovieList(filteredData); 
  } catch(err){
      console.error(err);
    }
  };
   getMovieList();
}, [moviesCollection]);

const onSubmitmovie = async () => {
   try{
    await addDoc(moviesCollection, {
      title: newMovieTitle, 
      releaseDate:newReleaseDate, 
      receivedOscar: NewMovieOscar,
      userId: auth?.currentUser?.uid,
    });}
    catch(err){
      console.error(err);
    }
};

   const uploadFile = async () =>
   {
     if (!fileUpload) return;
     const filesFolderRef = ref(storage, `project1/${fileUpload.name}`);
     
     try{
     await uploadBytes(filesFolderRef, fileUpload);
     } catch(err){
      console.error(err);
     }
    };

  return (
   <div className="text-center mt-2">
    <Auth/>
    <div>
     <input placeholder='Movie title...' onChange={(e) => setNewMovieTitle(e.target.value)}/>
     <input placeholder='Release Date...' type='number' onChange={(e) => setNewReleaseDate(Number(e.target.value))}/>
     <input type='checkbox' checked={NewMovieOscar}  onChange={(e) => setIsNewMovieOscar(e.target.checked)}/>
     <label>received an Oscar</label>
     <button onClick={onSubmitmovie}>Submit Movie</button>
     
    </div>
     <div>
      {movieList.map((movie) =>(
        <div>
          <h1 style={ {color: movie.receivedOscar ? "green" : "red"}}>{movie.title}</h1>
          <p>Date: {movie.releaseDate}</p>
          <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
          <input  placeholder='New title...' onChange={(e) => setUpdatedTitle(e.target.value)}/>
          <button onClick={() => changeTitle(movie.id)}>Update Title</button>
        </div> 
      ))}
     </div>

     <div>
      <input type='file' onChange={(Event) => setFileUpload(Event.target.files[0])}/>
      
      <button onClick={uploadFile}>Upload file</button>
     </div>
   </div>
  );
}

export default App;