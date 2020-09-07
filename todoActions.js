"use strict";
exports.__esModule = true;
exports.addTodo = void 0;
exports.addTodo = function (title, html) {
    var newTodo = {
        id: Date.now(),
        title: title,
        completed: false
    };
    html.innerHTML += "<div class=\"todos__content-item\">\n                            <input type=\"checkbox\" checked=" + newTodo.completed + ">\n                            <h4>" + newTodo.title + "</h4>\n                            <button>Delete</button>\n                        </div>";
};
