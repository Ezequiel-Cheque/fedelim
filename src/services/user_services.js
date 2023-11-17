import base_api from "../utils/api_host";
import Swal from 'sweetalert2';

const findUser = async (email) => {
    // busca si el usuario ya esta registrado
    const user = await fetch(base_api + "/users/get/email/" + email, {
        headers: {
            "access-control-allow-origin": "*",
            "mode": 'no-cors',
            "referrerPolicy": 'no-referrer'
        }
    });
    if (user.status == 200) {
        const res = await user.json();
        return {
            success: true,
            data: res.data
        };
    } else {
        Swal.fire({
            title: "Error",
            text: "Este usuario no esta registrado, para abonar necesitas haber realizado un primer registro, asi que dirigite a la opcion de 'Primer registro'",
            icon: "error"
        });
        return {
            success: false,
            data: null
        };
    }
};

const registerUser = async (payload) => {
    // busca si el usuario ya esta registrado
    const user = await fetch(base_api + "/users/get/email/" + payload.email, {
        headers: {
            "access-control-allow-origin": "*",
            "mode": 'no-cors',
            "referrerPolicy": 'no-referrer'
        }
    });
    if (user.status == 200) {
        Swal.fire({
            title: "Error",
            text: "Este usuario ya esta registrado, si vas a abonar, selecciona la opcion 'Abonar pago' ",
            icon: "error"
        });
        return {
            success: false,
            data: null
        };
    }

    // Registrar usuario
    const url = base_api+"/users/create";
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "access-control-allow-origin": "*",
            "mode": 'no-cors',
            "referrerPolicy": 'no-referrer'
        }
    });
    if (response.status == 200) {
        const res = await response.json();
        return {
            success: true,
            data: res.data
        };
    } else {
        Swal.fire({
            title: "Error",
            text: "No podemos registrarte por el momento, revisa bien tus datos, intenta mas tarde, o comunicate por whatsapp para mas informacion",
            icon: "error"
        });
        return {
            success: false,
            data: null
        };
    }
};

const deleteUser = async (user_id) => {
    const url = base_api + "/users/delete/" + user_id;
    const delete_user = await fetch(url, {
        method: "DELETE",
        headers: {
            'accept': 'application/json',
            "mode": 'no-cors',
            "access-control-allow-origin": "*",
            "referrerPolicy": 'no-referrer'
        }
    });
    if (delete_user.status == 200) {
        const res = await delete_user.json();
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

export {registerUser, deleteUser, findUser};