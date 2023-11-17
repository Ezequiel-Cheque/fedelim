import '../style/footer.css';
import circle_fede from "../../images/circle_fede.png";
import unbj from "../../images/unbj.png";

export const Footer = () => {
  return (
    <div className="footer-container">
        <div className='content-footer'>
            <div className='fedelim'>
                <img src={circle_fede} alt="" />
                <p>Federación de Jóvenes Bautistas ELIM</p>
            </div>
            <div className='unbj'>
                <img src={unbj} alt="" />
                <p>Pertenecientes a la Unión Nacional Bautista de Jóvenes/UNBJ México</p>
            </div>
        </div>
        <div className='copy-rigth'>
            <p>
                &#169; 2023 Ezequiel de la luz
            </p>
        </div>
    </div>
  )
}
