let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
 
 let result = arr.map(date => {
     if(date.includes(`-`)){
         return date.split(`-`).reverse().join(`/`);
     }
     return date;
 })
 
 console.log(result);