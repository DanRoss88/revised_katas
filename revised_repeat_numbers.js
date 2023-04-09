/* const repeatNumbers = function(data) {
  let output = "";
  for (let i = 0; i < data.length; i++) {
    let num = data[i][0];
    let count = data[i][1];
    for (let j = 0; j < count; j++) {
      output += num;
    } if (i < data.length - 1) {
      output += ", ";
    }
  }
  return output;
};
*/
const repeatNumbers = function(data) {
  return data.map(innerArr => innerArr[0].toString().repeat(innerArr[1])).join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
