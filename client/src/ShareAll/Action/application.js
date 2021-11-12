import Axios from "axios";
import * as actType from "../Constans/actType";
import Swal from 'sweetalert2';

export const actGetListWorkAPI = () => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url: "http://localhost:5000/api/work/get-work-company",
      })
        .then((rs) => {
          dispatch(actGetListApllication(rs.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
};
export const actPostApplicationAPI = (idJob) => {
  return () => {
    const token = localStorage.getItem('token');
    Axios({
      method: "POST",
      url: `http://localhost:5000/api/application/create-application`,
      data:idJob,
      headers: {
        token: token
      }
    })
      .then((rs) => {
        Swal.fire("Ứng tuyển thành công!", "Nhấn OK để thoát!", "success");
      })
      .catch((error) => {
        Swal.fire(
          "Xoá không thành công !",
          error.response.data,
          "error"
        );
      });
  }
};
export const actGetListApllication = (getListApplication) => {
    return {
      type: actType.GET_LIST_APPLICATION,
      data: getListApplication,
    };
  };