let array = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
if (array.length === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    array.forEach(function(email) {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email)) {
            console.log(email + " là email hợp lệ");
        } else {
            console.log(email + " không phải email hợp lệ");
        }
    });
}
