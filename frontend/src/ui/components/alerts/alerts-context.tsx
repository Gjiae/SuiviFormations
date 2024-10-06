import React, { createContext, useContext, useRef, useState } from "react";
import { Alert, AlertsWrapper } from "./alert";

interface Props {
  children: React.ReactNode
}

interface Alert {
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
  id?: string;
}

const AlertsContext = createContext('AlertsContext');
const AlertsProvider = ({ children }: Props) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const generateUniqueId = (): string => {
    return Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36);
  }

  const addAlert = (alert: Alert): string => {
    const id = generateUniqueId();
    setAlerts(prev => updateAlerts(prev, alert, id));
    return id;
  }

  const updateAlerts = (prevAlerts: Alert[], alert: Alert, id: string): Alert[] => {
    return [{ ...alert, id }, ...prevAlerts];
  }

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }

  return (
    <AlertsContext.Provider value={{ alerts, addAlert, dismissAlert }}>
      <AlertsWrapper>
        {alerts.map((alert) => (
          <Alert key={alert.id} {...alert} handleDismiss={() => { dismissAlert(alert.id) }} />
        ))}
      </AlertsWrapper>
      {children}
    </AlertsContext.Provider>
  )
}

export const useAlerts = () => {
  const [alertIds, setAlertIds] = useState<number[]>([]);
  const alertIdsRef = useRef<number[]>(alertIds);
  // @ts-ignore
  const { addAlert, dismissAlert } = useContext(AlertsContext);

  const updateAlertIds = (ids: number[]) => {
    alertIdsRef.current = ids;
    setAlertIds(ids);
  };

  const addAlertWithId = (alert: any) => {
    const id = addAlert(alert);
    const updatedIds = [...alertIdsRef.current, id];
    updateAlertIds(updatedIds);
  };

  const clearAlerts = () => {
    alertIdsRef.current.forEach(dismissAlert);
    updateAlertIds([]);
  };

  return { addAlert: addAlertWithId, clearAlerts };
};

export default AlertsProvider;