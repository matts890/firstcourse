import { Avatar } from '@mui/material';
import React from 'react'
import './index.css';
import FeedOption from './FeedOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
function Post({name, description, message, photoUrl}) {
  return (
    <div className='bg-white my-2.5 rounded-xl p-2.5'>
         {/*Post Header*/}
         <div className='flex'>
            <Avatar/>
             {/*Post info*/}
             <div>
              <h3 className="font-bold text-xl leading-4">{name}</h3>
              <p className="text-sm text-gray-400">{description}</p>
             </div>
         </div>
         
         {/*Post body*/}
           <div className='over mt-1'>
            <p>{message}</p>
           </div>

           {/*Post buttons*/}
             <div className='flex px-0'>
              <FeedOption Ico={ThumbUpOutlinedIcon} descp="Like" color="gray"/>
              <FeedOption Ico={CommentOutlinedIcon} descp="Comment" color="gray"/>
              <FeedOption Ico={ShortcutOutlinedIcon} descp="Share" color="gray"/>
              <FeedOption Ico={SendOutlinedIcon} descp="Send" color="gray"/>
             </div>
    </div>
  )
}

export default Post;