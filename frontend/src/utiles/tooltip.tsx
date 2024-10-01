import { ReactNode } from 'react'
import { Tooltip } from 'react-tooltip'

interface Props {
  children: ReactNode
  tooltip?: string
  id: string
  position?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
}

export const ToolTip = ({ id, children, tooltip, position = 'top' }: Props) => {


  return (
    <>
      <a data-tooltip-id={id}>
        {children}
      </a>
      <Tooltip
        id={id}
        content={tooltip}
        place={position}
      />
    </>
  )
}

export default ToolTip
