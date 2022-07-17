/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import {
  SearchIcon,
  MailIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline'

const features = [
  { name: 'Trouvez votre mentor', icon: SearchIcon },
  { name: 'Message au mentor', icon: MailIcon },
  { name: 'Débutez ensemble', icon: DesktopComputerIcon },
]

const PresentationContainerHomepage: NextPage = () => {
  return (
    <section className="presentationContainerHomepage  bg-lightOrange">
      <div className="relative py-16 sm:py-2 ">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="mt-2 text-3xl font-extrabold  tracking-tight sm:text-4xl">
            À portée de main : un coach de carrière dédié.
          </h2>
          <p className="mt-5 max-w-prose mx-auto ">
            Vous voulez réussir votre prochain entretien d'embauche ? Réussir la
            création de votre entreprise ? Vous avez envie d'acquérir des
            compétences très demandées ? Travaillez intelligemment avec un⸱e
            mentor ou un⸱e coach en ligne à vos côtés, qui vous offrira des
            conseils d'expert et une orientation à la hauteur de votre ardeur.
            Devenez inarrêtable grâce à MentorMoi.
          </p>
          <div className=" mt-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-white  rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3  bg-darkPurple rounded-md shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium   tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base ">
                        Ac tincidunt sapien vehicula erat auctor pellentesque
                        rhoncus. Et magna sit morbi lobortis.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentationContainerHomepage
