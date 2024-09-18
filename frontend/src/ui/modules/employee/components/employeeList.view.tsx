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
import IconButton from '@mui/material/IconButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

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
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
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
                    <TableCell className="py-3 px-5">
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
                        <div onClick={() => onDelete(salarie._id)} className="cursor-pointer">
                          <Tooltip tooltip="Supprimer">
                            <FaRegTrashCan className="text-red" />
                          </Tooltip>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                          <Typography variant="h3" component="div">
                            History
                          </Typography>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Customer</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Formations</TableCell>
                                <TableCell align="right"></TableCell>
                              </TableRow>
                            </TableHead>
                            <span>Coucou</span>
                          </Table>
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