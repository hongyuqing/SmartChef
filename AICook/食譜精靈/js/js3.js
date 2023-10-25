// var data = JSON.parse(localStorage.getItem('todoList'));
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [{},{},{},{},{},{}]
};
var call = document.querySelector('#demo3');



function displayNames() {
    if (data && data.todo && data.todo.length > 0) {
        console.log(data.todo.join(", "));
    } else {
        console.log("資料為空");
    }
}

// function saveNamesSecondPage() {
//     var n = Object.keys(x).length;
//     for (var i = 1; i <= n; i++) {
//         var inputId = "textField5";
//         var str = document.getElementById(inputId).value;
//         data.todo.push(str);
//     }

//     localStorage.setItem('todoList', JSON.stringify(data));
// }

function outputAllData() {
    data.todo[5] = [];
    var y = document.getElementById('Content_Convert3');
    var x = y.querySelectorAll('textarea');
    var n = x.length;

    // for (var i = 1; i <= n; i++) {
    //     // var inputId = "textField5";
    //     // var str = document.getElementById(inputId).value;
    //     var str = document.querySelector('#textField5').value;
    //     data.todo[4].push(str);
    // }

    for (var i = 1; i <= n; i++) {
        var inputId = "textField" + i;
        var str = document.getElementById(inputId).value;
        data.todo[5].push(str);
    }

    localStorage.setItem('todoList', JSON.stringify(data));
    
    if (data && data.todo && data.todo.length > 0) {
        // strArr = localStorage.getItem('todoList');
        // console.log(data.todo.join(", "));
        console.log('food_Name:',data.todo[0]);  // 陣列
        console.log('food_Photo:',data.todo[1]);
        console.log('food_Description:',data.todo[2]);
        console.log('food_Food:',data.todo[3]);
        console.log('food_Processing:',data.todo[4]);
        console.log('food_Step:',data.todo[5]);
    } else {
        console.log("資料為空");
    }
}

// button2.addEventListener('click', saveNamesSecondPage);
call.addEventListener('click', outputAllData);
