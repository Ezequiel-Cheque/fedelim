import "../../style/album.css";
import camp1 from "../../../images/instalaciones/camp1.png";
import camp2 from "../../../images/instalaciones/camp2.png";
import camp3 from "../../../images/instalaciones/camp3.png";
import camp4 from "../../../images/instalaciones/camp4.png";
import camp5 from "../../../images/instalaciones/camp5.png";
import camp6 from "../../../images/instalaciones/camp6.png";
import camp7 from "../../../images/instalaciones/camp7.png";
import camp8 from "../../../images/instalaciones/camp8.png";
import camp9 from "../../../images/instalaciones/camp9.png";
import camp10 from "../../../images/instalaciones/camp11.png";


export const Album = () => {
    
    
    const handleImage = (e) => {
        // Get the modal
        const modal = document.getElementById("myModal");
        
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;

    };

    const handleClose = () => {
        // Get the modal
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    };


    return (
        <div className="album-section">
            <div className="album-container">
                <img className="myImg" src={camp1} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp2} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp3} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp4} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp5} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp6} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp7} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp8} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp9} onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src={camp10} onClick={handleImage} alt="Instalaciones campo David" />
            </div>
            
            <div id="myModal" className="modal">
                <span className="close" onClick={handleClose}>&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
            </div>
        </div>
    );
};