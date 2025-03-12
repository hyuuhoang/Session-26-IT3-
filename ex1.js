let array = [1, 22, 10, 9, 8];
if(array.length == 0){
    console.log("Mảng không có phần tử nào");
}
let filteredArray = array.filter(function(element, index, arr) {
    return element >= 10;
});
console.log(filteredArray);
