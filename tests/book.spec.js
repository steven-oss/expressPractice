const { expect } = require('chai'); // 使用 require
const bookController = require('../controllers/bookController');

describe('Book Controller', () => {
    it('should redirect to "/" after creating a book', async () => {
        const req = {
            body: {
                bookName: 'Test Book',
            },
            session: {
                userId: 1,
            },
        };

        const res = {
            status: function (statusCode) {
                this.statusCode = statusCode;
                return this;
            },
            json: function (data) {
                this.responseData = data;
            },
            redirect: function (path) {
                this.redirectPath = path;
            },
        };

        await bookController.createBook(req, res);
        expect(res.redirectPath).to.equal('/');
    });
});
