// 1
async function getFact() {
  let response = await axios.get("http://numbersapi.com/9?json");
  console.log(response.data);
}

//2
async function getManyNums() {
  let response = await axios.get("http://numbersapi.com/1..5?json");
  console.log(response.data);
}

//3
let $facts = $("#facts");

async function getManyFacts() {
  let res1 = await axios.get("http://numbersapi.com/9?json");
  $facts.append(`<p>${res1.data.text}</p>`);

  let res2 = await axios.get("http://numbersapi.com/9?json");
  $facts.append(`<p>${res1.data.text}</p>`);

  let res3 = await axios.get("http://numbersapi.com/9?json");
  $facts.append(`<p>${res1.data.text}</p>`);

  let res4 = await axios.get("http://numbersapi.com/9?json");
  $facts.append(`<p>${res1.data.text}</p>`);
}
