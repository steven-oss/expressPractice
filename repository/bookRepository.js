// repository/bookRepository.js
const { book } = require('../models/book');

const getBooksByMemberId = async (memberId) => {
    try {
        return await book.findAll({
            where: { memberId },
            raw: true
        });
    } catch (error) {
        throw new Error('Error fetching books from the database');
    }
};

module.exports = {
    getBooksByMemberId
};
