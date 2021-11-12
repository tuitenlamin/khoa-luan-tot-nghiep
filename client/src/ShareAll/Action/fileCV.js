import Axios from "axios";
import Swal from 'sweetalert2';
import * as actType from "../Constans/actType";

Axios.defaults.headers.common['token'] = localStorage.getItem("token");
export const actCreateFileCV = (user)=>{
  const token = localStorage.getItem('token');
    return (dispatch)=>{
        Axios({
            method: 'POST',
            url:'http://localhost:5000/api/filecv/createCV',
            data: user,
            headers: {
              token: token
            }
        })
        .then((rs) => {
            Swal.fire({
                icon: 'success',
                title: 'Tạo CV thành công!',
                text: 'Đăng nhập ngay',
                width: '400px',
                padding: '0 0 20px 0'
            }).then(() => {
                console.log(rs.data);   
            });
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Có thể bạn chưa nhập đầy đủ hoặc sai thông tin thông tin!',
                text: 'Hãy thử lại ngay',
                width: '400px',
                padding: '0 0 20px 0'
            });
            console.log(err);
        });
    }
};
export const actGetCvAccountAPI = () => {
  const token = localStorage.getItem('token');
    return (dispatch) => {
      Axios({
        method: "GET",
        url: "http://localhost:5000/api/users/get-information-user",
        headers: {
          token: token
        }
      })
        .then((rs) => {
          console.log('phat rs', rs)
          dispatch(actGetCvAccount(rs.data));
          console.log(rs.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
};
export const actDtailFileCVAPI = (id) => {
  const token = localStorage.getItem('token');
    return (dispatch) => {
      Axios({
        method: "GET",
        url: `http://localhost:5000/api/filecv/update-FileCV/${id}`,
        headers: {
          token: token
        }
      })
        .then((rs) => {
          dispatch(actDtailFileCV(rs.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
};
export const actDtailFileCV = (detailCV) => {
  return {
    type: actType.GET_DETAIL_FILVE_CV,
    data: detailCV,
  };
};
export const actGetCvAccount = (getInfoCvUser) => {
    return {
      type: actType.GET_FILE_CV_ACCOUNT_WORK,
      data: getInfoCvUser,
    };
};