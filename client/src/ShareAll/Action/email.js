import Axios from "axios";
import Swal from 'sweetalert2';
export const actPostEmailAPI = (email) => {
    return () => {
      const token = localStorage.getItem('token');
      Axios({
        method: "POST",
        url: `http://localhost:5000/api/mail/send-mail`,
        data:email,
        headers: {
          token: token
        }
      })
        .then((rs) => {
          Swal.fire("Gửi Email tuyển thành công!", "Nhấn OK để thoát!", "success");
        })
        .catch((error) => {
          Swal.fire(
            "không thành công !",
            error.response.data,
            "error"
          );
        });
    }
  };