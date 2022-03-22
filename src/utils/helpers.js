
export const removeWhiteSpaces = (string) => {
  return string.split(' ').join('');
}

// console.log(removeWhiteSpaces('a b cdkfdkf fdgfgfg'))

 export
 const addAt = (string) => {
  if(!string.includes("@")){
    return string.replace(string,'@'+string)
} else return string}
// console.log(addAt('test'))