!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.renderTodos=void 0;var n=o(1),d=o(1),a=document.getElementById("todoAddForm"),i=document.querySelector(".todos__content"),l=document.querySelector("#filterSelect"),c=document.querySelector("#search-todos"),u=document.createElement("button");u.setAttribute("id","delete-btn");var s=[{id:1,title:"Купить хлеб",completed:!0},{id:2,title:"Купить молока",completed:!1},{id:3,title:"Купить пиво",completed:!1}];String.prototype.searchWords=function(e){var t,o=this.toLowerCase(),r=0,n=-1;for(e=e.toLowerCase();t=e[r++];)if(!~(n=o.indexOf(t,n+1)))return!1;return!0};var f=function(e,t){0!==e.length?e.map((function(e){t.innerHTML+='<div class="todos__content-item" >\n                            <input data-id='+e.id+' type="checkbox" '+(e.completed?"checked":null)+">\n                            <h4 class="+(e.completed?"done":null)+">"+e.title+'</h4>\n                            <button id="delete-btn" data-id='+e.id+">Delete</button>\n                        </div>"})):t.innerHTML="<h4>No todos!</h4>"};t.renderTodos=function(e,t){switch(t.innerHTML="",localStorage.getItem("filter")||"all"){case"all":f(e,i);break;case"active":e=e.filter((function(e){return!1===e.completed})),f(e,i);break;case"completed":e=e.filter((function(e){return!0===e.completed})),f(e,i)}},a.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.target).get("todo").toString();n.addTodo(JSON.parse(localStorage.getItem("todos"))||s,i,t)})),i.addEventListener("click",(function(e){var o=JSON.parse(localStorage.getItem("todos"));if(e.target.getAttribute("id")==u.getAttribute("id")){var n=Number(e.target.dataset.id);d.deleteTodo(n,o,i)}if("checkbox"===e.target.getAttribute("type")){var a=Number(e.target.dataset.id),l=o.map((function(e){return e.id===a?r(r({},e),{completed:!e.completed}):r({},e)}));localStorage.setItem("todos",JSON.stringify(l)),t.renderTodos(l,i)}})),c.addEventListener("input",(function(e){var o=e.target.value;if(o.length>3){var r=JSON.parse(localStorage.getItem("todos")).filter((function(e){return e.title.searchWords(o)}));t.renderTodos(r,i)}else t.renderTodos(JSON.parse(localStorage.getItem("todos")),i)})),l.addEventListener("change",(function(e){var o=e.target.value,r=JSON.parse(localStorage.getItem("todos"));localStorage.setItem("filter",o),t.renderTodos(r,i)})),t.renderTodos(JSON.parse(localStorage.getItem("todos"))||s,i)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addTodo=t.deleteTodo=void 0;var r=o(0);t.deleteTodo=function(e,o,r){var n=o.filter((function(t){return t.id!==e}));t.addTodo(n,r)},t.addTodo=function(e,t,o){if(o){var n={id:Date.now(),title:o,completed:!1};e.push(n)}localStorage.setItem("todos",JSON.stringify(e));var d=JSON.parse(localStorage.getItem("todos"));r.renderTodos(d,t)}}]);