import "./Header.css"
import troll from "../troll-face.png"

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={troll} alt="" className="header__image"></img>
                <p className="header__name">MemeGenerator</p>
            </div>
            <p className="header__info">React Course - Project 3</p>
        </div>
    )
}