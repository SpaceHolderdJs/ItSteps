function encrypt(str,step = 3) {

  if(typeof str !== "string") return false;
  

  let data = str.split("");

  data.forEach((e,i,arr) => arr[i] = +e + step >= 9 ? ((+e) + step)-10 : +e + step);

  return {
    str: data.join(""),
    step: step,
    status: "encrypted"
  }

}

console.log(encrypt("12349"));
let test = encrypt("16",4);


function decrypt(str, step = str.step || 3) {

    let data = typeof str == "string" ? str.split("") : str.str.split("");

    data.forEach((e,i,arr)=> arr[i] = +e - step >= 0 ? +e - step :  (+e) - step + 10 );

    return {
      str: data.join(""),
      step: str.step || step,
      status: "decrypted"
    }

}


console.log(decrypt(encrypt("12349")));
console.log(decrypt("12345",4));
console.log(decrypt(test));