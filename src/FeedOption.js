import React from 'react'

function FeedOption({Ico,descp,color}) {
  return (
    <div className='flex ml-4 hover:bg-gray-200 hover:rounded-lg mr-0'>
    <Ico style={{color: color}}/>
    <p className='pl-2'>{descp}</p>
   </div>
  )
}

export default FeedOption;