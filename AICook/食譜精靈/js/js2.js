var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [{},{},{},{},{},{}]
};

var btn = document.querySelector('#nextButton');



function saveNames() {
    data.todo[3] = [];
    var y = document.getElementById('Content_Convert2');
    var x = y.querySelectorAll('textarea');
    var n = x.length;

    // for (var i = 1; i <= n; i++) {
    //     // var inputId = "textField3";
    //     // var str = document.getElementById(inputId).value;
    //     var str = document.querySelector('#textField3').value;
    //     data.todo[2].push(str);
    // }

    for (var i = 1; i <= n; i++) {
        var inputId = "textField" + i;
        var str = document.getElementById(inputId).value;
        data.todo[3].push(str);
    }

    localStorage.setItem('todoList', JSON.stringify(data));
}

btn.addEventListener('click', saveNames);