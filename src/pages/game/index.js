import { link } from "react-router-dom";
function Game() {
return(
    <div className="container">
        <section className="section">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="is-active">
                        <Link to="/game">Juego</Link>

                    </li>
                </ul>

            </nav>

        </section>

    </div>
)
}

export default Game;