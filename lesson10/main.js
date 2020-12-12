// Bài 1
//  In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả.
function Shownmultiplicationtable (number) {
  for ( let i = 1; i <= 10; i++) {
    console.log(number ,'x i =',number*i);

  }
}

// Bài 2
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n
function Printevennumber (number) {
  for (let i = 1; i <= 30; i++) {
    if (i % 2 ===0) {
      console.log(i)
    }
  }
}

// Bài 3
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n
function Sumnumber (number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log('Tong', sum);
}

// Bài 4
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In ra n! (giai thừa của n)
function Printfactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(factorial);
}

// Bài 5
// Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
function Evennumber() {
  let count = 0;
  const array =  [1, 2, 3, 6, 2, 9, 0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

// Bài 6
// Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
array = ['A', 'C', 'A', 'A', 'B', 'D', 'B']
var arrSet = [...new Set(array)];
console.log(arrSet);