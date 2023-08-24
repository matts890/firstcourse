import React from 'react'

function HeaderOptions({avatar,Icon, title}) {
  return (
    <div className="items-center mr-5 cursor-pointer text-gray-500 flex-col flex hover:text-black">
        {Icon && <Icon/>}
        {avatar && <img src={avatar} alt='avatar' className=' w-6 h-6 rounded-full'/>}
        <h3 className='font-normal text-xs'>{title}</h3>
    </div>
  )
}

export default HeaderOptions;