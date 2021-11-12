import Axios from "axios";
import * as actType from "../Constans/actType";
import Swal from 'sweetalert2';

Axios.defaults.headers.common['token'] = localStorage.getItem("token");
export const actCreateCompanyAdminAPI = createCopany =>{
    const token = localStorage.getItem('token');
    const formData = new FormData();
    Object.keys(createCopany).forEach(key => {
        formData.append(key, createCopany[key]);
    });
    return  (dispatch) =>{
        Axios({
            method: 'POST',
            url:'http://localhost:5000/api/company/createCompany',
            data: formData,
            headers: {
              token: token,
              'Content-Type': 'multipart/form-data'
            },
        })
        .then((rs) => {
            Swal.fire({
                icon: 'success',
                title: 'Tạo công ty thành công!',
                text: 'Đăng nhập ngay',
                width: '400px',
                padding: '0 0 20px 0'
            }).then(() => {
              dispatch(actGetListCompanyAPI());
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
            console.log(err.response.data);
        });
    }
};
export const handleDeleteCompany = id => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    Axios({
      method: "DELETE",
      url: `http://localhost:5000/api/company/deleCompany/${id}`,
      headers: {
        token: token
      }
    })
      .then((rs) => {
        Swal.fire("Xoá thành công!", "Nhấn OK để thoát!", "success");
        dispatch(actGetListCompanyAPI());
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
export const handleUpdateCompany = (id,newCom) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    Axios({
      method: "PUT",
      url: `http://localhost:5000/api/company/updateCompany/${id}`,
      headers: {
        token: token
      },
      data:newCom
    })
      .then((rs) => {
        Swal.fire("Thành công!", "Nhấn OK để thoát!", "success");
        dispatch(actGetListCompanyAPI());
      })
      .catch((error) => {
        Swal.fire(
          "Không thành công !",
          error.response.data,
          "error"
        );
      });
    }
};
export const actGetListCompanyAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/company/getAllCompany",
    })
      .then((rs) => {
        dispatch(actGetListCompany(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actRegisterEmployer = (user, cb)=>{
  const formData = new FormData();
  Object.keys(user).forEach(key => {
      formData.append(key, user[key]);
  });
  return (dispatch)=>{
      Axios({
          method: 'POST',
          url:'http://localhost:5000/api/company/createCompany',
          data: formData,
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
      .then((rs) => {
          Swal.fire({
              icon: 'success',
              title: 'Đăng ký thành công!',
              text: 'Đăng nhập ngay',
              width: '400px',
              padding: '0 0 20px 0'
          }).then(() => {
              console.log(rs.data);  
              if (cb) cb(null, rs.data); 
          });
      })
      .catch((err) => {
          Swal.fire({
              icon: 'error',
              title: 'Có thể bạn chưa nhập thông tin!',
              text: 'Hãy thử lại ngay',
              width: '400px',
              padding: '0 0 20px 0'
          });
          console.log(err);
          if (cb) cb(err, null); 
      });
  }
};
export const actGetInfoCompanyAPI = () => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/company/getCompanyUserApply",
      headers: {
        token: token,
      }
    })
      .then((rs) => {
        dispatch(actGetInfoCompany(rs.data));
        console.log(rs.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetDetailCompanyAPI = id => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        `http://localhost:5000/api/company/get-detail-company/${id}`,
    })
      .then((rs) => {
        dispatch(actGetDetailCompany(rs.data));
      })
      .catch((err)=>{
        console.log(err);
      });
  };
};
export const actGetDetailCompanyAccountAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        `http://localhost:5000/api/company/get-detail-account-company`,
    })
      .then((rs) => {
        dispatch(actGetDetailCompanyAccount(rs.data));
        console.log("test",rs.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  };
};
export const actGetDetailCompanyAccount = (detailAccountCompany) => {
  return {
    type: actType.DETAIL_ACCOUNT_COMPANY,
    data: detailAccountCompany,
  };
};
export const actGetListCompany = (getListCompany) => {
  return {
    type: actType.GET_LIST_COMPANY,
    data: getListCompany,
  };
};
export const actGetDetailCompany = (getdetailCompany) => {
  return {
    type: actType.DETAIL_COMAPANY,
    data: getdetailCompany,
  };
};
export const actGetInfoCompany = (getInfoEmloyer) => {
  return {
    type: actType.INFORMATION_EMLOYER,
    data: getInfoEmloyer,
  };
};