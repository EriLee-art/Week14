// Gives priority to certain games the user wishes to prioritize

import Gamecard from "./gamecard"

export default function Gamepriority1({ margin }: { margin:string }) {
    
    let gameName = [
        {
            id: 0,
            order: 1,
            game: `Red Dead Redemption 2`
        },
        {
            id: 1,
            order: 2,
            game: `Hollow Knight: SilkSong`
        },
        {
            id: 2,
            order: 3,
            game: `Elden Ring: Shadow of the Erdtree`
        }
    ]
    
    return(
        
        <>
            <h4 className={margin}>Game Priority 1</h4>
            {gameName.map( game => <div key={game.id}>
                        <Gamecard name={game}/>
                    </div>
                )
            }
        </>
    )
}