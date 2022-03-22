import Swal, { SweetAlertIcon } from 'sweetalert2'

export const showNotify = (iconType: SweetAlertIcon, title: string, duration: number) => {
  Swal.fire({
    icon: iconType,
    title,
    showConfirmButton: false,
    timer: duration,
    showClass: {
      popup: 'animate__animated animate__fadeIn',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut',
    },
  })
}
