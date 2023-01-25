import React, { createContext,useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null)

  const value = {
    user,
    setUser,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}