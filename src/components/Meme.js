import "./Meme.css"
import React from 'react'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes));
    }, [])

    function handleChange(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
               [event.target.name]: event.target.value
            }                

        })
    }
    
    function getMemeImage() {
        let randomSource = allMemes[Math.floor(Math.random()*allMemes.length)].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                memeImage: randomSource
            }
        });
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text" 
                    className="form__input"
                    name="topText"
                    onChange={handleChange}    
                />
                <input
                    type="text" 
                    placeholder="Bottom text"
                    className="form__input"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage} className="form__button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
            
            <img 
                    className="meme__img" 
                    src={meme.memeImage} alt=""
            />
            <span className="meme__text top">{meme.topText}</span>
            <span className="meme__text bottom">{meme.bottomText}</span>
            </div> 
        </main>
    )
}