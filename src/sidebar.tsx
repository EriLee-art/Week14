import Gamelist from "./gamelist"

// Sidebar for the application
export default function Sidebar() {
    return(
        <div className="container-fluid text-center d-flex flex-column">
            <h1 className="mt-4 mb-4">My Games</h1>
            <Gamelist />
        </div>
    )
}