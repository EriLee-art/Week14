import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"
import Gamedisplay from "./gamedisplay"
import Sidebar from "./sidebar"
import Topbar from "./topbar"

export default function App() {
  return(
    <>
    <Sidebar />
    <Topbar />
    <Gamedisplay />
    </>
  )
}