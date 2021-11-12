let chai = require('chai');
let expect = chai.expect;
const WA3F2110Controller = require('../../../api/controllers/WA3/WA3F2110Controller')

describe("category model", function () {
    it("load Status",function(done){
        WA3F2110Controller.loadStatus('FormID',"ObjectTypeID","ObjectID","BookingID","skip","limit")
        .then(function (result){
            expect(result);
            done()
        })
    })
    
   
})



// it("load Status",function(done){
//     var req = request.put("load/loadStatus/category");
//     req.send({
//         data:{
//             FormID: "",
//             ObjectTypeID: "",
//             ObjectID: "",
//             BookingID: "",
//             skip: "0",
//             limit: "20",
//         }
//     })
//     req.end(function(err,res){
//         if(err)
//         {
//             throw err;
//         }
//         console.log(res.text);
//         done();
//     })
// }),