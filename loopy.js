const fizzbuzz = () => {

  for (let number = 100; number <= 200; number++) {

    let output = "";

    if (number % 3 === 0) {
      output += "Loopy";
    }
    if (number % 4 === 0) {
      output += "Lighthouse";
    }

    console.log(output === "" ? number : output);
   
  }
};

fizzbuzz();