import axios from 'axios';

const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 300000
})
// service.interceptors.response.use((config)=>{
//   console.log(config, "asasasa")
//     return config
// },()=>{

// })
export const fetchBaseComponents = () =>{
  return service.get("/api/widgets")
}

