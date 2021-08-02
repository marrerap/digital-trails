function checkAuth(req, res, next) {
    if(req.session.hiker) {
        next();
    }else if (req.path === '/login') {
        next();
    }else {
        res.redirect('/')    
            
       
    }

}

module.exports = checkAuth