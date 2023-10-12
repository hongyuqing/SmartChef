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

