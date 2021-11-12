import Axios from "axios";
import Swal from 'sweetalert2';
import * as actType from "../Constans/actType";

export const actGetListUserAPI = () => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url:
          "http://localhost:5000/api/users/getAllUsers",
      })
        .then((rs) => {
          dispatch(actGetListUser(rs.data));
        })
        .catch();
    };
};
export const handleDeleteUser = (id,cb) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    Axios({
      method: "DELETE",
      url: `http://localhost:5000/api/users/deleUsers/${id}`,
      headers: {
        token: token
      }
    }).then((rs) => {
        Swal.fire("Xoá tài khoản thành công!", "Nhấn OK để thoát!", "success");
        dispatch(actGetListUserAPI());
        if (cb) cb(null, rs.data);
      })
      .catch((error) => {
        Swal.fire(
          "Xoá tài khoản không thành công !",
          error.response.data,
          "error"
        );
      });
    }
};
export const actGetDetailUserAPI = id => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        `http://localhost:5000/api/users/user-detail/${id}`,
    })
      .then((rs) => {
        dispatch(actGetDetailUser(rs.data));
      })
      .catch((err)=>{
        console.log(err);
      });
  };
};
export const actUpdateUserAPI = (id,newUser,cb) => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    Axios({
      method: "PUT",
      url:
        `http://localhost:5000/api/users/updateUsers/${id}`,
      headers: {
        token: token
      },
      data: newUser
    })
      .then((rs) => {
        Swal.fire({
          icon: 'success',
          title: 'Chỉnh sửa thành công!',
          width: '400px',
          padding: '0 0 20px 0'
          });
          if (cb) cb(null, rs.data);
          dispatch(actGetListUserAPI());
      })
      .catch((err)=>{
        console.log(err);
      });
  };
};
export const actCreateWorkUserAPI = (createTypeWork,cb) =>{
  const token = localStorage.getItem('token');
  return  dispatch =>{
      Axios({
          method: 'POST',
          url:'http://localhost:5000/api/work-user/createWork-user',
          data: createTypeWork,
          headers: {
            token: token
          }
      })
      .then((rs) => {
          Swal.fire({
              icon: 'success',
              title: 'Tạo thành công!',
              text: 'Đăng nhập ngay',
              width: '400px',
              padding: '0 0 20px 0'
          }).then(() => {
            dispatch(actGetListWorkUserAPI(rs.data));
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
};
export const actGetListWorkUserAPI = () => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://localhost:5000/api/work-user/get-Work-user",
      data:token
    })
      .then((rs) => {
        dispatch(actGetListWorkUser(rs.data));
      })
      .catch((err)=>{
        console.log(err,"err");
      });
  };
};
export const actGetListAppliedUserAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://localhost:5000/api/users/user-applied",
    })
      .then((rs) => {
        dispatch(actGetListAppliedUser(rs.data));
        console.log(rs.data);
      })
      .catch((err)=>{
        console.log(err,"err");
      });
  };
};
const actGetListAppliedUser = (listAplliedUser) => {
  return {
      type: actType.LIST_APPLIED_USER,
      data: listAplliedUser,
  };
};
const actGetListWorkUser = (listWorkUserPost) => {
  return {
      type: actType.CREATE_WORK_USER,
      data: listWorkUserPost,
  };
};
const actUpdateUser = (user) => {
  return {
      type: actType.UPDATE_USER,
      data: user,
      };
};
const actGetDetailUser = (getdetailuser) => {
  return {
      type: actType.GET_LIST_DETAIL_USER,
      data: getdetailuser,
      };
};
const actGetListUser = (listUser) => {
return {
    type: actType.GET_LIST_USER,
    data: listUser,
    };
};
