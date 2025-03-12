let numbers = [10, 9, 5, 11, 24, 5];
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }
    
    let maxData = numbers.map((num, index) => ({ num, index }))
                        .filter(item => item.num === Math.max(...numbers))[0];
    
    console.log("Số lớn nhất trong mảng là:", maxData.num);
    console.log("Vị trí index của số lớn nhất là:", maxData.index);
}
findMaxNumber(numbers);