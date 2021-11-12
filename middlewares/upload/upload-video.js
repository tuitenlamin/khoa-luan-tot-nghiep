const multer = require("multer");
const mkdirp = require("mkdirp");

// const uploadVideo = (type) =>{
//     const made = mkdirp.sync(`./public/videos/${type}`);
//     const videoStorage = multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, `./public/videos/${type}`); // setup chổ cần lưu file
//           }, // Destination to store video 
//         filename: (req, file, cb) => {
//             cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
//         }
//     });
//     const videoUpload = multer({
//         storage: videoStorage,
//         limits: {
//         fileSize: 100000000000 // 10000000 Bytes = 10 MB
//         },
//         fileFilter: function(req, file, cb) {
//           // upload only mp4 and mkv format
//         //   if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
//         //      return cb(new Error('Please upload a video'))
//         //   }
//         //   cb(undefined, true)
//         const extensionVideosList = [".mp4", ".MPEG-4",".mkv"];
//         const extension = file.originalname.slice(-6);
//         const check = extensionVideosList.includes(extension);
//         if (check) {
//             cb(null, true);
//           } else {
//             cb(new Error("extension không hợp lệ"));
//           }
//        }
//     });
//     return videoUpload.single(type);
// }


// module.exports = {uploadVideo}
const videoStorage = multer.diskStorage({
  destination: 'videos', // Destination to store video 
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname)
  }
});
const videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 100000000 // 10000000 Bytes = 10 MB
  },
  fileFilter(req, file, cb) {
    // upload only mp4 and mkv format
    if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
       return cb(new Error('Please upload a video'))
    }
    cb(undefined, true)
 }
})
module.exports ={videoUpload}