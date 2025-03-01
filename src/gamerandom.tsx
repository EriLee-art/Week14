// Button that randomly chooses a game for the user to play
// First chooses from priority, if none in priority, then chooses from regular

export default function Gamerandom() {

    const randomSelect = () => {
        alert("Your game has been chosen!")
    }

    return( 
    <>
        <p>Click to Randomly Select a game from your game list!</p>
        <button className="btn btn-outline-primary" onClick={randomSelect}>
                Select Game
            </button>
    </>
    )
}