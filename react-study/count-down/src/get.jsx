import axios from "axios";

//定义一个超时函数
const timeoutPromise = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout)
  }).then(() => '超时')
}

const fetchGet = (url) => {
  return axios(url)
    .then(() => '成功')
    .catch(() => '失败')
}

const get = (url) => {
  // console.log('in')
  return Promise.race([timeoutPromise(3000), fetchGet(url)])
    .then((data) => console.log(data))
    // .catch((err) => console.log(err));
}

export default get;