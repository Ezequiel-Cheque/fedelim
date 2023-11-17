import { FirstRegister } from "../ui/components/register/FirstRegister";
import { Payment } from "../ui/components/register/Payment";

import { useState } from "react";
import "../style/register.css";

const Initial_menu = {
    selected: false,
    form: null
};

export const Register = () => {
    
    const [menu, setMenu] = useState(Initial_menu);

    const handle_return = () => {
        setMenu(Initial_menu);
    };

    const handle_menu = (e) => {
        const form = e.target.name;
        if (form == "return") {
            setMenu(Initial_menu);
        } else {
            setMenu({
                selected: true,
                form
            });
        }
    };
    
    return (
        <div className="register-container">
            
            {
                !menu?.selected && (
                    <div className="menu-container">
                        <h2 className="menu-title">Selecciona una opción</h2>
                        <div className="menu-buttons">
                            <button name="first_register" onClick={handle_menu}>Primer registro</button>
                            <button name="payment" onClick={handle_menu}>Abonar pago</button>
                        </div>
                    </div>
                )
            }
            {
                (menu?.selected && menu?.form == "first_register") && (
                    <FirstRegister
                        handle_menu={handle_menu}
                        handle_return={handle_return}
                    />
                ) 
            }
            {
                (menu?.selected && menu?.form == "payment") && (
                    <Payment
                        handle_menu={handle_menu}
                        handle_return={handle_return}
                    />
                ) 
            }
        </div>
    );
};