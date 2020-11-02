import * as Router from 'koa-router';
import Login from '../controller/author'

const router = new Router();
const author = new Login();
router.post('/register',author.register)

// router.get('/getUserInfo',author.getUserInfo)

export default router;