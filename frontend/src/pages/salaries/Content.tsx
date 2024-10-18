import { AddEmployee } from '@/pages/salaries/addEmployee/addEmployee'
import ToolTip from '@/utiles/tooltip'
import { Button } from '@/ui/design-system/button'
import { FaPlus, FaRegTrashCan } from 'react-icons/fa6'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container } from '@/ui/components/container'
import { FaDownload, FaEdit, FaSearch } from 'react-icons/fa'
import { Typography } from '@/ui/design-system/typography'
import { Avatar } from '@/ui/design-system/avatar'
import Tooltip from '@/utiles/tooltip'
import Link from 'next/link'
import { getstateColor } from '@/utiles/getStateColor'
import { formatDate } from '@/utiles/formatDates'
import deleteEmployeeApi from '@/api/deleteEmployee'
import deleteFormationAPI from '@/api/deleteFormation'
import axios from 'axios'
import { useAlerts } from '@/ui/components/alerts/alerts-context'
import { AddFormation } from '@/pages/salaries/addFormation/addFormation'
import uploadFile from '@/api/uploadFile'

export const EmployeeContent = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [ModalAddForm, setModalAddForm] = useState(false)
  const [modified, setModified] = useState('')
  const { addAlert } = useAlerts()

  const onDeleteSalarie = async (_id: string) => {
    try {
      const res = await deleteEmployeeApi.deleteEmployee(_id)
      if (res.response === "success") {
        await getSalariesInfos()
        addAlert({ severity: 'success', message: "Le salarié a bien été supprimé de la liste !", timeout: 5 });
      }
    } catch (err) {
      addAlert({ severity: 'error', message: `Une erreur a eu lieu lors de la suppression : ${err}`, timeout: 5 });
    }
  }

  const onDeleteFormation = async (idSalaried: string, idFormation: string) => {
    try {
      const res = await deleteFormationAPI.deleteFormation({ idSalaried, idFormation })
      console.log(res.response)
      if (res.response === "success") {
        await getSalariesInfos()
        addAlert({ severity: 'success', message: "La formation a bien été supprimée de la liste !", timeout: 5 });
      }
    } catch (err) {
      addAlert({ severity: 'error', message: `Une erreur a eu lieu lors de la suppression : ${err}`, timeout: 5 });
    }
  }

  const [Salaries, setSalaries] = useState([
    {
      _id: '',
      name: '',
      surname: '',
      service: '',
      metier: '',
      email: '',
      sexe: '',
      formations: [{
        idFormation: '',
        title: '',
        realisation: '',
        expiration: new Date,
        idAttestation: ''
      }]
    }
  ])

  const getSalariesInfos = async (): Promise<void> => {
    try {
      const response = await axios.get('http://localhost:3000/api/salaries');
      setSalaries(response.data);
    } catch (error) {
      addAlert({ severity: 'error', message: { error }, timeout: 5 });
    }
  };

  useEffect(() => {
    getSalariesInfos().then(() => console.log('Liste des salariés chargée'));
  },[])

  const [expandedRows, setExpandedRows] = useState(null)

  const handleExpandRow = (index: any) => {
    const currentExpandedRows = null
    const isRowExpanded = currentExpandedRows === index ? index : null
    const newExpandedRows = isRowExpanded
      ? null
      : index
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
    <>
      <Container className="mb-8 mt-12 flex flex-col gap-12">
        <div className="relative flex flex-col rounded bg-white bg-clip-border text-gray-700 shadow-md">
          <div
            className="from-bluegray800 to-bluegray900 shadow-dark mx-4 -mt-6 mb-8 flex items-center justify-between overflow-hidden rounded bg-gradient-to-tr bg-clip-border p-4 text-white shadow-lg">
            <h6 className="block items-center font-semibold text-white antialiased">
              Liste des salariés
            </h6>
            <div className="flex items-center gap-2">
              <input
                type="search"
                className="bg-gray text-16Med text-textcolor border-stroke h-[40px] w-[300px] rounded border px-8 outline-none"
                placeholder="Chercher un salarié..."
                onChange={filterProducts}
              />
              <div className="text-textcolor absolute px-2">
                {<FaSearch />}
              </div>
            </div>
          </div>
          <div className="p-6 px-0 pb-2 pt-0">
            <table className="w-full min-w-[640px] border-separate border-spacing-y-2">
              <thead>
              <tr>
                <th className="border-bordergray border-b px-5 py-3 text-left">
                  <Typography variant="12Bold" className="text-textcolor uppercase">
                    Nom / Prénom
                  </Typography>
                </th>
                <th className="border-bordergray border-b px-5 py-3 text-left">
                  <Typography variant="12Bold" className="text-textcolor uppercase">
                    Service
                  </Typography>
                </th>
                <th className="border-bordergray border-b px-5 py-3 text-left">
                  <Typography variant="12Bold" className="text-textcolor uppercase">
                    Formations
                  </Typography>
                </th>
                <th className="border-bordergray border-b px-5 py-3 text-left">
                  <p className="text-textcolor uppercase" />
                </th>
              </tr>
              </thead>
              {filtered.map((salaried, index) => (
                <tbody key={index}>
                <tr onClick={() => handleExpandRow(index)} className={salaried.formations?.length > 0 ? "cursor-pointer" : "" }>
                  <td className="px-5">
                    <div className="flex items-center gap-4">
                      <Avatar
                        size="large"
                        forme="rond"
                        src={salaried.sexe === 'Masculin' ? '/assets/images/Profil_H.png' : '/assets/images/Profil_F.png'}
                        alt={`Avatar de ${salaried.surname} ${salaried.name}`} />
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
                  <td className="px-5 py-3">
                    <Typography variant="16Reg" theme="black">
                      {salaried.service}
                    </Typography>
                    <Typography variant="12Reg" theme="gray">
                      {salaried.metier}
                    </Typography>
                  </td>
                  <td className="px-5 py-3">
                    <Typography variant="16Reg" theme="black">
                      {salaried.formations?.length > 0 ? salaried.formations?.length > 1 ? `${salaried.formations?.length} formations` : `${salaried.formations?.length} formation` : 'Aucune formation'}
                    </Typography>
                    <Typography variant="12Reg" theme="gray">
                      en cours de validité
                    </Typography>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-4">
                      <div onClick={() => {
                        setModalAddForm(true)
                        setModified(salaried._id)
                      }}
                           className="cursor-pointer">
                        <Tooltip id="1" tooltip="Ajouter une formation">
                          <FaPlus className="text-secondary" />
                        </Tooltip>
                      </div>
                      <Link href="/" className="text-yellow">
                        <Tooltip id="2" tooltip="Modifier">
                          <FaEdit />
                        </Tooltip>
                      </Link>
                      <div onClick={() => onDeleteSalarie(salaried._id)} className="cursor-pointer">
                        <Tooltip id="3" tooltip="Supprimer">
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
                        <div className={`rounded px-8 py-3 ${getstateColor(formation?.expiration)}`}>
                          {salaried.formations?.length > 0 ? (
                            <div className="grid grid-cols-8 items-center">
                              <div className="col-span-3">
                                <Typography variant="14Med">{formation.title}</Typography>
                              </div>
                              <div className="col-span-2">
                                <Typography variant="14Med">Réalisation
                                  : {formatDate(formation.realisation)}</Typography>
                              </div>
                              <div className="col-span-2 flex justify-center">
                                <Typography variant="14Med">Expiration
                                  : {formatDate(formation.expiration)}</Typography>
                              </div>
                              <div className="col-span-1 flex items-center justify-end gap-2">
                                <Link href={`http://localhost:3000/api/uploadFile/${formation.idAttestation}`} className="text-secondary">
                                  <Tooltip id="10" tooltip="Télécharger le fichier">
                                    <FaDownload />
                                  </Tooltip>
                                </Link>
                                <Link href="/" className="text-yellow">
                                  <Tooltip id="20" tooltip="Modifier">
                                    <FaEdit />
                                  </Tooltip>
                                </Link>
                                <div onClick={() => onDeleteFormation(salaried._id, formation.idFormation)} className="cursor-pointer">
                                  <Tooltip id="30" tooltip="Supprimer">
                                    <FaRegTrashCan className="text-red" />
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>No activity found !</div>
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
      <AddEmployee isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <AddFormation isOpen={ModalAddForm} onClose={() => setModalAddForm(false)}  idSalaried={modified}/>
      <div className="fixed bottom-8 right-8 z-40">
        <ToolTip id="100" tooltip="Ajouter un salarié">
          <Button variant="ico" icon={{ icon: FaPlus }} action={() => setModalOpen(true)} />
        </ToolTip>
      </div>
    </>
  )
}