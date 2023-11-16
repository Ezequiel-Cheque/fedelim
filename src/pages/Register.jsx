import { useState } from "react";
import "../style/register.css";
import base_api from "../utils/api_host";

import Swal from 'sweetalert2'
import { Loader } from "../ui/components/loader";

export const FirstRegister = ({ handle_menu, handle_return }) => {

    const [loader, setloader] = useState(false);
    
    const upload_file = async (file) => {
        
        const body = new FormData();
        
        body.append("file", new File([file], file.name));

        const upload = await fetch(base_api+"/payments/uploadfile", {
            method: "POST",
            body: body,
            headers: {
                "accept": "application/json"
            }
        });
        
        if (upload.status == 200) {
            const upload_response = await upload.json();
            return upload_response.data;
        } else {
            return false;
        }
    };

    const register_user = async (payload) => {
        // busca si el usuario ya esta registrado
        const user = await fetch(base_api + "/users/get/email/" + payload.email);
        if (user.status == 200) {
            return {
                error: true,
                msg: "Este usuario ya esta registrado, si vas a abonar, selecciona la opcion 'Abonar pago' "
            }
        }

        // Registrar usuario
        const url = base_api+"/users/create";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        });
        if (response.status == 200) {
            const res = await response.json();
            return res.data;
        } else {
            return {
                error: true,
                msg: "No podemos registrarte por el momento, revisa bien tus datos, intenta mas tarde, o comunicate por whatsapp para mas informacion"
            }
        }
    };

    const register_payment = async (id_user, amount, receipt_name, name, last_name, email) => {
        const url = base_api+"/payments/create";
        
        const payload = {
            id_user: id_user,
            name: name,
            last_name: last_name,
            email: email,
            amount: amount,
            receipt: receipt_name
        };
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        });
        if (response.status == 200) {
            const res = await response.json();
            return res.data;
        } else {
            return false
        }
    };

    const handle_submit = async (e) => {
        
        e.preventDefault();
        setloader(true);

        const user_payload = {
            name: e.target.name.value,
            last_name: e.target.last_name.value, 
            email: e.target.email.value, 
            phone: e.target.phone.value, 
            age: e.target.age.value, 
            church: e.target.church.value,
            paid: false 
        };
        // Registrar Usuario
        const user_id = await register_user(user_payload);
        if (user_id?.error) {
            Swal.fire({
                title: "Error",
                text: user_id.msg,
                icon: "error"
            });
            setloader(false);
            handle_return();
            return;
        }
        
        // Subir recibo
        const file = e.target.file.files[0];
        upload_file(file).then(async (response) => {
            if (!response) {
                Swal.fire({
                    title: "Error",
                    text: "No podemos subir tu recibo de pago por el momento, intenta mas tarde, o comunicate por whatsapp para mas informacion",
                    icon: "error"
                });
                setloader(false);
                return;
            }

            // Registrar pago
            const payment = await register_payment(user_id, e.target.amount.value, response.file_name, e.target.name.value, e.target.last_name.value, e.target.email.value);
            if (!payment) {
                Swal.fire({
                    title: "Error",
                    text: "No podemos registrarte por el momento, revisa bien tus datos, intenta mas tarde, o comunicate por whatsapp para mas informacion",
                    icon: "error"
                });
                setloader(false);
                return;
            }
            Swal.fire({
                title: "Registro exitoso !!",
                text: "Su registro se realizo exitosamente",
                icon: "success"
            });
            setloader(false);
            handle_return();
        });

    }

    return (
        <div className="form-register">
            <h2>Formulario de primer registro</h2>
            <hr />
            <form onSubmit={handle_submit}>
                <label>Nombre(s)</label>
                <input name="name" placeholder="Nombre" type="text" required />
                
                <label>Apellido</label>
                <input name="last_name" placeholder="Apellidos" type="text" required />
                
                <label>Edad</label>
                <input name="age" placeholder="Edad" type="number" min="1" max="50" required />
                
                <label>Nombre de tu glesia</label>
                <input name="church" placeholder="Iglesia" type="text" required />
                
                <label>Teléfono</label>
                <input name="phone" placeholder="Telefono" type="tel" required />
                
                <label>Correo electrónico</label>
                <input name="email" placeholder="Correo electronico" type="email" required />
                
                <label>Monto depositado</label>
                <input name="amount" placeholder="Monto pagado" type="number" required />
                
                <label>Captura tu recibo de pago</label>
                <input
                    name="file"
                    placeholder="Recibo de pago"
                    type="file"
                    required
                    accept=".jpg, .jpeg, .png"
                />

                {
                    loader ? (
                        <Loader />
                    ) : (
                        <div className="div-buttons">
                            <button type="submit">Enviar</button>
                            <button name="return" onClick={handle_menu}>Cancelar</button>
                        </div>
                    )
                }
            </form>
        </div>
    )
};




