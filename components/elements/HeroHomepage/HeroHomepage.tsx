import { NextPage } from 'next'
import ImageContainerHero from '../ImageContainerHero/ImageContainerHero'
import ImageContainerMobile from '../ImageContainerMobile/ImageContainerMoile'

const HeroHomepage: NextPage = () => {
  return (
    <div className="bg-white h-full mt-14 sm:mt-24 relative">
      <div className="max-w-7xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-7xl sm:tracking-tight font-Playfair lg:text-6xl">
            Mentor Moi
          </h1>
          <p className="max-w-xl mt-5  mx-auto text-xl text-gray-500">
            Mentor Moi est une plateforme gratuite pour tous les métiers de
            l’informatique... Maîtrisez votre métier avec des mentors à vos
            côtés.
          </p>
          <button className=" bg-darkOrange mt-4 sm:mt-10 text-black font-bold py-2 px-4 rounded">
            Trouver un⸱e mentor
          </button>
        </div>
      </div>
      <ImageContainerHero />
      <ImageContainerMobile />
    </div>
  )
}

export default HeroHomepage
