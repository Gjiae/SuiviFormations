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
import { ActiveLink } from './active-link'

const Sidebar = () => {
  return (
    <aside className="sticky top-4 inset-0 z-50 ml-4 h-[calc(100vh-32px)] w-72 flex-col bg-white shadow-lg text-dark border border-bordergray rounded p-4">
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

      <nav className="relative flex min-w-[240px] flex-col gap-1 p-2">
        <hr className="my-2 border-x-dark" />
        <div className="relative block w-full">
          <ActiveLink href="/">
            <div className="grid mr-4">
              <FaHome />
            </div>
            <p className="block mr-auto leading-tight">Tableau de bord</p>
          </ActiveLink>
          <ActiveLink href="/employee">
            <div className="grid mr-4">
              <FaUsers />
            </div>
            <p className="block mr-auto leading-tight">Salariés</p>
          </ActiveLink>
          <ActiveLink href="/formations">
            <div className="grid mr-4">
              <FaBarsStaggered />
            </div>
            <p className="block mr-auto leading-tight">Formations</p>
          </ActiveLink>
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
                <ActiveLink href="/design/page-avatar">
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Avatar
                </ActiveLink>
                <ActiveLink href="/design/page-boutons">
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Bouton
                </ActiveLink>
                <ActiveLink href="/design/page-logos">
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Logos
                </ActiveLink>
                <ActiveLink href="/design/page-pastilles">
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Pastilles
                </ActiveLink>
                <ActiveLink href="/design/page-spinners">
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Spinners
                </ActiveLink>
                <ActiveLink href="/design/page-typography">
                  <div className="mr-4">
                    <FaAngleRight />
                  </div>
                  Typography
                </ActiveLink>
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
      <div className="absolute bottom-3 flex w-full px-4 py-4 mt-auto">
        <div className="mr-12 flex items-center gap-8">
          <Avatar
            size="large"
            src="/assets/images/md.png"
            alt="Avatar de Valentin Gazzoli"
          />
          <div>
            <a href="#" className="font-medium text-dark hover:text-primary">
              Mon compte
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
