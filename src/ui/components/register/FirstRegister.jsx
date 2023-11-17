import { useState } from "react";
import { Loader } from "../loader";
import {registerUser} from "../../../services/user_services";
import { register_payment } from "../../../services/payment_service";
import upload_file from "../../../services/receipt_service";
import Swal from 'sweetalert2';

export const FirstRegister = ({ handle_menu, handle_return }) => {

    const [loader, setloader] = useState(false);

    const handle_submit = async (e) => {
        
        e.preventDefault();
        setloader(true);

        // Registrar Usuario
        const user_payload = {
            name: e.target.name.value,
            last_name: e.target.last_name.value, 
            email: e.target.email.value,
            phone: e.target.phone.value, 
            age: e.target.age.value, 
            church: e.target.church.value
        };

        const user = await registerUser(user_payload);

        if(!user.success) {
            setloader(false);
            handle_return();
            return;
        } 

        const user_id = user.data
        
        // Registrar pago
        const payment_payload = {
            id_user: user_id,
            name: e.target.name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            amount: e.target.amount.value
        };
        const payment = await register_payment(payment_payload);
        if(!payment.success) {
            setloader(false);
            handle_return();
            return;
        }

        const payment_id = payment.data;

        // Subir recibo
        const file = e.target.file.files[0];
        const uploadfile = await upload_file(file, payment_id, user_id);
        if(!uploadfile.success) {
            setloader(false);
            handle_return();
            return;
        }

        Swal.fire({
            title: "Registro exitoso",
            text: "Tu registro y pago se han registrado de manera exitosa, gracias",
            icon: "success"
        });
        handle_return();
        setloader(false);

    }

    return (
        <div className="form-register">
            <h2>Formulario de primer registro</h2>
            <hr />
            <form onSubmit={handle_submit}>
                <label>Nombre(s)</label>
                <input name="name" placeholder="Nombre" type="text" required />
                
                <label>Apellidos</label>
                <input name="last_name" placeholder="Apellidos" type="text" required />
                
                <label>Edad</label>
                <input name="age" placeholder="Edad" type="number" min="1" max="50" required />
                
                <label>Nombre de tu glesia</label>
                <input name="church" placeholder="Iglesia" type="text" required />
                
                <label>Teléfono</label>
                <input name="phone" placeholder="Telefono" type="tel" required  minLength={10} />
                
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