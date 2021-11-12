import Axios from "axios";
import * as actType from "../Constans/actType";
import Swal from 'sweetalert2';

export const actGetListWorkAPI = (search) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/work/list-work${search ? "?search=" + search : ""}`,
    })
      .then((rs) => {
        dispatch(actGetListWork(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actCreateCompanyAdminAPI = (useradmin)=>{
  return (dispatch)=>{
      Axios({
          method: 'POST',
          url:'http://localhost:5000/api/company/createCompany',
          data: useradmin
      })
      .then((rs) => {
          Swal.fire({
              icon: 'success',
              title: 'Tạo công ty thành công!',
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
}
export const actGetDetailListWorkAPI = id => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/work/get-information-work/${id}`,
    })
      .then((rs) => {
        console.log('test', rs);
        dispatch(actGetDetailListWork(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actDetailInfoUserWorkAPI = () => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/work/get-detail-infor-user`,
      headers: {
        token: token
      }
    })
      .then((rs) => {
        dispatch(DetailInfoUserWork(rs.data));
        console.log(rs.data,"log")
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actCreateWorkEmployer = (typeWork)=>{
  const token = localStorage.getItem('token');
  return (dispatch)=>{
      Axios({
          method: 'POST',
          url:'http://localhost:5000/api/work/createWork',
          data: typeWork,
          headers: {
            token: token
          }
      })
      .then((rs) => {
          Swal.fire({
              icon: 'success',
              title: 'Tạo công việc thành công!',
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
          console.log(err.response.data);
      });
  }
}
export const actGetListWorkCompanyAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/work/list-work",
    })
      .then((rs) => {
        dispatch(actGetListWorkCompany(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetListWorkContentAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/work/list-work",
    })
      .then((rs) => {
        dispatch(actGetListWorkContent(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const handleUpdateWork = (id,updateWork) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    Axios({
      method: "PUT",
      url: `http://localhost:5000/api/work/update-work/${id}`,
      headers: {
        token: token
      },
      data: updateWork
    })
      .then((rs) => {
        Swal.fire("Thành công!", "Nhấn OK để thoát!", "success");
        dispatch(actGetListWorkCompanyAPI(rs.data));
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
export const handleDeleteWork = id => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    Axios({
      method: "DELETE",
      url: `http://localhost:5000/api/work/delete-work/${id}`,
      headers: {
        token: token
      }
    })
      .then((rs) => {
        Swal.fire("Xoá thành công!", "Nhấn OK để thoát!", "success");
        dispatch(actGetListWorkCompanyAPI(rs.data));
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
export const actGetListUserPostWorkAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/work-user/get-all-Work-user",
    })
      .then((rs) => {
        dispatch(actGetListUserPostWork(rs.data));
        console.log(rs.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actDetailUpdateWorkAPI = id => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/work/get-detail-infor-user/${id}`,
    })
      .then((rs) => {
        dispatch(actDetailUpdateWork(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actDetailInfoUserWorkFromCompanyAPI = () => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/work/get-detail-work-account`,
      headers: {
        token: token
      }
    })
      .then((rs) => {
        dispatch(actDetailInfoUserWorkFromCompany(rs.data));
        console.log(rs.data,"log")
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actDetailInfoUserWorkFromCompany = (detailWorkFromCompany) => {
  return {
    type: actType.DETAIL_FROM_COMPANY,
    data: detailWorkFromCompany,
  };
};
export const actDetailUpdateWork = (detailUpdateWork) => {
  return {
    type: actType.DETAIL_UPDATE_WORK,
    data: detailUpdateWork,
  };
};
export const actGetListWorkContent = (getWorkContent) => {
  return {
    type: actType.GET_LIST_WORK_CONTENT,
    data: getWorkContent,
  };
};
export const actGetListUserPostWork = (getListUserPostWork) => {
  return {
    type: actType.GET_LIST_USER_POST_WORK,
    data: getListUserPostWork,
  };
};
export const actGetListWorkCompany = (getlistworkcompany) => {
  return {
    type: actType.GET_LIST_WORK_COMPANY,
    data: getlistworkcompany,
  };
};
export const DetailInfoUserWork = (detailinfouserwork) => {
  return {
    type: actType.GET_DETAIL_INFO_USER_WORK,
    data: detailinfouserwork,
  };
};
export const actGetListWork = (listWork) => {
  return {
    type: actType.GET_LIST_WORK,
    data: listWork,
  };
};
export const actGetDetailListWork = (detailListWork) => {
    return {
      type: actType.GET_DETAIL_LIST_WORK,
      data: detailListWork
    };
};
