
import '../style/footer.css';

export const Footer = () => {
  return (
    <div className="footer-container">
        <div className='content-footer'>
            <div className='fedelim'>
                <img src="/assets/circle_fede.png" alt="" />
                <p>Federación de Jóvenes Bautistas ELIM</p>
            </div>
            <div className='unbj'>
                <img src="/assets/unbj.png" alt="" />
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
