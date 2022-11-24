import "./styles.css";
function Button ({text, onClick}) {
    return (
        <section className="hero is medium is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                <Button onClick={() => onCLickButton('/game') } text='MetCamp Quiz' />
                </div>
            </div>
        </section>
    )
}

export default Button;