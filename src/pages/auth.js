const STORAGE_KEY = 'login_react'

const isAuthenticated = () => !!localStorage.getItem(STORAGE_KEY)
const login = token => localStorage.setItem(STORAGE_KEY, token)
const logout = token => localStorage.removeItem(STORAGE_KEY)

export { isAuthenticated, login, logout }