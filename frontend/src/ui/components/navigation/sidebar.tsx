import { Avatar } from '@/ui/design-system/avatar'
import { Logo } from '@/ui/design-system/logo'
import { Typography } from '@/ui/design-system/typography'
import { FaBell, FaCog, FaHome } from 'react-icons/fa'
import {
  FaAngleUp,
  FaAngleRight,
  FaToolbox,
  FaUsers,
  FaBarsStaggered,
} from 'react-icons/fa6'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className="flex inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 flex-col bg-white shadow-lg text-dark border border-bordergray rounded p-4">
      <Link href="/">
        <div className="flex items-center gap-2.5">
          <Logo size="medium" />
          <div className="flex flex-col">
            <div className="text-black font-extrabold text-[18px]">
              Suivi des formations
            </div>
            <Typography variant="12Reg" theme="gray" component="span">
              Outil de suivi des formations pour BEC
            </Typography>
          </div>
        </div>
      </Link>

      <nav className="flex min-w-[240px] flex-col gap-1 p-2">
        <hr className="my-2 border-x-dark" />
        <div className="relative block w-full">
          <Link
            href="/"
            className="flex items-center w-full p-3 rounded hover:bg-gray"
          >
            <div className="grid mr-4">
              <FaHome />
            </div>
            <p className="block mr-auto leading-tight">Tableau de bord</p>
          </Link>
          <Link
            href="/"
            className="flex items-center w-full p-3 rounded hover:bg-gray"
          >
            <div className="grid mr-4">
              <FaUsers />
            </div>
            <p className="block mr-auto leading-tight">Salariés</p>
          </Link>
          <Link
            href="/"
            className="flex items-center w-full p-3 rounded hover:bg-gray"
          >
            <div className="grid mr-4">
              <FaBarsStaggered />
            </div>
            <p className="block mr-auto leading-tight">Formations</p>
          </Link>
        </div>
        <div className="relative block w-full">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-3"
            >
              <div className="grid mr-4 place-items-center">
                <FaToolbox />{' '}
              </div>
              <p className="block mr-auto leading-tight">Design-system</p>
              <FaAngleUp />
            </button>
          </div>
          <div className="overflow-hidden">
            <div className="block w-full py-1 leading-tight">
              <nav className="flex min-w-[240px] flex-col gap-1 p-0">
                <Link
                  href="/design/page-avatar"
                  className="flex items-center w-full p-3 leading-tight"
                >
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Avatar
                </Link>
                <Link
                  href="/design/page-boutons"
                  className="flex items-center w-full p-3 leading-tight"
                >
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Bouton
                </Link>
                <Link
                  href="/design/page-logos"
                  className="flex items-center w-full p-3 leading-tight"
                >
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Logos
                </Link>
                <Link
                  href="/design/page-pastilles"
                  className="flex items-center w-full p-3 leading-tight"
                >
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Pastilles
                </Link>
                <Link
                  href="/design/page-spinners"
                  className="flex items-center w-full p-3 leading-tight"
                >
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Spinners
                </Link>
                <Link
                  href="/design/page-typography"
                  className="flex items-center w-full p-3 leading-tight"
                >
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Typography
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <hr className="my-2 border-x-dark" />

        {/*Section Paramètres*/}
        <div className="relative block w-full">
          <div className="flex items-center w-full rounded hover:bg-gray">
            <Link href="#" className="flex items-center w-full p-3">
              <div className="grid mr-4">
                <FaBell />
              </div>
              <p className="block mr-auto leading-tight">Notifications</p>
            </Link>
            <div className="grid ml-auto place-items-center justify-self-end">
              <div className="relative grid items-center px-2 py-1 antialiased font-bold">
                <span className="">14</span>
              </div>
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center w-full p-3 rounded hover:bg-gray"
          >
            <div className="grid mr-4">
              <FaCog />
            </div>
            <p className="block mr-auto leading-tight">Paramètres</p>
          </Link>
        </div>
      </nav>

      {/*Section gestion de compte*/}
      <div className="relative flex w-full px-4 py-4 mt-auto">
        <div className="mr-12 flex items-center gap-8">
          <Avatar
            size="large"
            src="/assets/images/md.png"
            alt="Avatar de Valentin Gazzoli"
          />
          <div>
            <a href="#" className="font-medium text-dark">
              Mon compte
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
