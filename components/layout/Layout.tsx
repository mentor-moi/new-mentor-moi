import { ReactNode } from 'react'
import Footer from '../elements/Footer/Footer'
import Navbar from '../elements/Navbar/Navbar'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
