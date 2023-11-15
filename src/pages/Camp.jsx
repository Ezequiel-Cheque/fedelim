import "../style/camp.css";
import { Album } from "../ui/components/AlbumCamp";
import { Banner } from "../ui/components/BannerRegister";

export const Camp = () => {
    return(
        <div className="camp-container">
            <Banner />
            <div className="campInfo">
                <h1>Conoce el lugar del campamento</h1>

                <div className="info-section">
                    <div className="info-card">
                            <span><i class="fa-solid fa-location-dot"></i></span>
                            <h2>UBICACIÓN</h2>
                        <p>
                            El lugar del campamento se encuentra una localidad llamada <strong>Tetecalita</strong> correspondiente al municipio de Emiliano Zapata, en el estado de Morelos.
                            <br/>Dirección: Av. de las Granjas s/n Tetecalita Morelos.
                            <br/><a href="https://maps.app.goo.gl/kL6jgebRzj4YNZcQ9" target="_blank"><strong>Google maps aqui</strong></a>
                        </p>
                    </div>
                    <div className="info-card">
                            <span><i class="fa-solid fa-users-line"></i></span>
                            <h2>HOSPEDAJE</h2>
                        <p>
                            El lugar cuenta con dos cabañas, una designada a hombres, y otra designada a mujeres.
                            <br/>La capacidad de cada cabaña es de 40 personas, lo que hace que en total haya capacidad de 80 personas en las cabañas.
                            <br/><strong>Los primeros 80 jóvenes (40 hombres, 40 mujeres)</strong> en registrarse tendrán la oportunidad de hospedarse en las cabañas.
                            <br/>Para aquellos que se registren después su hospedaje deberá ser en casa de campaña, el Campamento cuenta con una amplia zona para acampar <strong>(deberás llevar tu propia casa de campaña)</strong>.
                        </p>
                    </div>
                    <div className="info-card">
                            <span><i class="fa-solid fa-house"></i></span>
                            <h2>INSTALACIONES</h2>
                        <p>
                            Las instalaciones del campamento cuentan con:
                            <br/>• Cabaña para hombres, cabaña para mujeres
                            <br/>• Baños con regaderas para hombres y para mujeres
                            <br/>• Alberca amplia
                            <br/>• Cancha de futbol
                            <br/>• Cancha de basquetbol
                            <br/>• Pequeño auditorio
                            <br/>• Zona de fogata
                            <br/>• Comedor
                        </p>
                    </div>
                </div>

            </div>
            <div className="gallery">
                <hr />
                <h2>Galeria</h2>
            </div>
            <Album />
        </div>
    )
};