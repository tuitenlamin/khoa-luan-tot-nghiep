var Sails = require('sails');


before(function (done) {
    Sails.lift({

    }),
    function (err,sever) {
        if(err) return done(err);
        done(err,sever)
    }
});

after(function(done){
    Sails.lower(done);
})