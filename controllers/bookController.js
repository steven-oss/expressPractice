// controller/bookController.js
const bookService = require('../service/selectBook');

const getBooks = async (req, res) => {
    try {
        const books = await bookService.fetchBooksForMember(req.session.userId);
        // 渲染模板或返回 JSON
        res.render('page', { username: req.session.user, books });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching books');
    }
};

module.exports = {
    getBooks
};
