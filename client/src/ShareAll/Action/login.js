import Axios from "axios";
import * as actType from "../Constans/actType";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

export const actLoginuser = (datasigin,history) =>{
    return dispatch =>{
        Axios({
            method:"POST",
            url:"http://localhost:5000/api/users/login",
            data:datasigin
        })
        .then((rs) => {
            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công!',
                width: '400px',
                padding: '0 0 20px 0'
            }).then(() => {
                const data = rs.data || null;
                if (data && data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('token', data.token);
                    const path = localStorage.getItem("prevLocation");
                    // const history = useHistory();

                    // history.push(path || '/');
                    window.location.href = path || "/";
                } else {
                    console.log('Xin đăng nhập lại');
                }
            });
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Sai tài khoản hoặc mật khẩu!',
                text: 'Hãy thử lại ngay',
                width: '400px',
                padding: '0 0 20px 0'
            });
            console.log(err);
        });
    }
};
export const actLoginEmployer = (datasigin,history) =>{
    return dispatch =>{
        Axios({
            method:"POST",
            url:"http://localhost:5000/api/company/login-company",
            data:datasigin
        })
        .then((rs) => {
            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công!',
                width: '400px',
                padding: '0 0 20px 0'
            }).then(() => {
                const data = rs.data || null;
                if (data && data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('token', data.token);
                    const path = localStorage.getItem("prevLocation");
                    // const history = useHistory();

                    // history.push(path || '/');
                    window.location.href = path || "/";
                } else {
                    console.log('Xin đăng nhập lại');
                }
            });
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Sai tài khoản hoặc mật khẩu!',
                text: 'Hãy thử lại ngay',
                width: '400px',
                padding: '0 0 20px 0'
            });
            console.log(err);
        });
    }
};
export const actLoginAdmin = (user,history) =>{
    return (dispatch) =>{
        Axios({
            method:"POST",
            url:"http://localhost:5000/api/users/login",
            data:user
        })
        .then((rs) => {
            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công!',
                width: '400px',
                padding: '0 0 20px 0'
            }).then(() => {
                const data = rs.data || null;
                if (rs.data.user.type === 'ADMIN') {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userAdmin', JSON.stringify(rs.data));
                    history.push('/pageadmin');
                } 
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Không có quyền truy cập',
                        text: 'Hãy thử lại ngay',
                        width: '400px',
                        padding: '0 0 20px 0'
                    });
                }
            });
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Sai tài khoản hoặc mật khẩu!',
                text: 'Hãy thử lại ngay',
                width: '400px',
                padding: '0 0 20px 0'
            });
        });
    }
};
export const actRegisterUser = (user, cb,history)=>{
    const formData = new FormData();
    Object.keys(user).forEach(key => {
        formData.append(key, user[key]);
    });
    return (dispatch)=>{
        Axios({
            method: 'POST',
            url:'http://localhost:5000/api/users/register',
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



