const STORAGE_KEY = 'login_react'

const isAuthenticated = () => !!localStorage.getItem(STORAGE_KEY);

export { STORAGE_KEY, isAuthenticated }