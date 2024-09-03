import { Container } from '@/ui/components/container'
import { Avatar } from '@/ui/design-system/avatar'
import SearchBar, { Search } from '@/ui/design-system/search'
import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'

export const EmployeeList = () => {
  return (
    <Container className="mt-12 mb-8 flex flex-col gap-12">
      <div className="relative flex flex-col bg-clip-border rounded bg-white text-gray-700 shadow-md">
        <div className="flex justify-between items-center bg-gradient-to-tr from-bluegray800 to-bluegray900 bg-clip-border mx-4 rounded overflow-hidden text-white shadow-dark shadow-lg -mt-6 mb-8 p-6">
          <h6 className="block items-center antialiased font-semibold text-white">
            Liste des salariés
          </h6>
          <Search />
        </div>
        <div className="p-6 px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <th className="border-b border-bordergray py-3 px-5 text-left">
                  <p className="block antialiased text-12Reg font-bold uppercase text-textcolor">
                    Nom / Prénom
                  </p>
                </th>
                <th className="border-b border-bordergray py-3 px-5 text-left">
                  <p className="block antialiased text-12Reg font-bold uppercase text-textcolor">
                    Service
                  </p>
                </th>
                <th className="border-b border-bordergray py-3 px-5 text-left">
                  <p className="block antialiased text-12Reg font-bold uppercase text-textcolor">
                    Formations
                  </p>
                </th>
                <th className="border-b border-bordergray py-3 px-5 text-left">
                  <p className="block antialiased text-12Reg font-bold uppercase text-textcolor">
                    Date d'embauche
                  </p>
                </th>
                <th className="border-b border-bordergray py-3 px-5 text-left">
                  <p className="block antialiased text-12Reg font-bold uppercase text-textcolor" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-5 border-b border-bordergray">
                  <div className="flex items-center gap-4">
                    <Avatar
                      size="large"
                      forme="carre"
                      src="/assets/images/md.png"
                      alt="Avatar de Valentin Gazzoli"
                    />
                    <div>
                      <p className="block antialiased leading-normal text-dark text-16Reg">
                        Valentin Gazzoli
                      </p>
                      <p className="block antialiased text-12Reg text-textcolor">
                        v.gazzoli@becchampagne.fayat.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    Service QSE
                  </p>
                  <p className="block antialiased text-12Reg text-textcolor">
                    Animateur QSE
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    6 formations
                  </p>
                  <p className="block antialiased text-12Reg text-textcolor">
                    en cours de validité
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    01/12/2023
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="text-yellow">
                      <FaEdit />
                    </Link>
                    <Link href="/" className="text-red">
                      <FaRegTrashCan />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-bordergray">
                  <div className="flex items-center gap-4">
                    <Avatar
                      size="large"
                      forme="carre"
                      src="/assets/images/md.png"
                      alt="Avatar de Valentin Gazzoli"
                    />
                    <div>
                      <p className="block antialiased leading-normal text-dark text-16Reg">
                        Maud Wallerich
                      </p>
                      <p className="block antialiased text-12Reg text-textcolor">
                        v.gazzoli@becchampagne.fayat.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    Service QSE
                  </p>
                  <p className="block antialiased text-12Reg text-textcolor">
                    Animateur QSE
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    6 formations
                  </p>
                  <p className="block antialiased text-12Reg text-textcolor">
                    en cours de validité
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    01/12/2023
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="text-yellow">
                      <FaEdit />
                    </Link>
                    <Link href="/" className="text-red">
                      <FaRegTrashCan />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-bordergray">
                  <div className="flex items-center gap-4">
                    <Avatar
                      size="large"
                      forme="carre"
                      src="/assets/images/md.png"
                      alt="Avatar de Valentin Gazzoli"
                    />
                    <div>
                      <p className="block antialiased leading-normal text-dark text-16Reg">
                        Sylvie Bauchet
                      </p>
                      <p className="block antialiased text-12Reg text-textcolor">
                        v.gazzoli@becchampagne.fayat.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    Service RH
                  </p>
                  <p className="block antialiased text-12Reg text-textcolor">
                    Directrice RH
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    6 formations
                  </p>
                  <p className="block antialiased text-12Reg text-textcolor">
                    en cours de validité
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    01/12/2023
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="text-yellow">
                      <FaEdit />
                    </Link>
                    <Link href="/" className="text-red">
                      <FaRegTrashCan />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-bordergray">
                  <div className="flex items-center gap-4">
                    <Avatar
                      size="large"
                      forme="carre"
                      src="/assets/images/md.png"
                      alt="Avatar de Valentin Gazzoli"
                    />
                    <div>
                      <p className="block antialiased leading-normal text-dark text-16Reg">
                        David Lecigne
                      </p>
                      <p className="block antialiased text-12Reg text-textcolor">
                        v.gazzoli@becchampagne.fayat.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    Service Travaux de Proximité
                  </p>
                  <p className="block antialiased text-12Reg text-textcolor">
                    Chef de chantier
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    6 formations
                  </p>
                  <p className="block antialiased text-12Reg text-textcolor">
                    en cours de validité
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <p className="block antialiased text-16Reg text-dark">
                    01/12/2023
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-bordergray">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="text-yellow">
                      <FaEdit />
                    </Link>
                    <Link href="/" className="text-red">
                      <FaRegTrashCan />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}
