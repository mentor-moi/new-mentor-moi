import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const ImageContainerMobile: NextPage = () => {
  return (
    <div className="flex justify-center sm:hidden mx-auto mt-6 items-center">
      <div className="flex ml-2 h-full justify-center object-cover items-center   rounded-full border-2 border-white  ring-8 ring-lightPurple">
        <Image
          className="w-10 h-10 rounded-full "
          src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div className="flex ml-2 h-full justify-center object-cover items-center   rounded-full border-2 border-white   ring-offset-4  ring-4 ring-lightOrange">
        <Image
          className="w-10 h-10 rounded-full "
          src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div className="flex ml-2 h-full justify-center object-cover items-center   rounded-full border-2 border-white  ring-8 ring-lightPurple">
        <Image
          className="w-10 h-10 rounded-full "
          src="https://images.unsplash.com/photo-1521500875084-9ad8838c5f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt=""
          width={50}
          height={50}
        />
      </div>
      <a
        className="flex ml-2 justify-center object-cover items-center w-14 h-14 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800  ring-offset-4 ring-lightOrange ring-4"
        href="#"
      >
        +99
      </a>
    </div>
  )
}

export default ImageContainerMobile
