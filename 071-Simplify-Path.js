/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const validOperators = path.split('/')
    .filter(e => e !== '' && e !== '.');

  // console.log(validOperators);
  for (const e of validOperators) {
    switch (e) {
      case '..':
        stack.pop();
        break;
      case (e.match(/\w/) || {}).input:
        stack.push(e);
        break;
      default:
        stack.push(e);
        console.log('=========>', e);
    }
  }

  if(stack.length === 0) return '/';
  stack.unshift('');
  return stack.join('/');
};


console.log(simplifyPath('/a/../../b/../c//.//'));