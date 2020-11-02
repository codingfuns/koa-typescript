import * as Koa from 'koa';
import * as koaBodyparser from 'koa-bodyparser'
import config from '../config';
import responseMiddware from '../middlewares/response'
import router from '../routes'
const app = new Koa();

app.use(router.routes());
app.use(responseMiddware)
app.use(koaBodyparser())

// 连接数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local',{ config: { autoIndex: false }, useNewUrlParser: true });
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open',()=>{
    console.log('数据库连接成功！');
})


app.listen(config.port);

console.log(`Server running on port ${config.port}`);
