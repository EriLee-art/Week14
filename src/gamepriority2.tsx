// Gives priority to certain games the user wishes to prioritize

import Gamecard from "./gamecard"

export default function Gamepriority2({ margin }: { margin:string }) {

    let gameName = [
        {
            id: 0,
            order: 1,
            game: `A Hat In Time`
        },
        {
            id: 1,
            order: 2,
            game: `Halo Infinite`
        },
        {
            id: 2,
            order: 3,
            game: `Grand Theft Auto: 6`
        }
    ]

    return(
        <>
            <h4 className={margin}>Game Priority 2</h4>
            <Gamecard name={gameName[0]}/>
            <Gamecard name={gameName[1]}/>
            <Gamecard name={gameName[2]}/>
        </>
    )
}