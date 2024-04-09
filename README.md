# Frontend MusicApp Project (React + TS)

It's the frontend part of a full-stack project that I used to exercise.
This ReactJS app is used to display songs that are retrieved using Java APIs I have created ("https://github.com/Antoniowski/MusicAppBackend").

Every song is displayed using one of this:

```js
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
```

