import Swal from "sweetalert2";

const SweetAlert = ({ type, title, text }) => {
    return Swal.fire({
        icon: type,
        title: title,
        text: text,
        confirmButtonColor: "#2563eb",
        timer: 2000,
        showConfirmButton: false
    });
};

export default SweetAlert;