import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const y=document.querySelector('input[type="text"]'),e=document.querySelector("[data-start]"),F=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");let a;e.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t[0]<new Date?(h.error({title:"Error",message:"Please choose a date in the future",position:"topRight",titleColor:"#FFFFFF",messageColor:"#FFFFFF",backgroundColor:"#EA6150"}),e.disabled=!0):e.disabled=!1,a=t[0]}};e.addEventListener("click",b);function b(){e.disabled=!0;const t=setInterval(()=>{let o=null;a&&(o=a-Date.now());const{days:c,hours:u,minutes:l,seconds:s}=r(o);o>0?(F.textContent=n(c),p.textContent=n(u),g.textContent=n(l),C.textContent=n(s)):(clearInterval(t),e.disabled=!1)},1e3)}f(y,S);function n(t){return String(t).padStart(2,"0")}function r(t){const s=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:d,minutes:i,seconds:m}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=commonHelpers.js.map
