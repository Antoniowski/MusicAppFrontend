import { useState } from "react"
import "./style/SongRow.css"
import "./style/Global.css"

type SongProp = {
    name: string
    duration: string
    album: string
}



const SongRow = (props: SongProp) => {

    let [isPlaying, setIsPlaying] = useState(false);

    const toggleButton = () =>{
        isPlaying ? setIsPlaying(false) : setIsPlaying (true)
    }

    return(
        <>
            <div className="row-container">
                <div className="img-cnt">
                    <div className="imag"></div>
                </div>
                <div className="text-cnt">
                    <div className="bold" id="song-name">{props.name}</div>
                    <div id="album-name">{props.album}</div>
                </div>
                <div className="btn-cnt">
                    <button onClick={toggleButton}>{isPlaying ? "⏸" : "⏵"}</button>
                </div>
            </div>
        </>
    )
}


export default SongRow