import { useState } from "react";
import Swal from 'sweetalert2'
import base_api from "../../../utils/api_host";
import { Loader } from "../loader";
import { findUser } from "../../../services/user_services";
import { register_payment } from "../../../services/payment_service";
import upload_file from "../../../services/receipt_service";

export const Payment = ({ handle_menu, handle_return }) => {

    const [loader, setloader] = useState(false);

    const handle_submit = async (e) => {
        e.preventDefault();
        setloader(true);
        
        const email = e.target.email.value;
        
        //buscar usuario
        const user = await findUser(email);
        console.log(user);
        if(!user.success) {
            setloader(false);
            handle_return();
            return;
        }
        
        const id_user = user.data.id;
        // registrar pago
        const payment_payload = {
            id_user: id_user,
            name: e.target.name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            amount: e.target.amount.value
        }
        const payment = await register_payment(payment_payload, false);
        if(!payment.success) {
            setloader(false);
            handle_return();
            return;
        }

        const payment_id = payment.data;

        // Subir recibo
        const file = e.target.file.files[0];
        const uploadfile = await upload_file(file, payment_id, id_user, false);
        if(!uploadfile.success) {
            setloader(false);
            handle_return();
            return;
        }

        Swal.fire({
            title: "Registro exitoso",
            text: "Tu pago se han registrado de manera exitosa, gracias",
            icon: "success"
        });

        handle_return();
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