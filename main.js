
// Tạo mảng 
let x = 0;
let arr =[];
let clickBtn = document.getElementById('btn')
clickBtn.addEventListener('click', function() {
   
    let inNumber = +document.getElementById('inputNumber').value;
    if(isNaN(inNumber)||inNumber ==="") {

        alert('Nhập lại số');
        document.getElementById('inputNumber').value = ""; 
    }
    else {
        arr[x] = inNumber;
        let displayArray = document.getElementById('display').innerHTML = arr;
        x++;
        document.getElementById('inputNumber').value = ""; 
    }
});

// Xóa  phần tử bất kỳ vào trong mảng
let delArray = [];
let dltArray = document.getElementById('delete');
    dltArray.addEventListener('click',function(){
    let indAdd = +document.getElementById('index_delete').value;

    for (let i = 0; i < arr.length-1; i++) {

        if(i < indAdd) {

            delArray[i] = arr[i];
        }
        else if(i >= indAdd) {
            delArray[i] = arr[i +1];
        }
        
    }
    document.getElementById('output_del').innerText= delArray;
});

// Thêm phần tử bát kỳ vào trong mảng

let arrAdd = [];
let addArray = document.getElementById('add_number');
    addArray.addEventListener('click',function(){
    let eleAdd = +document.getElementById('element_add').value;
    let indAdd = +document.getElementById('index_add').value;
    if(indAdd < 0) {
        alert('Nhập lại vị trí muốn thêm');
        document.getElementById('index_add').value = "";
    }
    else {
        for (let i = 0; i < arr.length+1; i++) {
    
            if(i < indAdd) {
    
                arrAdd[i] = arr[i];
            }
            else if (i === indAdd) {
                arrAdd[i] = eleAdd;
            }
            else {
                arrAdd[i] = arr[i-1];
            }
        }
        document.getElementById('output_add').innerText= arrAdd;
    }
});
 
// Nhập 1 số kiểm tra số đó có trong mảng hay không? Nếu có trả về vị trí của phần tử đó
    let search =document.getElementById('search_btn');
    search.addEventListener('click',function(){
    let numberSearch = +document.getElementById('search').value;
    let i;
    let flag = -1;
    for(i = 1; i < arr.length; i++) {
        if(numberSearch==arr[i]){
            flag = 0;
            break;
        }
    } 

    if (!flag) {
        document.getElementById('output_search').innerHTML = `${numberSearch} có trong mảng ở vị trí ${i}`;   
        document.getElementById('search').value = ""; 
    }
    else {
        document.getElementById('output_search').innerHTML = "Không có trong mảng";
        document.getElementById('search').value = "";
    }
});


//Sắp xếp giảm dần
let sortMin = document.getElementById('min');
sortMin.addEventListener('click', function(){
    let tg;
    for(let i = 0; i < arr.length -1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
                if(arr[i] < arr[j]){
                    tg = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tg;
                }
        }
    }
    document.getElementById('output_sort_min').innerHTML = arr;
});
let sortMax = document.getElementById('max');
sortMax.addEventListener('click', function(){
    let tg;
    for(let i = 0; i < arr.length -1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
                if(arr[i] > arr[j]){
                    tg = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tg;
                }
        }
    }
    document.getElementById('output_sort_max').innerHTML = arr;
});



