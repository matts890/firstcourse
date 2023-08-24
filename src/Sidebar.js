import { Avatar } from '@mui/material';
import React from 'react'
import './index.css';
function Sidebar({Name,Email}) {
  const RecentItems = (topic) => (
    <div className='flex text-sm text-gray-400 mb-1.5 p-0.5 font-semibold hover:rounded-2xl hover:bg-gray-200 hover:text-black'>
    <span className='pr-3'>#</span>
    <p>{topic}</p>  
    </div>
  );
  return (
    <>
    
    {/*side_bar */}
    <div className=" ml-10 mr-5 flex_20 top-20 sticky h-fit">
       
       {/*top side_bar */}
       <div className=" flex text-center flex-col items-center bg-white  rounded-md pb-2 border-b">
        <img className='w-full mb h-14 rounded-t-md object-cover' src={require("./images.jpg")} alt="background"/>
        <Avatar className="mb-3" />
        <h1 className="text-xl font-bold cursor-pointer hover:underline decoration-blue-800">{Name}</h1>
        <h4 className='pb-4 border-b w-full'>{Email}</h4>
        
        {/*side_bar stats */}
        <div className='mt-1 w-full p-3 text-gray-400 border-b hover:bg-gray-200'>
            <div className=" flex justify-between">
        <p className='pr-4'>Who viewed you</p> 
        <p className="text-blue-600">2487</p>
           </div>
           <div className=" flex justify-between ">
        <p >Views of your</p>  
        <p className='text-blue-600'>2443</p>
           </div>
        </div>

        <div className='p-2 w-full h-full hover:bg-gray-200'>

            <p>Access exclusive tools</p>
        </div>
       </div>
       {/*bottom side_bar */}

       <div className=" flex flex-col bg-white  rounded-md pb-2 border-b mt-1 px-2">
       <p>Recent</p>
         {RecentItems("reactjs")} 
         {RecentItems("programming")} 
         {RecentItems("softwareenginering")}  
         {RecentItems("developer")} 
       <div>
        
       </div>
       </div>
    </div>
  </>
  )
}

export default Sidebar;