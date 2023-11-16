import { useState } from "react";
import "../style/register.css";

export const FirstRegister = ({ handle_menu }) => {
    
    const handle_submit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div className="form-register">
            <h2>Formulario de primer registro</h2>
            <hr />
            <form onSubmit={handle_submit}>
                <label>Nombre(s)</label>
                <input name="name" placeholder="Nombre" type="text" required />
                
                <label>Apellido</label>
                <input name="lastName" placeholder="Apellidos" type="text" required />
                
                <label>Edad</label>
                <input name="age" placeholder="Edad" type="number" min="1" max="50" step="2" required />
                
                <label>Nombre de tu glesia</label>
                <input name="church" placeholder="Iglesia" type="text" required />
                
                <label>Teléfono</label>
                <input name="telephone" placeholder="Telefono" type="tel" required />
                
                <label>Correo electrónico</label>
                <input name="email" placeholder="Correo electronico" type="email" required />
                
                <label>Monto depositado</label>
                <input name="amount" placeholder="Monto pagado" type="number" required />
                
                <label>Captura tu recibo de pago</label>
                <input
                    name="receipt"
                    placeholder="Recibo de pago"
                    type="file"
                    required
                    accept=".jpg, .jpeg, .png"
                />

                <div className="div-buttons">
                    <button type="submit">Enviar</button>
                    <button name="return" onClick={handle_menu}>Cancelar</button>
                </div>
            </form>
        </div>
    )
};

export const Payment = ({ handle_menu }) => {

    const handle_submit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div className="form-payment">
            <h2>Formulario para abonar pago</h2>
            <hr />
            <form onSubmit={handle_submit}>
                <label>Nombre(s)</label>
                <input name="name" placeholder="Nombre" type="text" required />
                
                <label>Apellido</label>
                <input name="lastName" placeholder="Apellidos" type="text" required />
                
                <label>Correo electrónico</label>
                <input name="email" placeholder="Correo electronico" type="email" required />
                
                <label>Monto depositado</label>
                <input name="amount" placeholder="Monto pagado" type="number" required />
                
                <label>Captura tu recibo de pago</label>
                <input
                    name="receipt"
                    placeholder="Recibo de pago"
                    type="file"
                    required
                    accept=".jpg, .jpeg, .png"
                />

                <div className="div-buttons">
                    <button type="submit">Enviar</button>
                    <button name="return" onClick={handle_menu}>Cancelar</button>
                </div>
            </form>
        </div>
    )
};

const Initial_menu = {
    selected: false,
    form: null
};

export const Register = () => {
    
    const [menu, setMenu] = useState(Initial_menu);

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
                    />
                ) 
            }
            {
                (menu?.selected && menu?.form == "payment") && (
                    <Payment
                        handle_menu={handle_menu}
                    />
                ) 
            }
        </div>
    );
};