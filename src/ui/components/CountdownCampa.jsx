import { useEffect } from 'react';
import '../../style/countdown.css';

export const Countdown = () => {
    
    const startCountDown = () => {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        // formato de fecha para cuenta regresiva: YYYY-MM-DD HH:MM:SS
        let campday = "2023-12-27 13:00:00";
    
        const countDown = new Date(campday).getTime();
    
        const x = setInterval(function() {
    
            const now = new Date().getTime();
            const distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day));
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            
            //do something later when date is reached
            if (distance < 0) {
                console.log("the time is over");
                clearInterval(x);
            }
        }, 0);

        const stopCountDown = () => {
            clearInterval(x);
        };

        return {
            stopCountDown
        }
    };



    useEffect(() => {

        const countDown = startCountDown();
        
        return () => {
            countDown.stopCountDown();
        };

    }, [])

    return(
        <div className="countdown-container">
                <h1 id="headline">Cuenta regresiva para el Campamento 🏕️</h1>
                <div id="countdown">
                    <ul>
                        <li><span id="days"></span>Dias</li>
                        <li><span id="hours"></span>Horas</li>
                        <li><span id="minutes"></span>Minutos</li>
                        <li><span id="seconds"></span>Segundos</li>
                    </ul>
                </div>
                <button className='info-button'> Más información </button>
        </div>
    )
};