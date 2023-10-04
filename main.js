(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){if(!document.getElementById("popUp")){let e=document.createElement("div");e.id="popUp",e.innerText="New Task",document.getElementById("content").appendChild(e)}}function n(){if(document.getElementById("popUp")){const e=document.getElementById("popUp");e.classList="remove",setTimeout((()=>{e.remove()}),300)}}function i(e){const t=new Date;let n=String(t.getDate()).padStart(2,"0"),i=String(t.getDate()+1).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear(),s=`${o}-${a}-${n}`,c=`${o+1}-${a}-${n}`,d=`${o}-${a}-${i}`;return console.log(d),"min"===e?s:"max"===e?c:"today"===e?s:"tomorrow"===e?d:void 0}e.d({},{s:()=>l});const a=function(){document.getElementById("important").classList="",document.getElementById("normal").classList="",document.getElementById("low").classList="",document.getElementById(this.id).classList="active"};function o(){const e=document.getElementById("tasks");e.innerHTML="",l.forEach(((t,n)=>{!function(t,n){let a=document.createElement("div");a.classList=`task ${t.taskPriority}`,a.id=`task_${n}`,Object.keys(t).forEach((e=>{if("taskDone"===e||"taskPriority"===e)return 0;let n=document.createElement("div");n.classList=e,"taskDate"===e&&t[e]===i("today")?(n.innerText="Today",n.classList="Today"):"taskDate"===e&&t[e]===i("tomorrow")?(n.innerText="Tomorrow",n.classList="Tomorrow"):n.innerText=`${t[e]}`,a.appendChild(n)})),e.appendChild(a)}(t,n)})),console.log(l.length)}const s=(e,t,n,i,a)=>({taskTitle:e,taskDescription:t,taskDate:n,taskPriority:i,taskDone:a}),c=function(){document.getElementById("exitNewTask").removeEventListener("click",c),document.getElementById("important").removeEventListener("click",a),document.getElementById("normal").removeEventListener("click",a),document.getElementById("low").removeEventListener("click",a),document.getElementById("submitTask").removeEventListener("click",d);const e=document.getElementById("taskWindow");e?.remove()},d=function(){let e,t=document.getElementById("title").value,n=document.getElementById("description").value,i=document.getElementById("taskDate").value;e="active"===document.getElementById("important").classList.value?"important":"active"===document.getElementById("low").classList.value?"low":"normal",l.push(s(t,n,i,e,!1)),o(),c()};let l=new Array;document.getElementById("navbarButton").addEventListener("click",(function(){const e=document.getElementById("navbar");e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})),document.getElementById("circle").addEventListener("click",(function(){const e=document.getElementById("heading"),t=document.getElementById("mainContainer");"moon"==circle.classList?(circle.classList.remove("moon"),circle.classList.add("sun"),e.classList.remove("night"),e.classList.add("day"),t.classList.remove("night"),t.classList.add("day")):(circle.classList.remove("sun"),circle.classList.add("moon"),e.classList.remove("day"),e.classList.add("night"),t.classList.remove("day"),t.classList.add("night"))})),document.getElementById("newTaskButton").addEventListener("click",(function(){let e=document.createElement("div");e.id="taskWindow";let t=document.createElement("div");t.id="taskContainer",t.classList.add(document.getElementById("heading").classList.value);let n=document.createElement("form");n.id="taskForm";let o=document.createElement("textarea");o.id="title",o.placeholder="Title",o.setAttribute("maxlength","30"),n.appendChild(o);let s=document.createElement("textarea");s.id="description",s.placeholder="Description",n.appendChild(s);let l=document.createElement("input");l.id="taskDate",l.type="date",l.setAttribute("min",i("min")),l.setAttribute("max",i("max")),n.appendChild(l);let m=document.createElement("div");m.id="priority";let r=document.createElement("div");r.id="important",r.innerText="Important",m.appendChild(r);let u=document.createElement("div");u.id="normal",u.classList="active",u.innerText="Normal",m.appendChild(u);let p=document.createElement("div");p.id="low",p.innerText="Low",m.appendChild(p),n.appendChild(m);let E=document.createElement("input");E.type="button",E.id="submitTask",E.value="Create Task",n.appendChild(E);let v=document.createElement("div");v.id="exitNewTask",v.innerText="X",v.onclick="delNewTaskContainer",t.appendChild(v),t.appendChild(n),e.appendChild(t),document.getElementById("mainContainer").appendChild(e),document.getElementById("exitNewTask").addEventListener("click",c),document.getElementById("important").addEventListener("click",a),document.getElementById("normal").addEventListener("click",a),document.getElementById("low").addEventListener("click",a),document.getElementById("submitTask").addEventListener("click",d)})),document.getElementById("newTaskButton").addEventListener("mouseenter",(function(){t()})),document.getElementById("newTaskButton").addEventListener("mouseleave",(function(){n()})),window.onload=function(){t(),setTimeout((()=>{n()}),5e3)},function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()?console.log("storageAvaible"):console.log("storageNotAvaible"),l.push(s("Create Task","lLorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, nemo ratione? A accusamus officia suscipit aliquam, maiores ea, omnis labore vel quam molestiae praesentium porro cumque similique, laudantium totam ipsam.","2023-10-04","normal",!1)),l.push(s("Create Task","lLorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, nemo ratione? A accusamus officia suscipit aliquam, maiores ea, omnis labore vel quam molestiae praesentium porro cumque similique, laudantium totam ipsam.","2023-10-04","normal",!1)),l.push(s("Create Task","lLorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, nemo ratione? A accusamus officia suscipit aliquam, maiores ea, omnis labore vel quam molestiae praesentium porro cumque similique, laudantium totam ipsam.","2023-10-04","normal",!1)),o()})();