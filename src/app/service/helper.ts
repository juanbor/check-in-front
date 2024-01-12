export const isAdminUser = () => {
  const userType = localStorage.getItem('user_type')
  return userType !== undefined && userType === 'ADMIN'
}

export const isNormalUser = () => {
  const userType = localStorage.getItem('user_type')
  return userType !== undefined && userType === 'NORMAL'
}