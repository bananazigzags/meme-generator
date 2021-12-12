import "./Meme.css"
import memesData from "../memesData.js"

export default function Form() {
    let randomSource;
    function handleClick() {
        const memes = memesData.data.memes;
        randomSource = memes[Math.floor(Math.random()*memes.length)].url;
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text" 
                    className="form__input"    
                />
                <input
                    type="text" 
                    placeholder="Bottom text"
                    className="form__input"
                />
                <button 
                    onClick={handleClick} className="form__button">Get a new meme image 🖼️</button>
            </div>
            <img 
                    classname="meme" 
                    src={randomSource} alt=""
            />
        </main>
    )
}