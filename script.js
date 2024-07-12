const fruits = [
   'Apple',
   'Apricot',
   'Avocado 🥑',
   'Banana',
   'Bilberry',
   'Blackberry',
   'Blackcurrant',
   'Blueberry',
   'Boysenberry',
   'Currant',
   'Cherry',
   'Coconut',
   'Cranberry',
   'Cucumber',
   'Custard apple',
   'Damson',
   'Date',
   'Dragonfruit',
   'Durian',
   'Elderberry',
   'Feijoa',
   'Fig',
   'Gooseberry',
   'Grape',
   'Raisin',
   'Grapefruit',
   'Guava',
   'Honeyberry',
   'Huckleberry',
   'Jabuticaba',
   'Jackfruit',
   'Jambul',
   'Juniper berry',
   'Kiwifruit',
   'Kumquat',
   'Lemon',
   'Lime',
   'Loquat',
   'Longan',
   'Lychee',
   'Mango',
   'Mangosteen',
   'Marionberry',
   'Melon',
   'Cantaloupe',
   'Honeydew',
   'Watermelon',
   'Miracle fruit',
   'Mulberry',
   'Nectarine',
   'Nance',
   'Olive',
   'Orange',
   'Clementine',
   'Mandarine',
   'Tangerine',
   'Papaya',
   'Passionfruit',
   'Peach',
   'Pear',
   'Persimmon',
   'Plantain',
   'Plum',
   'Pineapple',
   'Pomegranate',
   'Pomelo',
   'Quince',
   'Raspberry',
   'Salmonberry',
   'Rambutan',
   'Redcurrant',
   'Salak',
   'Satsuma',
   'Soursop',
   'Star fruit',
   'Strawberry',
   'Tamarillo',
   'Tamarind',
   'Yuzu',
];
const fruitsInput = document.querySelector('#fruits-input');
const suggestions = document.querySelector('.suggestions ul');

function search() {
   let results = [];
   let input = fruitsInput.value;
   if (input.length) {
      results = fruits.filter((fruit) => {
         return fruit.toLowerCase().includes(input.toLowerCase());
      });
      return results;
   } else {
      return results;
      // if there is a length, return the filled results; if there is no length, return empty results ([]); .map will not give an error with an empty array
   }
}

function searchHandler(result) {
   result = search();
   let searchResults = [];
   let input = fruitsInput.value;
   searchResults = result.map((fruit) => {
      return fruit.replace(`${input}`, `<b>${input}</b>`);
   });
   // above; adding bold around input value NOTE: not working for capital letters and not sure how to fix it
   // RegExp /`${input}/gi` (global and case INsensitive)
   // YouTube example; Highlight Searched Text With Javascript @ 7:50
   const resultsHandler = searchResults.map((fruit) => {
      return `<li>${fruit}</li>`;
   });
   // above; adding li tags to each result
   console.log(resultsHandler);
   return (suggestions.innerHTML = resultsHandler.join(''));
}

function showSuggestions(results, inputVal) {
   // TODO - ????????
}

function useSuggestion(e) {
   const suggestionFruit = e.target;
   fruitsInput.value = suggestionFruit.innerText;
   suggestions.innerHTML = '';
   // NOTE: it works!
   // TODO
}

fruitsInput.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);