export const Payment = ({ handle_menu, handle_return }) => {

    const [loader, setloader] = useState(false);

    const upload_file = async (file) => {
        
        const body = new FormData();
        
        body.append("file", new File([file], file.name));

        const upload = await fetch(base_api+"/payments/uploadfile", {
            method: "POST",
            body: body,
            headers: {
                "accept": "application/json"
            }
        });
        
        if (upload.status == 200) {
            const upload_response = await upload.json();
            return upload_response.data;
        } else {
            return false;
        }
    };

    const handle_submit = async (e) => {
        e.preventDefault();
        setloader(true);
        const email = e.target.email.value;
        
        //buscar usuario
        const user_url = base_api + "/users/get/email/" + email;
        const user = await fetch(user_url);
        if (user.status != 200) {
            Swal.fire({
                title: "Registro no encontrado",
                text: "No se encontro ningun primero registro asignado al correo: " + email + ". Si es tu primer registro por favor dirigete al apartado de 'Primer registro'",
                icon: "error"
            });
            setloader(false);
            handle_return();
        }
        const user_data = await user.json()
        
        const file = e.target.file.files[0];
        upload_file(file).then(async (response) => {
            if (!response) {
                Swal.fire({
                    title: "Error",
                    text: "No podemos subir tu recibo de pago por el momento, intenta mas tarde, o comunicate por whatsapp para mas informacion",
                    icon: "error"
                });
                setloader(false);
                return;
            }
            //crear un pago
            const payment_payload = {
                id_user: user_data.data.id,
                name: e.target.name.value,
                last_name: e.target.last_name.value,
                email: email,
                amount: e.target.amount.value,
                receipt: response.file_name
            };

            const url = base_api+"/payments/create";
        
            const payment = await fetch(url, {
                method: "POST",
                body: JSON.stringify(payment_payload),
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            });
            if (payment.status != 200) {
                Swal.fire({
                    title: "Error",
                    text: "No podemos registrar tu pago por el momento, intenta mas tarde, o comunicate por whatsapp para mas informacion",
                    icon: "error"
                });
                setloader(false);
                return;
            }
            Swal.fire({
                title: "Registro exitoso !!",
                text: "Su registro se realizo exitosamente",
                icon: "success"
            });
            handle_return();
        });

        setloader(false);
    }

    return (
        <div className="form-payment">
            <h2>Formulario para abonar pago</h2>
            <hr />
            <form onSubmit={handle_submit}>
                <label>Nombre(s)</label>
                <input name="name" placeholder="Nombre" type="text" required />
                
                <label>Apellido</label>
                <input name="last_name" placeholder="Apellidos" type="text" required />
                
                <label>Correo electrónico</label>
                <input name="email" placeholder="Correo electronico" type="email" required />
                
                <label>Monto depositado</label>
                <input name="amount" placeholder="Monto pagado" type="number" required />
                
                <label>Captura tu recibo de pago</label>
                <input
                    name="file"
                    placeholder="Recibo de pago"
                    type="file"
                    required
                    accept=".jpg, .jpeg, .png"
                />

                {
                    loader ? (
                        <Loader />
                    ) : (
                        <div className="div-buttons">
                            <button type="submit">Enviar</button>
                            <button name="return" onClick={handle_menu}>Cancelar</button>
                        </div>
                    )
                }
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