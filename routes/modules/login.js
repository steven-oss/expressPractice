const express = require('express')
const router = express.Router()
const {user} = require('../../models/user')
const passwordUtils = require('../../utils/passwordUtils')

router.get('/',(req,res)=>{
    res.render('login')
})
router.post('/',async (req,res)=>{
    const { username, password } = req.body
    let userData

    try{
        userData = await user.findOne({
            where:{
                username:username,
            }
            ,raw:true})
    }catch(error){
        console.error("An error occurred:",error)
        return res.render('login', { error: 'An error occurred during login. Please try again.' });
    }

    if(!userData){
        return res.render('login',{'error':'Account not found'})
    }

    if(username !== userData.username || !await passwordUtils.compare(password,userData.password)){
        return res.render('login',{'error':'Account not found'})
    }

    if(username === userData.username && await passwordUtils.compare(password,userData.password)){
        req.session.userId = userData.id
        req.session.user = userData.username
        res.redirect('/')
    }else{
        return res.render('login',{error:'Invalid username or password'})
    }
})

module.exports = router