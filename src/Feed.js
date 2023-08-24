import { Avatar} from '@mui/material';
import React, { useEffect, useState } from 'react'
import './index.css';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import FeedOption from './FeedOption';
import Post from './Post';
import firebase from './firebase';
import collection from './firebase';
import  getDocs  from './firebase';
import db from "./firebase";
import { onSnapshot } from 'firebase/firestore';

function Feed() {
  const [input,setInput] = useState('');
  const [posts, setposts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db,"collection"),(snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });


  }, []);

  const sendpost = (e) => {
    e.preventDefault();
    
    db.collection("posts").add({
      name: "Sonny Sangha",
      description:"This is a test",
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  };

 

  return (
    <div className='flex_60 mx-5'>
        {/*Feed_top*/}
        <div className='bg-white rounded-xl py-4'>
            <div className='p-2 flex '>
              <Avatar/>
              <form className='w-full' >
                <input className="border border-gray-400 rounded-full w-full hover:bg-gray-200 text-gray-500 font-medium text-sm my-1 ml-1 py-2 px-3 " type="text" placeholder="Search Image term..." value={input} onChange={e => setInput(e.target.value)}/> 
                <button  onClick={sendpost} type='submit' className="hidden">Send</button>
              </form>
            </div>
            <div className='flex space-x-32'>
            <FeedOption Ico={InsertPhotoRoundedIcon} descp="Photo" color="#33C0FF"/> 
            <FeedOption Ico={SmartDisplayRoundedIcon} descp="Video" color="#10B200"/> 
            <FeedOption Ico={CalendarMonthRoundedIcon} descp="Event" color="#C1870D"/> 
            <FeedOption Ico={EditCalendarRoundedIcon} descp="Write article"/> 
            </div> 
         </div>
         {/*posts */}
      {posts.map(({ id, data: {name,description, message, photoUrl }}) => (
        <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}/>
      ))}
     
      </div>

  );
}

export default Feed;