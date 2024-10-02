import { Footer } from '../navigation/footer'
import { Navigation } from '../navigation/navigation'
import Sidebar from '../navigation/sidebar'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
        <div className="flex min-h-screen w-full">
          <Sidebar />
          <main className="md:pl-33 flex size-full flex-col">
            <Navigation />
            {children}
            <Footer />
          </main>
        </div>
    </>
  )
}
