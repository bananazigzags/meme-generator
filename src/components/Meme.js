import "./Meme.css"
import React from 'react'
import memesData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleChange(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
               [event.target.name]: event.target.value
            }                

        })
    }
    
    function getMemeImage() {
        const memes = allMemeImages.data.memes;
        let randomSource = memes[Math.floor(Math.random()*memes.length)].url;
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