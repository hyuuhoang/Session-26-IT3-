let array = ["apple", "banana", "cat", "elephant", "dog"];
if(array.length == 0){
    console.log("Mảng không có phần tử nào");
}
let filteredArray = array.filter(function(element, index, arr) {
    return element.length > 5;
});
console.log(filteredArray);
