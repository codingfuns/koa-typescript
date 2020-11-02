import * as T from '../interface/Author'
import * as Koa from 'koa'

class Author implements T.Authorize<Koa.Context>{
  public async register(ctx:Koa.Context){
    ctx.body = 'Hello W22orld!';
  }
  public async getUserInfo(ctx:Koa.Context){
    ctx.body = 'login'
  }
}
export default Author 