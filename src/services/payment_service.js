import base_api from "../utils/api_host";
import { deleteUser } from "./user_services";
import Swal from 'sweetalert2';

const register_payment = async (payload, firstpayment = true) => {
    
    const url = base_api+"/payments/create";

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "mode": 'no-cors'
        }
    });
    if (response.status == 200) {
        const res = await response.json();
        return {
            success: true,
            data: res.data
        };
    } else {
        if(firstpayment){
            const delete_user = await deleteUser(payload.user_id);
        }
        
        Swal.fire({
            title: "Error",
            text: "No podemos registrarte tu pago, revisa bien tus datos, intenta mas tarde, o comunicate por whatsapp para mas informacion",
            icon: "error"
        });
        return {
            success: false,
            data: null
        };
    }
};

const deletePayment = async (payment_id) => {
    const url = base_api + "/payments/delete/" + payment_id;
    const delete_payment = await fetch(url, {
        method: "DELETE",
        headers: {
            'accept': 'application/json',
            "mode": 'no-cors'
        }
    });
    if (delete_payment.status == 200) {
        const res = await delete_payment.json();
        return {
            success: true,
            data: res
        };
    } else {
        return {
            success: false,
            data: null
        };
    }
};


export { register_payment, deletePayment }