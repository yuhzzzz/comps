import { useContext } from "react"
import { NavigationContext } from "../context/navigation"

export const useNavigation = () => {
  return useContext(NavigationContext)
}
