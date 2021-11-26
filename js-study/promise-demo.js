function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve(img); //resolved
    };
    img.onerror = () => {
      const err = new Error(`图片加载失败 ${src}`);
      reject(err); //rejected
    };
    img.src = src;
  });
}

const url1 = "https://img-blog.csdnimg.cn/20190506194053735.png";
const url2 = "https://img-blog.csdnimg.cn/20190506194313201.png";

loadImg(url1)
  .then((img1) => {
    console.log(img1.width);
    return img1; //普通对象
  })
  .then((img1) => {
    //接收到的是普通对象
    console.log(img1.height);
    return loadImg(url2); //promise实例,
  })
  .then((img2) => {
    //接收到的是resolve里的img
    console.log(img2.width);
    return img2;
  })
  .then((img2) => {
    console.log(img2.height);
  })
  .catch((ex) => console.error(ex));
