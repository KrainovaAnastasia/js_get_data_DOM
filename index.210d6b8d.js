var t=Array.from(document.getElementsByClassName("population")).map(function(t){return parseFloat(t.textContent.replace(",",""))}),e=function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e.toLocaleString("en-US")}(t),n=function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return(e/t.length).toLocaleString("en-US").replace(/\./g,",")}(t),o=document.querySelector(".total-population"),r=document.querySelector(".average-population");o.textContent=e,r.textContent=n;
//# sourceMappingURL=index.210d6b8d.js.map
