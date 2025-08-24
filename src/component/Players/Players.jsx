import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({playerRate, selectedPlayers}) => {


    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div>
            <div className="flex justify-between md:w-5/6 md:mx-auto md:mt-10 p-4">
                <h1 className="text-2xl font-bold ">Available Players</h1>
                <div className="flex gap-2">
                    <button className="btn">Available</button>
                    <button className="btn">Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            {/* player List  */}
            <div className="grid md:grid-cols-3 gap-10 md:w-5/6 md:mx-auto p-4">
                {
                    players.map(player => <Player playerRate={playerRate} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;