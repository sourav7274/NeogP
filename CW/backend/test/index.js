const countries = [
    { country: "USA", capital: "Washington, D.C." },
    { country: "France", capital: "Paris" },
    { country: "Japan", capital: "Tokyo" },
  ];

  const newC = countries.map(c => {
    c.country
  })

//   console.log(newC)
const reverse = (word) =>{
  let newword = ""
  let l = word.length
  for(let i = 0;i<word.length/2;i++)
  {
      newword[i]= word[l-1-i]
  } 
  console.log(newword)
  // return newword
}
// const wordsFilter = ["level", "apple", "radar", "banana", "civic"];

// const newFilter = wordsFilter.filter(w => w)

// console.log(reverse("apple"))

const strings = ["hello", "world", "javascript", "openai", "language"];

console.log(reverse("apple"))