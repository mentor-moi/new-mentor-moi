import { NextPage } from 'next'
import Image from 'next/image'
import Macbook from '../Macbook/Macbook'

const MacSectionHome: NextPage = () => {
  return (
    <div className="bg-white mx-auto hidden  sm:flex container h-full mt-14 sm:mt-24 relative">
      <div className="chat-message self-end  mb-36">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Bonjour Tony, comment faire pour être Développeuse Backend ?
              </span>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="My profile"
            className=" w-6 h-6 rounded-full "
            height={40}
            width={40}
          />
        </div>
        <p className="text-gray-500 text-xs ml-8">Aissa Cissé</p>
      </div>
      <Macbook />
      <div className="chat-message mt-16">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Salut Olivia, peut on se caler un appel pour Vendredi 16h ?
              </span>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
            height={50}
            width={50}
          />
        </div>
        <p className="text-gray-500 text-xs ml-12">Tony Ja</p>
      </div>
    </div>
  )
}

export default MacSectionHome
