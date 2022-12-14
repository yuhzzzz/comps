import { createContext, useState, useEffect } from "react"

export const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener("popstate", handler)

    return () => {
      window.removeEventListener("popstate", handler)
    }
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, "", to)
    setCurrentPath(to)
  }

  return (
    <NavigationContext.Provider
      value={{
        navigate,
        currentPath,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
