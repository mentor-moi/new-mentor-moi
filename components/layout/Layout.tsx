import { ReactNode } from 'react'
import Navbar from '../elements/Navbar/Navbar'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
