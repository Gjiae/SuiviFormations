import { Container } from '@/ui/components/container'
import { Avatar } from '@/ui/design-system/avatar'
import Link from 'next/link'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { FaEdit, FaSearch, FaDownload } from 'react-icons/fa'
import { FaRegTrashCan, FaPlus } from 'react-icons/fa6'
import Tooltip from '@/utiles/tooltip'
import axios from 'axios'
import deleteEmployeeApi from '@/api/deleteEmployee'
import { Typography } from '@/ui/design-system/typography'
import { getstateColor } from '@/utiles/getStateColor'
import { formatDate } from '@/utiles/formatDates'
import deleteFormationAPI from '@/api/deleteFormation'

const onAddFormation = async (_id: any) => {
  try {
    const res = await deleteEmployeeApi.deleteEmployee(_id)
    if (res.data.success) {
      alert(res.data.msg)
    }
  } catch (err) {
    console.error(err)
  }
}

const onDeleteSalarie = async (_id: any) => {
  try {
    const res = await deleteEmployeeApi.deleteEmployee(_id)
    if (res.data.success) {
      alert(res.data.msg)
    }
  } catch (err) {
    console.error(err)
  }
}

const onDeleteFormation = async (_id: any) => {
  try {
    const res = await deleteFormationAPI.deleteFormation(_id)
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
        expiration: new Date
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

  const [expandedRows, setExpandedRows] = useState(null)

  const handleExpandRow = (index: any) => {
    let currentExpandedRows = null
    const isRowExpanded = currentExpandedRows === index ? index : null
    const newExpandedRows = isRowExpanded
      ? null
      : (currentExpandedRows = index)
    if (expandedRows !== index) {
      setExpandedRows(newExpandedRows)
    } else {
      setExpandedRows(null)
    }
  }

  const [filterText, setFilter] = useState('')

  const filterProducts = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toUpperCase())
  }

  const filtered = React.useMemo(() => {
    return Salaries.filter(salarie => {
      return filterText.length > 0 ?
        salarie.name.toString().toLowerCase().includes(filterText.toLowerCase()) || salarie.surname.toString().toLowerCase().includes(filterText.toLowerCase())
        : true
    })
  }, [filterText, Salaries])

  return (
    <Container className="mt-12 mb-8 flex flex-col gap-12">
      <div className="relative flex flex-col bg-clip-border rounded bg-white text-gray-700 shadow-md">
        <div
          className="flex justify-between items-center bg-gradient-to-tr from-bluegray800 to-bluegray900 bg-clip-border mx-4 rounded overflow-hidden text-white shadow-dark shadow-lg -mt-6 mb-8 p-4">
          <h6 className="block items-center antialiased font-semibold text-white">
            Liste des salariés
          </h6>
          <div className="flex items-center gap-2">
            <input
              type="search"
              className="bg-gray h-[40px] w-[300px] text-16Med text-textcolor border border-stroke rounded outline-none px-8"
              placeholder="Chercher un salarié..."
              onChange={filterProducts}
            />
            <div className="absolute text-textcolor px-2">
              {<FaSearch />}
            </div>
          </div>
        </div>
        <div className="p-6 px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] border-separate border-spacing-y-2">
            <thead>
            <tr>
              <th className="border-b border-bordergray py-3 px-5 text-left">
                <Typography variant="12Bold" className="uppercase text-textcolor">
                  Nom / Prénom
                </Typography>
              </th>
              <th className="border-b border-bordergray py-3 px-5 text-left">
                <Typography variant="12Bold" className="uppercase text-textcolor">
                  Service
                </Typography>
              </th>
              <th className="border-b border-bordergray py-3 px-5 text-left">
                <Typography variant="12Bold" className="uppercase text-textcolor">
                  Formations
                </Typography>
              </th>
              <th className="border-b border-bordergray py-3 px-5 text-left">
                <p className="uppercase text-textcolor" />
              </th>
            </tr>
            </thead>
            {filtered.map((salaried, index) => (
              // eslint-disable-next-line react/jsx-key
              <tbody>
              <tr key={index} onClick={() => handleExpandRow(index)} className="cursor-pointer">
                <td className="px-5">
                  <div className="flex items-center gap-4">
                    <Avatar
                      size="large"
                      forme="carre"
                      src="/assets/images/md.png"
                      alt="Avatar de Valentin Gazzoli" />
                    <div>
                      <Typography variant="16Reg" theme="black">
                        {salaried.name} {salaried.surname}
                      </Typography>
                      <Typography variant="12Reg" theme="gray">
                        {salaried.email}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5">
                  <Typography variant="16Reg" theme="black">
                    {salaried.service}
                  </Typography>
                  <Typography variant="12Reg" theme="gray">
                    {salaried.metier}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography variant="16Reg" theme="black">
                    {salaried.formations?.length > 0 ? salaried.formations?.length > 1 ? `${salaried.formations?.length} formations` : `${salaried.formations?.length} formation` : 'Aucune formation'}
                  </Typography>
                  <Typography variant="12Reg" theme="gray">
                    en cours de validité
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-4">
                    <div onClick={() => onAddFormation(salaried._id)} className="cursor-pointer">
                      <Tooltip tooltip="Ajouter une formation">
                        <FaPlus className="text-secondary" />
                      </Tooltip>
                    </div>
                    <Link href="/" className="text-yellow">
                      <Tooltip tooltip="Modifier">
                        <FaEdit />
                      </Tooltip>
                    </Link>
                    <div onClick={() => onDeleteSalarie(salaried._id)} className="cursor-pointer">
                      <Tooltip tooltip="Supprimer">
                        <FaRegTrashCan className="text-red" />
                      </Tooltip>
                    </div>
                  </div>
                </td>
              </tr>
              {expandedRows === index ? (
                salaried.formations?.map((formation, indexForm) => (
                  <tr key={indexForm}>
                    <td colSpan={4} className="px-10">
                    <div className={`py-3 px-8 rounded ${getstateColor(formation?.expiration)}`}>
                        {salaried.formations?.length > 0 ? (
                          <div className="items-center grid grid-cols-8">
                            <div className="col-span-3">
                              <Typography variant="14Med">{formation.title}</Typography>
                            </div>
                            <div className="col-span-2">
                              <Typography variant="14Med">Réalisation
                                : {formatDate(formation.realisation)}</Typography>
                            </div>
                            <div className="flex justify-center col-span-2">
                              <Typography variant="14Med">Expiration : {formatDate(formation.expiration)}</Typography>
                            </div>
                            <div className="justify-end flex items-center gap-2 col-span-1">
                              <Link href="/" className="text-secondary">
                                <Tooltip tooltip="Accéder au fichier">
                                  <FaDownload />
                                </Tooltip>
                              </Link>
                              <Link href="/" className="text-yellow">
                                <Tooltip tooltip="Modifier">
                                  <FaEdit />
                                </Tooltip>
                              </Link>
                              <div onClick={() => onDeleteFormation(salaried._id)} className="cursor-pointer">
                                <Tooltip tooltip="Supprimer">
                                  <FaRegTrashCan className="text-red" />
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="no-data"> No activity found! </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <></>)}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </Container>
  )
}