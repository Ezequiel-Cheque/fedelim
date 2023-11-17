import base_api from "../utils/api_host";
import Swal from 'sweetalert2';
import { deletePayment } from "./payment_service";
import { deleteUser } from "./user_services";

const regiister_receipt = async(file, id_payment) => {
    const payload = {
        file_name: file,
        id_payment: id_payment
    }
    const url = base_api+"/receipts/create";
    const register = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json",
            "mode": 'no-cors',
            "access-control-allow-origin": "*"
        }
    });
    if (register.status == 200){
        return true
    } else {
        return false
    }
};

const upload_file = async (file, id_payment, id_user, firstpayment = true) => {

    const body = new FormData();
    body.append("file", new File([file], file.name));

    const upload = await fetch(base_api+"/receipts/uploadfile", {
        method: "POST",
        body: body,
        headers: {
            "accept": "application/json",
            "mode": 'no-cors',
            "access-control-allow-origin": "*"
        }
    });
    
    if (upload.status == 200) {
        const upload_response = await upload.json();
        
        const register = regiister_receipt( upload_response.data.file_name, id_payment)
        
        return {
            success: true,
            data: upload_response.data
        };
    } else {
        if (firstpayment) {
            const deletepayment = await deletePayment(id_payment);
            const deleteuser = await deleteUser(id_user);
        }
        Swal.fire({
            title: "Error",
            text: "No podemos subir tu recibo de pago por el momento, intenta mas tarde, o comunicate por whatsapp para mas informacion",
            icon: "error"
        });
        return false;
    }
};

export default upload_file;