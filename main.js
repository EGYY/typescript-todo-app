"use strict";
exports.__esModule = true;
var addTodo_1 = require("./addTodo");
var todoAddForm = document.getElementById('todoAddForm');
var todoContent = document.querySelector('.todos__content');
todoAddForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    var title = formData.get('todo').toString();
    addTodo_1.addTodo(title, todoContent);
    console.log(title);
});
