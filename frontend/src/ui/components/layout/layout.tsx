import { Footer } from '../navigation/footer'
import { Navigation } from '../navigation/navigation'
import Sidebar from '../navigation/sidebar'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}
