import "../style/info.css";

export const Info = () => {
    return(
        <div className="info-container">
            <div className="div-info">
                <div className="logo-info">
                    <img src="src/assets/elim_square.png" alt="" />
                </div>
                <div className="info-text">
                    <p>
                        <h3>Misión</h3>
                        Servir al Señor con nuestros dones y talentos, brindando herramientas que busquen que cada jóven de la convención regional Bautista Elim, pueda tener un encuentro personal con el Señor y una vida devocional constante.
                    </p>
                    <p>
                        <h3>Visión</h3>
                        Ser una federación que se distinga por jóvenes que amen al Señor, sirvan en sus iglesias locales y tengan un compañerismo mutuo.
                    </p>
                </div>
            </div>
        </div>
    )
};