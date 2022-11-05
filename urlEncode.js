const urlEncode = function(text) {
  let trimmed = text.trim()
  let encoded = trimmed.split(" ").join("20%")
  return encoded
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));