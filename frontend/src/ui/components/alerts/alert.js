import { useEffect } from "react"
import { classNames, svgPaths } from "./severity-styles"
import { IoCloseOutline } from 'react-icons/io5'

const Alert = ({ message = '', severity = 'info', timeout = 0, handleDismiss = null }) => {
  useEffect(() => {
    if (timeout > 0 && handleDismiss) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, timeout * 1000);
      return () => clearTimeout(timer);
    }
  }, [])

  const dismissAlert = (e) => {
    e.preventDefault();
    handleDismiss();
  }

  return message?.length && (
    <div className={classNames[severity] + " rounded px-3 py-3 mb-2 shadow-md pointer-events-auto"} role="alert">
      <div className="flex">
        <div className="py-1">
            {svgPaths[severity]}
        </div>
        <div className="px-4">
          <p className="font-bold">{severity.toUpperCase()}</p>
          <p className="text-sm">{message}</p>
        </div>
        <div className="ml-auto">
          {handleDismiss && (<button className="text-sm font-bold" type="button"
            onClick={dismissAlert}>
            <IoCloseOutline size="1.5rem"/>
          </button>)}
        </div>
      </div>
    </div>
  )
}

const AlertsWrapper = ({ children }) => {
  return (
    <div className="pointer-events-none fixed right-0 top-0 z-50 w-full min-w-fit max-w-sm p-4">
      {children}
    </div>
  )
}

export { Alert, AlertsWrapper }