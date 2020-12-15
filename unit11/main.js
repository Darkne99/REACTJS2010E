// Bài 2
// Viết 1 hàm để đảo ngược 1 mảng
const array = [1, 2, 3, 4]
array.reverse()
console.log(array)

// Bài 3
// Xóa đi các giá trị được xem là sai
const sparseArray = [0, , , 1, , , , , 2, , , , 3],
cleanArray = sparseArray.filter(function () { return true });
console.log(cleanArray);

// Bài 4
// Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
const iterable = new Set (['a', 1], ['b', 2]);

for (const value of iterable) {
  console.log(value);
}

// Bài 5
// Sắp xếp mảng tăng dần
const points = [6, 4, 0, 3, 1];
points.sort (function(a, b) {
  return a - b
});
console.log(points);

// Bài 6
// Kiểm tra input đầu vào có phải là object hay không?
typeof {a: 1} === 'object';


// Bài 8
// Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa
const fruits = ['apple', 'banana', 'mango', 'coconut', 'potato', 'sapodilla']
console.log(fruits)
const remote = fruits.splice (2, 3)
console.log (fruits)
console.log (remote)
