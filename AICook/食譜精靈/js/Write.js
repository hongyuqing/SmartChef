/*----------------------------------------------------------圖片上傳功能----------------------------------------------------------*/
// 獲取HTML元素的引用
const photoUpload = document.querySelector('.photo-upload'); // 用於拖曳圖片的區域
const customUploadButton = document.querySelector('.custom-upload-button'); // 自定義的上傳按鈕
const uploadedImage = document.getElementById('uploaded-image'); // 顯示上傳的圖片
const fileInput = document.getElementById('file-input'); // 文件上傳輸入框

// 控制變數
let isUploading = false; // 標誌是否正在上傳中
let preventMultipleUploads = false; // 標誌是否要防止多次上傳

// 監聽拖曳事件
photoUpload.addEventListener('dragover', function (e) {
    e.preventDefault(); // 防止瀏覽器的默認行為
    if (!isUploading) {
        photoUpload.classList.add('dragover'); // 添加CSS類以顯示拖曳效果
    }
});

// 監聽拖曳結束事件
photoUpload.addEventListener('dragleave', function () {
    if (!isUploading) {
        photoUpload.classList.remove('dragover'); // 移除拖曳效果的CSS類
    }
});

// 監聽放置事件
photoUpload.addEventListener('drop', function (e) {
    e.preventDefault(); // 防止瀏覽器的默認行為
    if (!isUploading) {
        photoUpload.classList.remove('dragover'); // 移除拖曳效果的CSS類
        const file = e.dataTransfer.files[0]; // 獲取拖曳的文件

        // 檢查文件是否為圖片且不在上傳過程中
        if (file && file.type.startsWith('image/') && !preventMultipleUploads) {
            isUploading = true; // 標誌為上傳中
            handleImageUpload(file); // 處理圖片上傳
        }
    }
});

// 監聽自定義上傳按鈕的點擊事件
customUploadButton.addEventListener('click', function () {
    if (!isUploading && !preventMultipleUploads) {
        fileInput.click(); // 觸發文件上傳輸入框的點擊事件
    }
});

// 監聽文件上傳輸入框的文件選擇事件
fileInput.addEventListener('change', function () {
    if (!isUploading && !preventMultipleUploads) {
        const file = fileInput.files[0]; // 獲取所選文件

        // 檢查文件是否為圖片
        if (file && file.type.startsWith('image/')) {
            isUploading = true; // 標誌為上傳中
            handleImageUpload(file); // 處理圖片上傳
        }
    }
});

// 處理圖片上傳的函數
function handleImageUpload(file) {
    preventMultipleUploads = true; // 防止多次上傳

    // 使用FileReader讀取文件並顯示在網頁上
    const reader = new FileReader();
    reader.onload = function (e) {
        uploadedImage.src = e.target.result; // 設置圖片的src屬性
        isUploading = false; // 上傳完成
        preventMultipleUploads = false; // 允許未來的上傳

        // customUploadButton.style.display = 'none';
        photoUpload.style.border = 'none';
    };
    reader.readAsDataURL(file); // 讀取文件為數據URL

    uploadedImage.parentElement.style.display = 'block'; // 顯示上傳的圖片容器
}




/*----------------------------------------------------------存取使用者輸入的資料----------------------------------------------------------*/
// // 在這裡將 inputData 定義為一個空物件，以便在全域範圍內使用
// let inputData = {};

// document.addEventListener('DOMContentLoaded', function () {
//     const textField1 = document.getElementById('textField1');
//     const textField2 = document.getElementById('textField2');
//     const fileInput = document.getElementById('file-input');
//     const uploadedImage = document.getElementById('uploaded-image');
//     const nextButton = document.getElementById('nextButton');

//     // 檢查本機存放區中是否有之前保存的表單數據
//     const savedData = JSON.parse(localStorage.getItem('recipeData')) || {};
//     if (savedData) {
//         textField1.value = savedData.recipeName || '';
//         textField2.value = savedData.description || '';
//         uploadedImage.src = savedData.image || '';
//     }

//     // 監聽檔選擇事件，顯示所選圖片並保存圖片資料到本機存放區
//     fileInput.addEventListener('change', function () {
//         const file = fileInput.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 uploadedImage.src = e.target.result;

//                 // 保存圖片資料到本機存放區
//                 savedData.image = e.target.result;
//                 localStorage.setItem('recipeData', JSON.stringify(savedData));
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     // 點擊下一步按鈕時保存資料並輸出到控制台
//     nextButton.addEventListener('click', function (e) {
//         e.preventDefault();

//         // 保存使用者輸入的資料
//         inputData = {
//             recipeName: textField1.value,
//             description: textField2.value,
//             image: savedData.image || '',
//         };

//         // 將資料輸出到控制台
//         console.log('Recipe Name:', inputData.recipeName);
//         console.log('Description:', inputData.description);
//         console.log('Image:', inputData.image);

//         // 跳轉到下一頁
//         window.location.href = nextButton.href;
//     });
// });








