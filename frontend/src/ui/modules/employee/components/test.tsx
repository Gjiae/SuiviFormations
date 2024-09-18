import { Container } from '@/ui/components/container'
import { Avatar } from '@/ui/design-system/avatar'
import { Search } from '@/ui/design-system/search'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaEdit, FaSearch } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import Tooltip from '@/utiles/tooltip'
import axios from 'axios'
import deleteEmployeeApi from '@/api/deleteEmployee'
import { formatDate } from '@/utiles/formatDates'
import { Typography } from '@/ui/design-system/typography'

const onDelete = async (_id: any) => {
  try {
    const res = await deleteEmployeeApi.deleteEmployee(_id)
    if (res.data.success) {
      alert(res.data.msg)
    }
  } catch (err) {
    console.error(err)
  }
}

export const EmployeeList = () => {
  const [Salaries, setSalaries] = useState([
    {
      _id: '',
      name: '',
      surname: '',
      service: '',
      metier: '',
      email: '',
      formations: [{
        idFormation: '',
        title: '',
        realisation: '',
        expiration: ''
      }]
    }
  ])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/salaries')
        setSalaries(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
    fetchUsers()
  }, [])

  const [open, setOpen] = React.useState(false)

  return (
    <Container className="mt-12 mb-8 flex flex-col gap-12">
      <div className="relative flex flex-col bg-clip-border rounded bg-white text-gray-700 shadow-md">
        <div
          className="flex justify-between items-center bg-gradient-to-tr from-bluegray800 to-bluegray900 bg-clip-border mx-4 rounded overflow-hidden text-white shadow-dark shadow-lg -mt-6 mb-8 p-4">
          <h6 className="block items-center antialiased font-semibold text-white">
            Liste des salariés
          </h6>
          <Search icon={{ icon: FaSearch }} />
        </div>
        <div className="p-6 px-0 pt-0 pb-2 grid grid-cols-10">
          <div className="col-span-7">
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
                  <p className="block antialiased text-12Reg font-bold uppercase text-textcolor" />
                </th>
              </tr>
              </thead>
              {Salaries.map((salarie) => (
                // eslint-disable-next-line react/jsx-key
                <tbody>
                <tr key={salarie._id}>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <Avatar
                        size="large"
                        forme="carre"
                        src="/assets/images/md.png"
                        alt="Avatar de Valentin Gazzoli" />
                      <div>
                        <Typography variant="16Reg" theme="black">
                          {salarie.surname} {salarie.name}
                        </Typography>
                        <Typography variant="12Reg" theme="gray">
                          {salarie.email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <Typography variant="16Reg" theme="black">
                      {salarie.service}
                    </Typography>
                    <Typography variant="12Reg" theme="gray">
                      {salarie.metier}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography variant="16Reg" theme="black">
                      {salarie.formations?.length > 0 ? salarie.formations?.length : 0} formations
                    </Typography>
                    <Typography variant="12Reg" theme="gray">
                      en cours de validité
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <Link href="/" className="text-yellow">
                        <Tooltip tooltip="Modifier">
                          <FaEdit />
                        </Tooltip>
                      </Link>
                      <div onClick={() => onDelete(salarie._id)} className="cursor-pointer">
                        <Tooltip tooltip="Supprimer">
                          <FaRegTrashCan className="text-red" />
                        </Tooltip>
                      </div>
                    </div>
                  </td>
                </tr>
                {salarie.formations?.map((formation) => (
                  <tr key={formation.idFormation}>
                    <td colSpan={3}
                        className="collaps-viewer py-3 px-5 mb-3 bg-white rounded shadow border-l-4 border-red flex justify-between items-center">
                      {salarie.formations?.length > 0 ? (
                        <div>
                          {formation.title}
                        </div>
                      ) : (
                        <div className="no-data"> No activity found! </div>
                      )}
                    </td>
                  </tr>
                ))}
                </tbody>
              ))}
            </table>
          </div>
          <div className="col-span-3">2</div>
        </div>
      </div>
    </Container>
  )
}