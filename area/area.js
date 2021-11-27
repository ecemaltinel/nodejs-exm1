var readline = require("readline");

//creating interface to use readline in order to get data from user
var rl = readline.createInterface(process.stdin, process.stdout);

//area of the circle calculated as pi*radius^2. 
//First we have to get the area and then print it to the console thats why promise is used here.
const area = (radius) => {
  const promise = new Promise((resolve, reject) => {
    resolve(Math.PI * Math.pow(radius, 2))
  });

  return promise;
};

//we have to get input from user to be able to calculate area of the circle. Without having an input, area wont be calculated and written to console.
const getInput = () => {
  const promise = new Promise((resolve, reject) => {
    rl.question("Yarıçapı giriniz ", (radius) => {
      resolve(radius);
    });
  });

  return promise;
};

//after getting input and then calculating area, result will be written.
getInput()
  .then((given) => {
    area(given).then((area)=>{
      console.log(`Yarıçapı ${given} olan dairenin alanı: ${area}`);
      rl.close();
    }).catch((err) => {
      console.log("Alan hesaplanamadı",err);
    });
  })
  .catch((err) => {
    console.log("Yarıçap bilgisi alınamadı",err);
  });

