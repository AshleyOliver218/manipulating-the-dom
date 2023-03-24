let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainTitle = document.querySelector("#main-title")
  mainTitle.textContent = "Welcome to the Dom"
  // Part 2
  let bodyYody = document.querySelector('body')
  bodyYody.style.backgroundColor = "lavender"

  // Part 3
  let domFavThings = document.querySelector("#favorite-things")

  domFavThings.removeChild(domFavThings.children[5])
  // Part 4
  const specialTitles = document.querySelectorAll('.special-title')
  specialTitles.forEach(function (title) {
    title.style.fontSize = "2rem"
  })

  // Part 5

  const pastRaces = document.querySelector('#past-races')
  pastRaces.removeChild(pastRaces.children[3])


  // Part 6
  let newRace = document.createElement('li')
  newRace.textContent = "Atlanta"
  pastRaces.appendChild(newRace)

  // Part 7
  let main = document.querySelector('.main')
  let blogPost = document.createElement('div')
  blogPost.classList.add('blog-post', 'purple')
  main.appendChild(blogPost)


  let blogTitle = document.createElement('h1')
  blogTitle.textContent = 'Atlanta'
  blogPost.appendChild(blogTitle)

  let newPTag = document.createElement('p')
  newPTag.textContent = "I raced down Spring St...the wrong way!"
  blogPost.appendChild(newPTag)

  // Part 8
  let randoQuote = document.querySelector('#quote-title')
  randoQuote.addEventListener('click', function (event) {
    randomQuote();
  })
  // Part 9
  let blogs = document.querySelectorAll('.blog-post');
  blogs.forEach(element => {
    element.addEventListener('mouseout', function (event) {
      element.classList.toggle('purple')
    });
    element.addEventListener('mouseenter', function (event) {
      element.classList.toggle('red');
    });
  });



});
