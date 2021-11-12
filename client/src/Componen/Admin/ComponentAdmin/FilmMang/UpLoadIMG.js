// import React, { Component } from 'react'
// import Axios from 'axios';


// export default  class UpLoadIMG extends Component {
 
//     state ={
//         selectedfile: null
//     }

//     handleFile(e){
//         // let file = e.target.files[0]
//         // this.setState({file:file})
//         // console.log(e.target.files,"$$$$");
//         // console.log(e.target.files[0],"$$$$");
//         //  console.log(e.target.files[0]);
//         this.setState({
//             selectedfile: e.target.files[0]
//         })
//     }
//     handleUpLoad(e){
//         // let file = this.state.file
//         // $: formdata = new formdata()
//         // formdata.append('image',file)
//         // formdata.append('name','phat')
//         const fd = new FormData();
//         fd.append('image',this.setState.selectedfile,this.state.selectedfile.name);
//         let userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
//         Axios({
//             url:('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim',fd),
//             method: 'POST',
//             headers: {
// 				Authorization: `Bearer ${userAdmin.accessToken}`
//             },

//         })
//         .then((rs) => {
//             // Swal.fire({
//             //     icon: 'success',
//             //     title: 'Sửa thành công!',
//             //     width: '400px',
//             //     padding: '0 0 20px 0'
//             // }).then(() => {
//                 console.log(rs.data);
//                 alert('sucssec');
//             // });
//         })
//         .catch((err) => {
//             console.log(err.data);
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <label>file</label>
//                 <input type='file' multiple name='file'onChange={(e)=>this.handleFile(e)}/>

//                 <button type='button' onClick={(e)=>this.handleUpLoad(e)}>up</button>
//             </div>
//         )
//     }
// }

import React, { Component } from "react";
import {ProgressBar} from 'react-bootstrap';
import axios from 'axios';

export class UpLoadIMG extends Component {

  state = {
    uploadPercentage: 0,
    avatar: ''
  }

  componentDidMount = () =>{
    const {avatar} = this.props;
    this.setState({ avatar })
  }

  uploadFile = ({ target: { files } }) =>{
    console.log( files[0] )
    let data = new FormData();
    data.append( 'file', files[0] )

    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor( (loaded * 100) / total )
        console.log( `${loaded}kb of ${total}kb | ${percent}%` );

        if( percent < 100 ){
          this.setState({ uploadPercentage: percent })
        }
      }
    }

    axios.post("https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim", data, options)
    .then(res => { 
        alert('thanh cong')
        console.log(res)
        this.setState({ avatar: res.data.url, uploadPercentage: 100 }, ()=>{
          setTimeout(() => {
            this.setState({ uploadPercentage: 0 })
          }, 1000);
        })
    })
    .catch((err)=>{
        console.log(err.data);
        alert('fail')
    })
  }

  render() {
    const {uploadPercentage} = this.state;
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <a href="#pablo">
              <img
                className="avatar border-gray"
                src={this.state.avatar}
                alt="..."
              />
              <input type="file" className="form-control profile-pic-uploader" onChange={this.uploadFile} />
              { uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} /> }

              <h4 className="title">
                {this.props.name}
                <br />
                <small>{this.props.userName}</small>
              </h4>
            </a>
          </div>
          <p className="description text-center">{this.props.description}</p>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}
export default UpLoadIMG;