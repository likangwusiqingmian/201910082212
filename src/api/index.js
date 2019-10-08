import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/https://www.apiopen.top/'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/${geohash}`)