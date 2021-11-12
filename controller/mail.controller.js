var nodemailer =  require('nodemailer'); 
const bcrypt = require("bcryptjs");// khai báo sử dụng module nodemailer
const email =  (req, res, next) => {
    const {user} = req;
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: `${user.email}`,
            pass: `${user.password}`
        }
    });
    console.log(transporter,"transporter")
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: `${user.email}`,
        to: 'hotanphat.htp99@gmail.com',
        subject: `${user.name}`,
        text: 'Chúc mừng bạn đã trúng tuyển công ty chúng tôi',  
    }
    console.log(mainOptions,"mainOptions");
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/');
        }
    });
};

const SendEmail = (req,res,next)=>{
    const {user} = req;
    var sendemail = {
        from: `${user.email}`,
        to: 'hotanphat.htp99@gmail.com',
        subject: 'Test Nodemailer',
        text: 'hello ' + req.body.email,
    }
    sendemail.sendMail(sendemail,function(err,info){
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/');
        }
    })
}
 
module.exports = {email,SendEmail}
// html: '<p>You have got a new message</b><ul><li>Username:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Username:' + req.body.message + '</li></ul>'