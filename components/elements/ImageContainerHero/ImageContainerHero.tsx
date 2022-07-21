import { NextPage } from 'next'
import Image from 'next/image'

const ImageContainerHero: NextPage = () => {
  return (
    <div className="sm:flex justify-center hidden mx-auto mt-6 items-center">
      <div className="absolute bottom-28 left-0 object-cover sm:left-56 select-none lg:flex hidden rounded-full mb-5   ">
        <Image
          className="select-none object-cover"
          src="/Ornament40.png"
          alt="logo-mentor"
          height={25}
          width={25}
        />
      </div>
      <div className="absolute top-28  left-0  sm:left-72 select-none lg:flex hidden rounded-full mb-5   ">
        <Image
          className="select-none object-cover"
          src="/Ornament41.png"
          alt="logo-mentor"
          height={25}
          width={25}
        />
      </div>
      <div className="absolute top-28 right-0 sm:right-56 select-none lg:flex hidden rounded-full mb-5   ">
        <Image
          className="select-none object-cover"
          src="/Ornament57.png"
          alt="logo-mentor"
          height={25}
          width={25}
        />
      </div>
      <div className="absolute bottom-4 right-0 sm:right-36 select-none lg:flex hidden rounded-full mb-5   ">
        <Image
          className="rotate-90 select-none"
          src="/Ornament20purple.png"
          alt="logo-mentor"
          height={148}
          width={150}
        />
      </div>
      <div className="absolute  top-2 right-0 sm:right-24 sm:flex hidden rounded-full mb-5 ring-offset-4  ring-4  ring-lightOrange ">
        <Image
          className="h-12 select-none  w-12 mt-12 rounded-full  "
          src="https://images.unsplash.com/photo-1573878741117-1653384427db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          height={48}
          width={48}
        />
      </div>
      <div className="absolute  top-2 left-0 sm:left-24 sm:flex hidden rounded-full mb-5  ring-8 ring-lightPurple ">
        <Image
          className="h-12 select-none w-12 mt-12 rounded-full  "
          src="https://images.unsplash.com/photo-1586628345267-d9db8d893f9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          height={48}
          width={48}
        />
      </div>
      <div className="absolute  -bottom-6  sm:bottom-2 right-8 sm:right-24 hidden sm:flex  rounded-full mb-5  bg-lightOrange ring-offset-4  ring-4 ring-lightPurple ">
        <Image
          className="h-12 select-none w-12 mt-12 rounded-full  "
          src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
          height={48}
          width={48}
        />
      </div>
      <div className="absolute   -bottom-6  sm:bottom-2 left-8 sm:left-24 hidden sm:flex  rounded-full mb-5  bg-lightOrange ring-8 ring-lightOrange ">
        <Image
          className="h-12 w-12 mt-12 rounded-full  "
          src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
          height={48}
          width={48}
        />
      </div>
    </div>
  )
}

export default ImageContainerHero
