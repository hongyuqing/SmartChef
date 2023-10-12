// var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
//     todo: [{},{},{},{},{},{}]
// };

// var btn = document.querySelector('#save');

// function saveNames() {
//     data.todo[0] = [];
    
//     data.todo[2] = [];

//     // for (var i = 1; i <= 2; i++) {
//     //     var inputId = "textField" + i;
//     //     var str = document.getElementById(inputId).value;
//     //     data.todo[0].push(str);
//     // }

//     var str1 = document.querySelector('#textField1').value;
//     data.todo[0].push(str1);


//     var str3 = document.querySelector('#textField2').value;
//     data.todo[2].push(str3);

//     localStorage.setItem('todoList', JSON.stringify(data));
// }

// function savePhotos(){
//     data.todo[1] = [];

//     const file = fileInput.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             document.querySelector('#uploaded-image').src = e.target.result;

//             //保存圖片資料到本機存放區
//             data.image = e.target.result;

//             localStorage.setItem('todoList', JSON.stringify(data));
//         };
//         reader.readAsDataURL(file);
//     }
//     var str2 = document.querySelector('#file-input').value;
//     data.todo[1].push(str2);
// }

// fileInput.addEventListener('change', savePhotos);
// btn.addEventListener('click', saveNames);





let inputData = {};

document.addEventListener('DOMContentLoaded', function () {
    const textField1 = document.getElementById('textField1');
    // const textField2 = document.getElementById('textField2');
    const fileInput = document.getElementById('file-input');
    const uploadedImage = document.getElementById('uploaded-image');
    const btn = document.querySelector('#save');

    // 檢查本機存放區中是否有之前保存的表單數據
    const savedData = JSON.parse(localStorage.getItem('recipeData')) || {};
    if (savedData) {
        textField1.value = savedData.User_Name || '';
        // textField2.value = savedData.food_Description || '';
        uploadedImage.src = savedData.image || '';
    }

    // 監聽檔選擇事件，顯示所選圖片並保存圖片資料到本機存放區
    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadedImage.src = e.target.result;

                // 保存圖片資料到本機存放區
                savedData.image = e.target.result;
                localStorage.setItem('recipeData', JSON.stringify(savedData));
            };
            reader.readAsDataURL(file);
        }
    });

    // 點擊下一步按鈕時保存資料並輸出到控制台
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        // 保存使用者輸入的資料
        inputData = {
            User_Name: textField1.value,
            // food_Description: textField2.value,
            image: savedData.image || '',
        };

        // 將資料輸出到控制台
        console.log('User_Name:', inputData.User_Name);
        // console.log('food_Description:', inputData.food_Description);
        console.log('User_Photo:', inputData.image);

        // 跳轉到下一頁
        window.location.href = btn.href;
    });
});

