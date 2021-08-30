(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{43:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(14),l=c.n(i),n=c(4),r=(c(43),c(32)),d=c(3);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=c(19),j=c.n(o),x=c(30),h=c(31),m=c.n(h),b=function(e){return function(){var t=Object(x.a)(j.a.mark((function t(c){var s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:"GET_DATA_REQUEST"}),{headers:{"Content-Type":"application/json"}},t.next=5,m.a.get("https://api.weatherapi.com/v1/forecast.json?key=0d51b511bb5946d8852154552212908&q=".concat(e,"&days=5&aqi=yes"));case 5:s=t.sent,a=s.data,c({type:"GET_DATA_SUCCESS",payload:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c({type:"GET_DATA_ERROR",payload:t.t0.response.data.error.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},u=c(0),f=function(){var e=Object(n.c)((function(e){return e.weatherData})),t=e.location,c=e.current,a=e.forecastToday;return Object(s.useEffect)((function(){}),[t,c,a]),Object(u.jsx)(u.Fragment,{children:t&&c&&a&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"d-flex flex-row align-self-auto overview weather-box",children:Object(u.jsxs)("div",{className:"d-flex flex-column w-100",children:[Object(u.jsxs)("div",{className:"d-flex flex-row",children:[Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsxs)("h1",{style:{fontSize:"20px",fontWeight:"bold"},children:[t.name,", ",t.country," Weather"]}),Object(u.jsxs)("span",{children:["As of ",t.localtime.slice(10,16)]})]}),Object(u.jsx)("div",{className:"btn my-auto ml-auto btn-outline-light",role:"button","data-toggle":"modal","data-target":"#backdrop",onClick:function(){var e=document.getElementById("backdrop");e.style.display="block",document.body.classList.add("modal-open"),document.getElementById("main-container").classList.toggle("modal-backdrop"),setTimeout((function(){e.classList.toggle("show")}),161)},children:"Detail"})]}),Object(u.jsxs)("div",{className:"d-flex flex-row",children:[Object(u.jsxs)("h1",{style:{fontSize:"56px",fontWeight:"bold"},children:[c.temp_c,"\xb0"]}),Object(u.jsx)("div",{className:"d-flex ml-auto",children:Object(u.jsx)("img",{src:c.condition.icon})})]}),Object(u.jsx)("div",{style:{fontWeight:"bold"},children:c.condition.text})]})})})})},O=function(){var e=Object(n.c)((function(e){return e.weatherData})),t=e.loading,c=e.forecast;return Object(u.jsx)(u.Fragment,{children:!t&&c&&Object(u.jsxs)("div",{className:"d-flex flex-column weather-box overview",children:[Object(u.jsx)("div",{className:"d-flex flex-row",children:Object(u.jsx)("h1",{style:{fontSize:"20px",fontWeight:"bold"},children:"Daily Forecast"})}),Object(u.jsx)("div",{className:"d-flex flex-row justify-content-center",children:c.map((function(e){return Object(u.jsxs)("div",{className:"d-flex flex-column border-0 d-flex align-items-center forecast-items",style:{flexBasis:"33%"},children:[Object(u.jsx)("div",{className:"card-title",style:{fontSize:"24px"},children:e.date.slice(5,10)}),Object(u.jsxs)("span",{style:{fontSize:"30px"},children:[Math.round(e.day.maxtemp_c),"\xb0"]}),Object(u.jsxs)("span",{style:{fontSize:"24px"},children:[Math.round(e.day.mintemp_c),"\xb0"]}),Object(u.jsx)("img",{className:"flex-shrink-0",src:e.day.condition.icon}),Object(u.jsxs)("span",{children:[Object(u.jsxs)("svg",{style:{fill:"#00FFFF",width:"0.7vw"},set:"heads-up",name:"precip-rain-single",theme:"full","data-testid":"Icon","aria-hidden":"true",role:"img",className:"Icon--icon--3wCKh Icon--fullTheme--3ns8p",viewBox:"0 -2 5 10",children:[Object(u.jsx)("title",{children:"Rain"}),Object(u.jsx)("path",{d:"M4.7329.0217c-.1848-.059-.3855.0064-.4803.148L.2731 5.1191c-.0814.0922-.1501.1961-.196.3108-.2469.6009.1185 1.2697.8156 1.4943.6914.226 1.447-.0712 1.7-.6585L4.9662.4987l.0111-.0282c.073-.1807-.036-.379-.2444-.4488z"})]})," ",e.day.daily_chance_of_rain,"%"]})]},e.date)}))})]})})},v=function(){return Object(u.jsxs)("div",{className:"lds-default",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})},p=function(){var e=Object(n.c)((function(e){return e.weatherData})),t=e.loading,c=e.message;return Object(u.jsx)(u.Fragment,{children:!t&&c&&Object(u.jsx)("div",{className:"d-flex flex-row align-self-auto overview weather-box",children:Object(u.jsx)("div",{className:"d-flex flex-column w-100",children:Object(u.jsx)("div",{className:"d-flex flex-column justify-content-center",children:Object(u.jsx)("h1",{style:{fontSize:"20px",fontWeight:"bold"},children:c})})})})})},g=c(15),w=c(13),y=function(){var e,t=Object(n.c)((function(e){return e.weatherData})),c=t.current,a=t.forecastToday,i=t.location,l=t.forecast,r=Object(s.useState)((new Date).getHours()),d=Object(w.a)(r,2),o=d[0],j=(d[1],Object(s.useState)([])),x=Object(w.a)(j,2),h=x[0],m=x[1];return Object(s.useEffect)((function(){if(l&&l.length>0){var e=(new Date).getHours();m(l[0].hour.slice(e,24).concat(l[1].hour.slice(0,e))),console.log(h)}}),[l]),Object(u.jsx)(u.Fragment,{children:c&&a&&i&&Object(u.jsxs)("div",{className:"d-block weather-box overview modal-body",style:{marginBottom:"0px",overflowX:"hidden"},children:[Object(u.jsx)("div",{className:"d-flex ",children:Object(u.jsxs)("h1",{style:{fontSize:"20px",fontWeight:"bold"},children:["Weather Today in ",i.name,", ",i.country]})}),Object(u.jsx)("div",(e={type:"button",className:"close text-center","aria-label":"Close",onClick:function(){var e=document.getElementById("backdrop");e.classList.toggle("show"),setTimeout((function(){e.style.display="none",document.body.classList.remove("modal-open"),document.getElementById("main-container").classList.toggle("modal-backdrop")}),500)},"data-dismiss":"modal"},Object(g.a)(e,"aria-label","Close"),Object(g.a)(e,"style",{position:"absolute",top:"0px",right:"0px"}),Object(g.a)(e,"children",Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})),e)),Object(u.jsxs)("div",{className:"d-flex flex-row mx-4",children:[Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsxs)("h1",{style:{fontSize:"56px",fontWeight:"bold"},children:[Math.round(c.feelslike_c),"\xb0"]}),"Feels Like"]}),Object(u.jsxs)("div",{className:"d-flex flex-column ml-auto align-self-center",children:[Object(u.jsxs)("div",{children:["Sunrise ",a.astro.sunrise]}),Object(u.jsxs)("div",{children:["Sunset  ",a.astro.sunset]})]})]}),Object(u.jsxs)("div",{className:"d-flex flex-wrap  mt-2",children:[Object(u.jsx)("div",{className:" weather-items",children:Object(u.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(u.jsxs)("svg",{className:"weather-icons",set:"current-conditions",name:"temp",theme:"dark","data-testid":"Icon","aria-hidden":"true",role:"img",viewBox:"0 0 24 24",children:[Object(u.jsx)("title",{children:"Temperature"}),Object(u.jsx)("path",{d:"M10.333 15.48v.321c.971.357 1.667 1.322 1.667 2.456 0 1.438-1.12 2.604-2.5 2.604S7 19.695 7 18.257c0-1.134.696-2.099 1.667-2.456v-.322a2.084 2.084 0 0 1-1.25-1.91V5.583a2.083 2.083 0 1 1 4.166 0v7.986c0 .855-.514 1.589-1.25 1.91zM15.8 8.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})]}),Object(u.jsx)("div",{className:"d-block mx-2",children:"High / Low"}),Object(u.jsxs)("div",{className:"d-flex ml-auto",children:[a.day.maxtemp_c,"\xb0/",a.day.mintemp_c,"\xb0"]})]})}),Object(u.jsx)("div",{className:"weather-items",children:Object(u.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(u.jsxs)("svg",{className:"weather-icons",set:"current-conditions",name:"wind",theme:"dark","data-testid":"Icon","aria-hidden":"true",role:"img",viewBox:"0 0 24 24",children:[Object(u.jsx)("title",{children:"Wind"}),Object(u.jsx)("path",{d:"M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742",strokeWidth:"2",stroke:"currentColor",strokeLinecap:"round",fill:"none"})]}),Object(u.jsx)("div",{className:"d-block mx-2",children:"Wind"}),Object(u.jsxs)("div",{className:"d-flex ml-auto",children:[Object(u.jsxs)("svg",{"data-testid":"Icon",className:"weather-icons",style:{transform:"rotate(".concat(c.wind_degree,"deg)")},set:"current-conditions",name:"wind-direction",theme:"dark","aria-hidden":"true",role:"img",viewBox:"0 0 24 24",children:[Object(u.jsx)("title",{children:"Wind Direction"}),Object(u.jsx)("path",{stroke:"currentColor",fill:"none",d:"M18.467 4.482l-5.738 5.738a1.005 1.005 0 0 1-1.417 0L5.575 4.482l6.446 16.44 6.446-16.44z"})]}),Math.round(c.wind_kph)," km/h"]})]})}),Object(u.jsx)("div",{className:"weather-items",children:Object(u.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(u.jsxs)("svg",{className:"weather-icons",set:"current-conditions",name:"humidity",theme:"dark","data-testid":"Icon","aria-hidden":"true",role:"img",viewBox:"0 0 24 24",children:[Object(u.jsx)("title",{children:"Humidity"}),Object(u.jsx)("path",{fillRule:"evenodd",d:"M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"})]}),Object(u.jsx)("div",{className:"d-block mx-2",children:"Humidity"}),Object(u.jsxs)("div",{className:"d-flex ml-auto",children:[c.humidity,"%"]})]})}),Object(u.jsx)("div",{className:"weather-items",children:Object(u.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(u.jsxs)("svg",{className:"weather-icons",set:"current-conditions",name:"pressure",theme:"dark","data-testid":"Icon","aria-hidden":"true",role:"img",viewBox:"0 0 24 24",children:[Object(u.jsx)("title",{children:"Pressure"}),Object(u.jsx)("path",{d:"M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"})]}),Object(u.jsx)("div",{className:"d-block mx-2",children:"Pressure"}),Object(u.jsxs)("div",{className:"d-flex ml-auto",children:[c.pressure_mb," mb"]})]})}),Object(u.jsx)("div",{className:"weather-items",children:Object(u.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(u.jsxs)("svg",{className:"weather-icons",set:"current-conditions",name:"uv",theme:"dark","data-testid":"Icon","aria-hidden":"true",role:"img",viewBox:"0 0 24 24",children:[Object(u.jsx)("title",{children:"UV Level"}),Object(u.jsx)("path",{d:"M7.4 5.598a.784.784 0 0 1 .25-.92c.335-.256.824-.197 1.02.062.066.063.066.063.08.085l2.406 3.152-.626.238a3.983 3.983 0 0 0-1.097.633l-.522.424L7.4 5.598zm4.539 2.358c-.21 0-.418.017-.625.05l-.664.106.09-.666.438-3.266c.013-.072.013-.072.012-.057a.783.783 0 0 1 .666-.616.78.78 0 0 1 .872.639l.006.038.507 3.933-.662-.108a3.957 3.957 0 0 0-.64-.053zm-7.781 3.19l.026-.004 3.934-.507-.108.662a3.98 3.98 0 0 0-.003 1.266l.105.664-.665-.09-3.265-.439a.784.784 0 0 1-.676-.679c-.054-.42.238-.809.63-.869l.022-.004zm11.504-.617a3.98 3.98 0 0 0-.632-1.097l-.425-.522.623-.256 3.056-1.256a.787.787 0 0 1 .916.253c.256.337.199.817-.104 1.063l-.045.037-3.151 2.405-.238-.627zm-1.205-1.672a3.984 3.984 0 0 0-1.095-.637l-.626-.24.41-.532 2.008-2.602c.059-.07.059-.07.046-.052a.78.78 0 0 1 1.306.227c.076.185.079.39.02.54l-.021.06-1.528 3.662-.52-.426zM4.595 7.793c.162-.387.611-.58.971-.441.017.004.017.004.055.02L9.283 8.9l-.425.52a3.985 3.985 0 0 0-.636 1.094l-.24.627-3.144-2.425a.784.784 0 0 1-.243-.924zm14.443 7.367c.054.045.054.045.044.04a.784.784 0 0 1 .199.884c-.163.386-.61.58-.964.443-.024-.006-.024-.006-.062-.022l-3.662-1.529.426-.52a3.98 3.98 0 0 0 .636-1.094l.241-.626 3.142 2.424zm1.332-3.303c.053.422-.239.809-.63.87l-.035.006-3.945.508.108-.662a3.999 3.999 0 0 0 .003-1.266l-.105-.663.665.09 3.272.44c.068.012.068.012.052.01a.784.784 0 0 1 .615.667zm-3.894 6.421c.024.068.024.068.017.053a.786.786 0 0 1-.27.87c-.332.25-.816.194-1.047-.091-.022-.023-.022-.023-.05-.058l-2.406-3.154.626-.237a3.977 3.977 0 0 0 1.097-.632l.523-.425 1.51 3.674zm-8.26-4.932c.151.397.365.767.633 1.097l.424.522-.622.256-3.054 1.255a.787.787 0 0 1-.92-.25.781.781 0 0 1-.154-.58c.027-.199.127-.379.227-.452.045-.046.045-.046.075-.069l3.153-2.406.238.627zm3.723 2.572c.209 0 .417-.016.625-.049l.662-.103-.089.664-.438 3.26-.012.062a.785.785 0 0 1-.666.618c-.048.005-.048.005-.101.006-.386 0-.714-.28-.764-.612-.01-.043-.01-.043-.014-.072l-.507-3.934.662.108c.213.035.427.052.642.052zM7.366 18.27l.006-.015L8.9 14.592l.52.426a3.99 3.99 0 0 0 1.094.636l.626.241-.41.531-2.012 2.609-.04.046a.788.788 0 0 1-.886.2.787.787 0 0 1-.428-1.011z"}),Object(u.jsx)("path",{d:"M11.911 14.322a2.411 2.411 0 1 0 0-4.822 2.411 2.411 0 0 0 0 4.822zm0 2a4.411 4.411 0 1 1 0-8.822 4.411 4.411 0 0 1 0 8.822z"})]}),Object(u.jsx)("div",{className:"d-block mx-2",children:"UV Index"}),Object(u.jsxs)("div",{className:"d-flex ml-auto",children:[c.uv," of 10.0"]})]})}),Object(u.jsx)("div",{className:"weather-items",children:Object(u.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(u.jsxs)("svg",{className:"weather-icons",set:"current-conditions",name:"visibility",theme:"dark","data-testid":"Icon","aria-hidden":"true",role:"img",width:"1024",height:"1024",viewBox:"0 0 1024 1024",children:[Object(u.jsx)("title",{children:"Visibility"}),Object(u.jsx)("path",{d:"M491.856 879.808c-60.48-5.056-110.848-25.184-171.328-55.424-120.96-55.424-216.704-146.112-292.256-256.96-25.248-40.352-30.24-80.64 0-126.016 80.608-115.872 186.464-211.68 317.472-272.096 110.816-50.4 226.752-50.4 337.664 0 136 60.48 241.824 156.224 317.44 282.208 15.104 25.216 25.12 65.504 10.048 85.728-105.792 191.424-256.992 367.84-519.04 342.56zm292.256-377.92c0-151.168-120.96-272.064-272.096-272.064-146.144 0-272.128 126.016-272.128 272.064 0 151.232 120.96 277.216 272.128 277.216 151.104-.032 272.096-125.984 272.096-277.216z"}),Object(u.jsx)("path",{d:"M789.808 500.416c0 156.896-125.472 287.52-282.336 282.336-156.864 0-282.336-130.656-282.336-287.488 0-146.4 130.656-277.12 282.336-277.12 156.896-.032 287.584 125.376 282.336 282.272zM512.752 348.832c-83.68 0-151.584 67.968-151.584 151.584 0 88.864 67.968 156.896 151.584 156.896 83.648 0 156.832-73.216 156.832-156.896-5.184-83.648-73.152-151.584-156.832-151.584z"})]}),Object(u.jsx)("div",{className:"d-block mx-2",children:"Visibility"}),Object(u.jsxs)("div",{className:"d-flex ml-auto",children:[c.vis_km," km"]})]})}),Object(u.jsx)("div",{className:"weather-items",children:Object(u.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(u.jsxs)("svg",{className:"weather-icons",set:"current-conditions",name:"moonphase",theme:"dark","data-testid":"Icon","aria-hidden":"true",role:"img",viewBox:"0 0 24 24",children:[Object(u.jsx)("title",{children:"Moon Phase"}),Object(u.jsx)("path",{fill:"none",d:"M12.099 20.19a8.095 8.095 0 1 0 0-16.19 8.095 8.095 0 0 0 0 16.19z",stroke:"currentColor",strokeWidth:"1.5"}),Object(u.jsx)("path",{d:"M12.079 4.518c3.4.673 4.065 5.797 4.066 7.577 0 1.78-.665 6.759-4.066 7.542-4.462 0-8.079-3.07-8.079-7.542 0-4.47 3.617-7.577 8.079-7.577z"})]}),Object(u.jsx)("div",{className:"d-block mx-2",children:"Moon Phase"}),Object(u.jsx)("div",{className:"d-flex ml-auto",children:a.astro.moon_phase})]})}),Object(u.jsx)("div",{className:"weather-items",children:Object(u.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(u.jsx)("div",{className:"d-block mx-2"}),Object(u.jsx)("div",{className:"d-flex ml-auto"})]})})]}),Object(u.jsx)("div",{className:"d-flex ",children:Object(u.jsx)("h1",{style:{fontSize:"20px",fontWeight:"bold"},children:"Hourly"})}),Object(u.jsx)("div",{className:"d-flex flex-row",id:"hourly-forecast",style:{overflowX:"scroll",overflowY:"hidden"},children:h.map((function(e){return Object(u.jsxs)("div",{className:"d-flex align-items-center flex-column border-0 d-flex forecast-items",style:{minWidth:"120px"},children:[Object(u.jsx)("div",{className:"card-title",style:{fontSize:"24px"},children:o!==parseInt(e.time.slice(11,13))?0===parseInt(e.time.slice(11,13))?e.time.slice(5,10):e.time.slice(11,16):"Now"}),Object(u.jsxs)("span",{style:{fontSize:"30px"},children:[Math.round(e.temp_c),"\xb0"]}),Object(u.jsx)("img",{className:"flex-shrink-0",src:e.condition.icon}),Object(u.jsxs)("span",{children:[Object(u.jsxs)("svg",{"data-testid":"Icon",className:"weather-icons",style:{transform:"rotate(".concat(e.wind_degree,"deg)")},set:"current-conditions",name:"wind-direction",theme:"dark","aria-hidden":"true",role:"img",viewBox:"0 0 24 24",children:[Object(u.jsx)("title",{children:"Wind Direction"}),Object(u.jsx)("path",{stroke:"currentColor",fill:"none",d:"M18.467 4.482l-5.738 5.738a1.005 1.005 0 0 1-1.417 0L5.575 4.482l6.446 16.44 6.446-16.44z"})]}),Math.round(e.wind_kph)," km/h"]})]},e.time_epoch)}))})]})})},N=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"modal fade-in",id:"backdrop",role:"dialog","data-backdrop":"static","data-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable",children:Object(u.jsx)("div",{className:"modal-content overview",children:Object(u.jsx)(y,{})})})})})};var k=function(){Object(n.b)();var e=Object(n.c)((function(e){return e.weatherData})),t=(e.current,e.loading);return e.message,e.forecast,Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"d-block mx-auto w-100",style:{maxWidth:"500px"},children:Object(u.jsxs)("div",{className:"d-flex flex-column",children:[t&&Object(u.jsx)(v,{}),Object(u.jsx)(p,{}),Object(u.jsx)(f,{}),Object(u.jsx)(O,{})]})})})},z=function(){var e=Object(n.c)((function(e){return e.weatherData})),t=(e.current,e.loading,Object(s.useState)("")),c=Object(w.a)(t,2),a=c[0],i=c[1],l=Object(n.b)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"d-flex flex-column w-100 mb-4",children:Object(u.jsx)("div",{className:"d-block w-100 my-auto",id:"search-box",style:{maxWidth:"380px"},children:Object(u.jsx)("div",{className:"d-block my-auto",style:{position:"relative"},children:Object(u.jsxs)("div",{className:"d-flex",style:{position:"relative"},children:[Object(u.jsx)("form",{className:"w-100",onSubmit:function(e){!function(e){e.preventDefault(),console.log(a),""!==a&&(l(b(a)),i(""))}(e)},children:Object(u.jsx)("input",{value:a,type:"text",className:"form-control text-center border-0 search-input",placeholder:"Search city",onChange:function(e){console.log(a),i(e.target.value)}})}),Object(u.jsxs)("svg",{style:{position:"absolute",height:"100%",right:"8px",top:"0",width:"24px"},set:"ui",name:"location",className:"d-inline-block",theme:"light","data-testid":"Icon","aria-hidden":"true",role:"img",viewBox:"0 0 20 20",children:[Object(u.jsx)("title",{children:"Search"}),Object(u.jsx)("path",{d:"M11.493 3.54c-2.284 0-4.142 1.866-4.142 4.16s1.858 4.16 4.142 4.16c2.284 0 4.142-1.866 4.142-4.16s-1.858-4.16-4.142-4.16zM7.026 11.72c-0.954-1.068-1.541-2.475-1.541-4.020 0-3.327 2.695-6.033 6.007-6.033s6.007 2.707 6.007 6.033c0 3.327-2.695 6.033-6.007 6.033-1.103 0-2.133-0.305-3.022-0.828l-4.327 5.099c-0.185 0.217-0.447 0.329-0.71 0.329-0.215 0-0.43-0.073-0.605-0.224-0.392-0.336-0.438-0.927-0.104-1.32l4.303-5.069z"})]})]})})})})})},S=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.weatherData})),c=t.current;t.loading;return Object(s.useEffect)((function(){var t=new Date;document.body.classList.add("g".concat(t.getHours())),c||navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var c=t.coords.latitude,s=t.coords.longitude;console.log(String(s)+","+String(c)),e(b(String(c)+","+String(s)))}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsxs)("div",{className:"container pt-4 d-flex flex-column",id:"main-container",children:[Object(u.jsx)(z,{}),Object(u.jsx)("main",{className:"d-flex flex-column my-auto w-100",children:Object(u.jsx)(d.a,{path:"/",exact:!0,component:k})})]}),Object(u.jsx)(N,{})]})})};"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var M=c(11),_=c(34),T=[c(35).a],D=Object(M.combineReducers)({weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:"Enter city name, zip code or latitude and longitude"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA_REQUEST":return{loading:!0};case"GET_DATA_SUCCESS":return{loading:!1,current:t.payload.current,forecastToday:t.payload.forecast.forecastday[0],forecast:t.payload.forecast.forecastday,location:t.payload.location};case"GET_DATA_ERROR":return{loading:!1,message:t.payload};default:return e}}}),E=Object(M.createStore)(D,{},Object(_.composeWithDevTools)(M.applyMiddleware.apply(void 0,T))),I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),i(e),l(e)}))};l.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(n.a,{store:E,children:Object(u.jsx)(S,{})})}),document.getElementById("root")),I()}},[[66,1,2]]]);
//# sourceMappingURL=main.a63232e6.chunk.js.map