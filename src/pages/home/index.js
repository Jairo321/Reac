import Button from "../../components/Buttons";
import {useNavigate} from "react-router-dom"
import background from "../../assets/background.jpg";
import background2 from "../../assets/fondo2.jpg"
import { useState } from "react";


function Home() {
    const navigate=useNavigate();
    const onCLickButton=(url) => {
        navigate(url);
    }
return (
    <section className="hero is-medium is-fullheight" style={{backgroundImage:`url(${background})`,backgroundSize:"cover"}}>;
<div className="hero-body">
    <div className="container has-text-centered">
    <Button onCLick={()=> onCLickButton('/game')} text='MetCamp Quiz' />
    </div>
</div>
    </section>
    

)
}

export default Game;