import { Footer } from '../navigation/footer'
import { Navigation } from '../navigation/navigation'
import Sidebar from '../navigation/sidebar'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex w-full min-h-screen">
        <Sidebar />
        <main className="flex flex-col w-full h-full md:pl-33">
          <Navigation />
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}
