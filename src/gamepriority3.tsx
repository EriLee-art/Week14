// Gives priority to certain games the user wishes to prioritize

import Gamecard from "./gamecard"

export default function Gamepriority3({ margin }: { margin:string }) {

    let gameName = [
        {
            id: 0,
            order: 1,
            game: `Call of Duty: Black Ops 6`
        },
        {
            id: 1,
            order: 2,
            game: `The Legend of Zelda: Echoes of Wisdom`
        },
        {
            id: 2,
            order: 3,
            game: `Pokemon Legends: Z-A`
        }
    ]

    return(
        <>
            <h4 className={margin}>Game Priority 3</h4>
            {gameName.map( game => <div key={game.id}>
                        <Gamecard name={game}/>
                    </div>
                )
            }
        </>
    )
}