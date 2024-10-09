function requireLogin(req,res,next){
    if(req.session && req.session.user){
        console.log('ok')
        return next()
    }else{
        console.log('not ok')
        return res.redirect('/login')
    }
}

module.exports = requireLogin