export const getstateColor = (expirationDate: Date) => {
  const today = new Date()
  const expDate = new Date(expirationDate)
  const threeMonthsFromNow = new Date(today.setMonth(today.getMonth() + 3))

  if (expDate < new Date()) return 'shadow shadow-red border-l-4 border-red';
  if (expDate <= threeMonthsFromNow) return 'shadow shadow-yellow border-l-4 border-yellow';
  return 'shadow shadow-green border-l-4 border-green';
}