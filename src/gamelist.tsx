// Creates an ordered list of games for the sidebar

import Gamepriority1 from "./gamepriority1"
import Gamepriority2 from "./gamepriority2"
import Gamepriority3 from "./gamepriority3"

export default function Gamelist() {

    const Spacing = `mb-4`

    return(
        <>
            <Gamepriority1 margin={Spacing}/>
            <Gamepriority2 margin={Spacing}/>
            <Gamepriority3 margin={Spacing}/>
        </>
    )
}