import { useState } from 'react'

export const [formations, setFormations] = useState([
  {
    name: 'Sécurité au travail',
    haveFormation: [
      {
        employee: 'Valentin Gazzoli',
        completionDate: '2023-05-15',
        expirationDate: '2024-05-15',
        certificate: true,
        certificateFile: null,
      },
      {
        employee: 'Maud Wallerich',
        completionDate: '2023-09-30',
        expirationDate: '2024-09-30',
        certificate: false,
        certificateFile: null,
      },
    ],
  },
  {
    name: 'Travail en hauteur',
    haveFormation: [
      {
        employee: 'Valentin Gazzoli',
        completionDate: '2023-05-15',
        expirationDate: '2024-05-15',
        certificate: true,
        certificateFile: null,
      },
      {
        employee: 'Maud Wallerich',
        completionDate: '2023-09-30',
        expirationDate: '2024-09-30',
        certificate: false,
        certificateFile: null,
      },
    ],
  },
  {
    name: "Montage d'échafaudage",
    haveFormation: [
      {
        employee: 'Sylvie Bauchet',
        completionDate: '2023-05-15',
        expirationDate: '2024-05-15',
        certificate: true,
        certificateFile: null,
      },
      {
        employee: 'Maud Wallerich',
        completionDate: '2023-09-30',
        expirationDate: '2024-09-30',
        certificate: false,
        certificateFile: null,
      },
    ],
  },
])
