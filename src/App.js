import { useContext } from "react"
import { NavigationContext } from "./context/navigation"
import Sidebar from "./components/Sidebar"
import Route from "./components/Route"
import AccordionPage from "./pages/AccordionPage"
import DropdownPage from "./pages/DropdownPage"
import ButtonPage from "./pages/ButtonPage"
import ModalPage from "./pages/ModalPage"
import Modal from "./components/Modal"
const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  )
}

export default App
