(()=>{"use strict";const e="less is css done";"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./dist/service-worker.js").then((()=>{console.log("serviceworker 注册成功")})).catch((e=>{console.log("--- e is ---",e),console.error("serviceworker 注册失败")}))})),console.log("----- test1 fn ------"),console.log(e)})();