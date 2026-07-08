import Swal from "sweetalert2";

const SweetAlert = ({
  type,
  title,
  text,
  timer = 2000,
  showConfirmButton = false,
  confirmButtonText = "OK",
  allowOutsideClick = true,
  allowEscapeKey = true,
}) => {
  return Swal.fire({
    icon: type,
    title,
    text,
    confirmButtonColor: "#2563eb",
    confirmButtonText,
    showConfirmButton,
    allowOutsideClick,
    allowEscapeKey,
    ...(timer ? { timer } : {}),
  });
};

export default SweetAlert;
