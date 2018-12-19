/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var numArr = x.toString().split('');
  if(numArr.length === 0) return false;
  if(numArr.length === 1) return true;
  for(var i = 0, j = numArr.length - 1; i < numArr.length; i++, j--){
    if(numArr[i] !== numArr[j]){
      return false
    }
    if(i === j || i + 1 ===j){
      return true;
    }
  }
};

