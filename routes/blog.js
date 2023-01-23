const router = require('express').Router();
const BlogController = require('../app/controllers/BlogController');

//routes
router.get('/', BlogController.index);
router.get('/create', BlogController.create);
router.post('/store', BlogController.store);
router.get('/show/:blogId', BlogController.show);
router.get('/edit/:blogId', BlogController.edit);
router.post('/update/:blogId', BlogController.update);
router.post('/delete/:blogId', BlogController.delete);

//export
module.exports = router;
