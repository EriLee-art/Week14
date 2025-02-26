// Creates an ordered list of games for the sidebar

import Gamecard from "./gamecard"
import Gamepriority1 from "./gamepriority1"
import Gamepriority2 from "./gamepriority2"
import Gamepriority3 from "./gamepriority3"

function Gamelist() {
    return(
        <>
        <p>Game List</p>
        <Gamepriority1 />
        <Gamepriority2 />
        <Gamepriority3 />
        </>
    )
}

export default Gamelist