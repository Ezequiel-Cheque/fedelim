import "../../style/album.css";

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
                <img className="myImg" src="/assets/instalaciones/camp1.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp2.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp3.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp4.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp5.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp6.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp7.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp8.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp9.png" onClick={handleImage} alt="Instalaciones campo David" />
                <img className="myImg" src="/assets/instalaciones/camp11.png" onClick={handleImage} alt="Instalaciones campo David" />
            </div>
            
            <div id="myModal" className="modal">
                <span className="close" onClick={handleClose}>&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
            </div>
        </div>
    );
};