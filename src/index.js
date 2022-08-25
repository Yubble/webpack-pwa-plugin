import m1 from './module1'

if ('serviceWorker' in navigator) { // 兼容性判断
  window.addEventListener('load', () => {// 等所有资源加载完，再注册serviceWorker
    navigator.serviceWorker.register('../dist/service-worker.js')// service-worker.js 这个文件由 workbox-webpack-plugin 插件生成
    .then(() => {
      console.log("serviceworker 注册成功");
    })
    .catch((e) => {
      console.log('--- e is ---', e)
      console.error("serviceworker 注册失败");
    });
  });
}

const test2 = () => {
  console.log('----- test222 fn ------')
  
  if (m1.css) {
    console.log(m1.css)
  }
}

test2()

