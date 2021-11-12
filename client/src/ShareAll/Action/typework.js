import Axios from "axios";
import * as actType from "../Constans/actType";
import Swal from 'sweetalert2';

export const actGetTypeListWorkAPI = () => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url: "http://localhost:5000/api/type-work/get-all-type-work",
      })
        .then((rs) => {
          dispatch(actGetTypeListWork(rs.data));
          console.log(rs.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
};
export const actGetDetailTypeListWorkAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/type-work/get-all-type-work-company",
    })
      .then((rs) => {
        dispatch(actGetDetailTypeListWork(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actCreateTypeWowkAdminAPI = (createTypeWork,cb) =>{
  const token = localStorage.getItem('token');
  return  dispatch =>{
      Axios({
          method: 'POST',
          url:'http://localhost:5000/api/type-work/create-type-work',
          data: createTypeWork,
          headers: {
            token: token
          }
      })
      .then((rs) => {
          Swal.fire({
              icon: 'success',
              title: 'Tạo công ty thành công!',
              text: 'Đăng nhập ngay',
              width: '400px',
              padding: '0 0 20px 0'
          }).then(()=>{
            dispatch(actGetTypeListWorkAPI());
          })
          .then(() => {
           
              console.log(rs.data);   
              if (cb) cb(null, rs.data);
             
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
          console.log(err.response.data);
      });
  }
}
export const handleDeleteTypeWork = id => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    Axios({
      method: "DELETE",
      url: `http://localhost:5000/api/type-work/delete-type-work/${id}`,
      headers: {
        token: token
      }
    })
      .then((rs) => {
        Swal.fire("Xoá thành công!", "Nhấn OK để thoát!", "success");
        dispatch(actGetTypeListWorkAPI());
      })
      .catch((error) => {
        Swal.fire(
          "Xoá không thành công !",
          error.response.data,
          "error"
        );
        console.log(error)
      });

    }
};
export const handleUpdateTypeWork = (id,newType) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    Axios({
      method: "PUT",
      url: `http://localhost:5000/api/type-work/update-type-work/${id}`,
      headers: {
        token: token
      },
      data:newType
    })
      .then((rs) => {
        Swal.fire("thành công!", "Nhấn OK để thoát!", "success");
        dispatch(actGetTypeListWorkAPI());
      })
      .catch((error) => {
        Swal.fire(
          "không thành công !",
          error.response.data,
          "error"
        );
        console.log(error)
      });

    }
};
export const actGetDetailTypeWorkAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/type-work/get-detail-type-work/${id}`,
    })
      .then((rs) => {
        dispatch(actGetDetail(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetDetailTypeListWork = (detailListTypeWork) => {
  return {
    type: actType.GET_DETAIL_TYPE_LIST_WORK,
    data: detailListTypeWork,
  };
};
export const actGetTypeListWork = (listTypeWork) => {
    return {
      type: actType.GET_TYPE_LIST_WORK,
      data: listTypeWork,
    };
};
export const actGetDetail = (detailType) => {
  return {
    type: actType.GET_DETAIL_TYPE,
    data: detailType,
  };
};