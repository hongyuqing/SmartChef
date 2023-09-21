var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [{},{},{},{},{},{}]
};

var btn = document.querySelector('#nextButton');

function saveNames() {
    data.todo[0] = [];
    
    data.todo[2] = [];

    // for (var i = 1; i <= 2; i++) {
    //     var inputId = "textField" + i;
    //     var str = document.getElementById(inputId).value;
    //     data.todo[0].push(str);
    // }

    var str1 = document.querySelector('#textField1').value;
    data.todo[0].push(str1);


    var str3 = document.querySelector('#textField2').value;
    data.todo[2].push(str3);

    localStorage.setItem('todoList', JSON.stringify(data));
}

function savePhotos(){
    data.todo[1] = [];

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector('#uploaded-image').src = e.target.result;

            //保存圖片資料到本機存放區
            data.image = e.target.result;

            localStorage.setItem('todoList', JSON.stringify(data));
        };
        reader.readAsDataURL(file);
    }
    var str2 = document.querySelector('#file-input').value;
    data.todo[1].push(str2);
}

fileInput.addEventListener('change', savePhotos);
btn.addEventListener('click', saveNames);



