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
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import deleteFormationAPI from '@/api/deleteFormation'
import { makeStyles } from '@mui/styles'
import { textAlign } from '@mui/system'

const onDeleteEmpl = async (_id: any) => {
  try {
    const res = await deleteEmployeeApi.deleteEmployee(_id)
    if (res.data.success) {
      alert(res.data.msg)
    }
  } catch (err) {
    console.error(err)
  }
}

const onDeleteForm = async (_id: any) => {
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
      <div className="relative flex flex-col bg-clip-border rounded bg-white shadow-md">
        <div
          className="flex justify-between items-center bg-gradient-to-tr from-bluegray800 to-bluegray900 bg-clip-border mx-4 rounded overflow-hidden text-white shadow-dark shadow-lg -mt-6 mb-8 p-4">
          <h6 className="block items-center antialiased font-semibold text-white">
            Liste des salariés
          </h6>
          <Search icon={{ icon: FaSearch }} />
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  className="border-b border-bordergray py-3 px-5 text-left text-12Reg font-bold uppercase text-textcolor">Nom
                  / Prénom</TableCell>
                <TableCell
                  className="border-b border-bordergray py-3 px-5 text-left text-12Reg font-bold uppercase text-textcolor">Service</TableCell>
                <TableCell
                  className="border-b border-bordergray py-3 px-5 text-left text-12Reg font-bold uppercase text-textcolor">Formations</TableCell>
                <TableCell
                  className="border-b border-bordergray py-3 px-5 text-left text-12Reg font-bold uppercase text-textcolor"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Salaries.map((salarie) => (
                <React.Fragment key={salarie._id}>
                  <TableRow key={salarie._id}>
                    <TableCell onClick={() => setOpen(!open)} className="py-3 px-5">
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
                    </TableCell>
                    <TableCell className="py-3 px-5">
                      <Typography variant="16Reg" theme="black">
                        {salarie.service}
                      </Typography>
                      <Typography variant="12Reg" theme="gray">
                        {salarie.metier}
                      </Typography>
                    </TableCell>
                    <TableCell className="py-3 px-5">
                      <Typography variant="16Reg" theme="black">
                        {salarie.formations?.length > 0 ? salarie.formations?.length : 0} formations
                      </Typography>
                      <Typography variant="12Reg" theme="gray">
                        en cours de validité
                      </Typography>
                    </TableCell>
                    <TableCell className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <Link href="/" className="text-yellow">
                          <Tooltip tooltip="Modifier">
                            <FaEdit />
                          </Tooltip>
                        </Link>
                        <div onClick={() => onDeleteEmpl(salarie._id)} className="cursor-pointer">
                          <Tooltip tooltip="Supprimer">
                            <FaRegTrashCan className="text-red" />
                          </Tooltip>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                          {salarie.formations?.map((formation) => (
                            <Table size="small" key={formation.idFormation}>
                              <TableBody>
                                <TableRow className="collaps-viewer py-3 px-5 mb-3 bg-white rounded shadow border-l-4 border-red flex justify-between items-center">
                                  <TableCell>{formation.title}</TableCell>
                                  <TableCell>{formatDate(formation.realisation)}</TableCell>
                                  <TableCell>{formatDate(formation.expiration)}</TableCell>
                                  <TableCell className="py-3 px-5">
                                    <div className="flex items-center gap-4">
                                      <Link href="/" className="text-yellow">
                                        <Tooltip tooltip="Modifier">
                                          <FaEdit />
                                        </Tooltip>
                                      </Link>
                                      <div onClick={() => onDeleteForm(formation.idFormation)} className="cursor-pointer">
                                        <Tooltip tooltip="Supprimer">
                                          <FaRegTrashCan className="text-red" />
                                        </Tooltip>
                                      </div>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          ))}
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  )
}