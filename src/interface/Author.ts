export interface Authorize<T> {
  register(ctx:T):Promise<void>
  getUserInfo(cxt:T):Promise<void>
}