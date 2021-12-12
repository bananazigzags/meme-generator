import "./Header.css"
import troll from "../troll-face.png"

export default function Header() {
    return (
        <div className="header">
            <img src={troll} alt="" className="header__image"></img>
            <h2 className="header__name">MemeGenerator</h2>
            <h4 className="header__info">React Course - Project 3</h4>
        </div>
    )
}