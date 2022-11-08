const camelCase = function(input) {
  let output = input
  for (let i = 0; i < input.length; i++) {
    
    if (input[i] === " ") {
      output = input.replace(" " + input[i+1], `${input[i+1]}`.toUpperCase())
      input = output
    } 
  } 
  return output
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));