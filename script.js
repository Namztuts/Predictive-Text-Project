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

function search(searchTerm) {
   let results = [];
   // let input = fruitsInput.value;
   if (searchTerm.length) {
      results = fruits.filter((fruit) => {
         return fruit.toLowerCase().includes(searchTerm.toLowerCase());
      });
      return results;
   } else {
      return results;
      // if there is a length, return the filled results; if there is no length, return empty results ([]); .map will not give an error with an empty array
   }
}

function searchHandler() {
   let input = fruitsInput.value;
   const results = search(input);
   let searchResults = [];
   searchResults = results.map((fruit) => {
      return fruit.replace(`${input}`, `<b>${input}</b>`);
   });
   showSuggestions(searchResults, input);
   // above; adding bold around input value NOTE: not working for capital letters and not sure how to fix it
   // feel like i've gotten close; for each index, return the [0] index but capital if it is the first letter of the fruit
}

function showSuggestions(results, inputVal) {
   const resultsHandler = results.map((fruit) => {
      return `<li>${fruit}</li>`;
   });
   // above; adding li tags to each result
   return (suggestions.innerHTML = resultsHandler.join(''));
}

function useSuggestion(e) {
   const suggestionFruit = e.target;
   fruitsInput.value = suggestionFruit.innerText;
   suggestions.innerHTML = '';
}

fruitsInput.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);
