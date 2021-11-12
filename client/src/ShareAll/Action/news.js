import Axios from "axios";
import * as actType from "../Constans/actType";
import Swal from 'sweetalert2';

Axios.defaults.headers.common['token'] = localStorage.getItem("token");
export const actCreateNewsAPI = (news, cb)=>{
  const token = localStorage.getItem('token');
  const formData = new FormData();
  Object.keys(news).forEach(key => {
      formData.append(key, news[key]);
  });
  return (dispatch)=>{
      Axios({
          method: 'POST',
          url:'http://localhost:5000/api/news/createNews',
          data: formData,
          headers: {
              'Content-Type': 'multipart/form-data',
              token: token
          }
      })
      .then((rs) => {
          Swal.fire({
              icon: 'success',
              title: 'Thêm thành công!',
              text: 'Đăng nhập ngay',
              width: '400px',
              padding: '0 0 20px 0'
          }).then(() => {
              console.log(rs.data);  
              dispatch(actGetListWorkAPI());
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
         console.log(err.response.data);
      });
  }
};
export const actGetListWorkAPI = () => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url: "http://localhost:5000/api/news/load-list",
      })
        .then((rs) => {
          dispatch(actGetListNews(rs.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
};
export const actGetDetailNewsAPI = (id) => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url: `http://localhost:5000/api/news/load-list/${id}`,
      })
        .then((rs) => {
          dispatch(actGetDetailNews(rs.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
};
export const handleDeleteNewsAPI = id => {
    return (dispatch) => {
      const token = localStorage.getItem('token');
      Axios({
        method: "DELETE",
        url: `http://localhost:5000/api/news/delete/${id}`,
        headers: {
          token: token
        }
      })
        .then((rs) => {
          Swal.fire("Xoá thành công!", "Nhấn OK để thoát!", "success");
          dispatch(actGetListWorkAPI());
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
export const handleUpdateNewsAPI = (id,updateNews) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    Axios({
      method: "PUT",
      url: `http://localhost:5000/api/news/update/${id}`,
      headers: {
        token: token
      },
      data:updateNews
    })
      .then((rs) => {
        Swal.fire("Thành công!", "Nhấn OK để thoát!", "success");
        dispatch(actGetListWorkAPI());
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
export const actGetDetailNews = (detailNews) => {
    return {
        type: actType.GET_DETAIL_NEWS,
        data: detailNews,
    };
};
export const actGetListNews = (listNews) => {
    return {
        type: actType.GET_LIST_NEWS,
        data: listNews,
    };
};