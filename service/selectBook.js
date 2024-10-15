
const bookRepository = require('../repository/bookRepository');

const fetchBooksForMember = async (memberId) => {
    try {
        // 业务逻辑可以在这里进行扩展，如对数据的处理、验证等
        const books = await bookRepository.getBooksByMemberId(memberId);
        return books;
    } catch (error) {
        throw new Error('Error in book service');
    }
};

module.exports = {
    fetchBooksForMember
};
