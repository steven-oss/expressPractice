const express = require('express');
const router = express.Router();
const { user } = require('../../models/user'); // 确保正确导入用户模型
const passwordUtils = require('../../utils/passwordUtils')

router.get('/', (req, res) => {
    res.render('signIn');
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    let userData;
    
    try {
        // 查找是否已存在用户
        userData = await user.findOne({
            where: {
                username: username,
            },
            raw: true
        });

    } catch (error) {
        console.error("An error occurred:", error);
        return res.render('signIn', { error: 'An error occurred during registration.' });
    }

    // 如果用户已存在，返回错误信息
    if (userData) {
        return res.render('signIn', {
            error: 'This account is already registered'
        });
    }

    // 用户不存在，创建新用户
    try {
        const hashedPassword = await passwordUtils.hash(password)

        await user.create({
            username: username,
            password: hashedPassword
        });
        return res.render('signIn', {
            error: 'Registration successful. Please go to the login page to log in again.'
        });
    } catch (error) {
        console.error("An error occurred while creating the user:", error);
        return res.render('signIn', { error: 'An error occurred during registration.' });
    }
});

module.exports = router;
