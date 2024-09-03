import { IconProps } from '@/types/iconProps'
import clsx from 'clsx'
import { Spinner } from './spinner'
import { LinkType, LinkTypes } from '@/lib/link-type'
import Link from 'next/link'

interface Props {
  variant?: 'basique' | 'white'
  icon?: IconProps
  iconTheme?: 'basique' | 'secondary' | 'gray'
  iconPosition?: 'left' | 'right'
  action?: Function
}

export const Search = ({
  variant = 'basique',
  icon,
  iconTheme = 'basique',
  iconPosition = 'left',
  action = () => {},
}: Props) => {
  let variantStyles: string = '',
    sizeStyles: string = ''

  switch (variant) {
    case 'basique': //Default
      variantStyles =
        'bg-gray h-[30px] w-[300px] text-16Med text-textcolor border border-stroke rounded'
      break
    case 'white':
      variantStyles = 'bg-dark text-white rounded'
      break
  }

  return (
    <input
      type="text"
      className={clsx(variantStyles, 'w-300px outline-none px-2')}
      placeholder="Chercher..."
    />
  )
}

import React from 'react'

const SearchBar = ({ value = '' }) => {
  return (
    <div className="flex items-center border rounded-md p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-5-5M11 5a6 6 0 100 12 6 6 0 000-12z"
        />
      </svg>
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Search..."
        value={value}
      />
    </div>
  )
}

export default SearchBar
