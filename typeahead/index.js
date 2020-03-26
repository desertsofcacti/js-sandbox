// const arr = ["amazon", "apple", "microsoft", "bloomberg", "facebook"];
const endpoint = "https://api.myjson.com/bins/1a18rm";
const names = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => names.push(...data));

function findMatches(wordToMatch, names) {
  return names.filter(name => {
    // Here we need to figure out if the city or the state matches what was searched
    const regEx = new RegExp(wordToMatch, "gi");
    return name.match(regEx);
  });
}

function displayMatches() {
  // console.log(this.value);
  const matchArray = findMatches(this.value, names);
  const html = matchArray.map(name => {
    return `
    
    `;
  });
  console.log(matchArray);
}

const searchInput = document.querySelector(".search");
const searchSuggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

console.log(names);
