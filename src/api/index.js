/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = 'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT'

// 1、用户名密码登陆
export const reqPwdLogin = ({account, password}) => ajax(BASE_URL+'/user/login', {account, password}, 'POST')




