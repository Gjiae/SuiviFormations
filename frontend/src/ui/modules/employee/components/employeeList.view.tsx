import { Container } from '@/ui/components/container'
import { Avatar } from '@/ui/design-system/avatar'
import { Search } from '@/ui/design-system/search'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaEdit, FaSearch } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import { formatDate } from '@/utiles/formatDates'
import Tooltip from '@/utiles/tooltip'
import axios from 'axios'

export const EmployeeList = () => {
  let headers: any
  const [Authentified, setAuthentified] = useState(null)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setAuthentified(user)
      //console.log(user.token)
      headers = { Authorization: `Bearer ${user.token}` }
    }
  }, [])

  const [Salaries, setSalaries] = useState([
    {
      _id: '',
      name: '',
      surname: '',
      service: '',
      metier: '',
      embauche: '',
      email: '',
    },
  ])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/salaries', {
          headers,
        })
        setSalaries(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <Container className="mt-12 mb-8 flex flex-col gap-12">
      <div className="relative flex flex-col bg-clip-border rounded bg-white text-gray-700 shadow-md">
        <div className="flex justify-between items-center bg-gradient-to-tr from-bluegray800 to-bluegray900 bg-clip-border mx-4 rounded overflow-hidden text-white shadow-dark shadow-lg -mt-6 mb-8 p-4">
          <h6 className="block items-center antialiased font-semibold text-white">
            Liste des salariés
          </h6>
          <Search icon={{ icon: FaSearch }} />
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
              {Salaries.map((salarie) => (
                <tr key={salarie._id}>
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
                          {salarie.surname} {salarie.name}
                        </p>
                        <p className="block antialiased text-12Reg text-textcolor">
                          {salarie.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-5 border-b border-bordergray">
                    <p className="block antialiased text-16Reg text-dark">
                      {salarie.service}
                    </p>
                    <p className="block antialiased text-12Reg text-textcolor">
                      {salarie.metier}
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
                      {formatDate(salarie.embauche)}
                    </p>
                  </td>
                  <td className="py-3 px-5 border-b border-bordergray">
                    <div className="flex items-center gap-4">
                      <Link href="/" className="text-yellow">
                        <Tooltip tooltip="Modifier">
                          <FaEdit />
                        </Tooltip>
                      </Link>
                      <Link href="/" className="text-red">
                        <Tooltip tooltip="Supprimer">
                          <FaRegTrashCan />
                        </Tooltip>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}
