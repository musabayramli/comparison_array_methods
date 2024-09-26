let arr = [15, 49, "string", 3, 6, 62, "array", 12, 9, -4, "number", 58, 103];


// Array-i göstərmək üçün
document.getElementById("array-display").textContent = `Array: [${arr.join(", ")}]`;


// forEach metodu ilə həll
let newArrForEach = [];
arr.forEach(item => {
  if (typeof item === 'number') {
    newArrForEach.push(item * 2);
  }
});
document.getElementById("result1").textContent = newArrForEach.join(", ");

// map metodu ilə həll
let newArrMap = arr.map(item => (typeof item === 'number' ? item * 2 : item));
document.getElementById("result2").textContent = newArrMap.join(", ");

// reduce metodu ilə həll
let newArrReduce = arr.reduce((acc, item) => {
  if (typeof item === 'number') {
    acc.push(item * 2);
  }
  return acc;
}, []);
document.getElementById("result3").textContent = newArrReduce.join(", ");

// filter metodu ilə həll
let newArrFilter = arr.filter(item => typeof item === 'number').map(item => item * 2);
document.getElementById("result4").textContent = newArrFilter.join(", ");

// find metodu ilə həll
let foundNumber = arr.find(item => typeof item === 'number');
let foundResult = foundNumber ? [foundNumber * 2] : [];
document.getElementById("result5").textContent = foundResult.join(", ");

// some metodu ilə həll
let hasNumber = arr.some(item => typeof item === 'number');
let someResult = hasNumber ? arr.map(item => (typeof item === 'number' ? item * 2 : item)) : [];
document.getElementById("result6").textContent = someResult.join(", ");

// every metodu ilə həll
let allNumbers = arr.every(item => typeof item === 'number');
let everyResult = allNumbers ? arr.map(item => item * 2) : "Arraydə bütün elementlər rəqəm deyil.";
document.getElementById("result7").textContent = Array.isArray(everyResult) ? everyResult.join(", ") : everyResult;

// Toggle kod görünüşü funksiyası
function toggleCode(codeId) {
  const codeBlock = document.getElementById("code" + codeId);
  const button = codeBlock.previousElementSibling;

  if (codeBlock.style.display === "block") {
    codeBlock.style.display = "none";
    button.textContent = "Kodu Göstər";
  } else {
    codeBlock.style.display = "block";
    button.textContent = "Kodu Gizlət";
  }
}
