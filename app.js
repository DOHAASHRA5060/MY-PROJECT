document.addEventListener("click", function () {
  let quote = document.querySelector("article p");
  let author = document.querySelector(".author");
  const btn = document.querySelector(".btn span");
  const body = document.querySelector("body");
  let content = [
    {
      quote:
        "“However difficult life may seem, there is always something you can do and succeed at.”",
      author: "Stephen Hawking",
      backGroundImage: "./images/image1.jpg",
    },
    {
      quote:
        "“People begin to become successful the minute they decide to be.”",
      author: "Harvey MacKay",
      backGroundImage: "./images/image2.jpg",
    },
    {
      quote:
        "“Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.”",
      author: "Amelia Earhart",
      backGroundImage: "./images/image3.jpg",
    },
    {
      quote: "“It always seems impossible until it’s done.”",
      author: "Nelson Mandela",
      backGroundImage: "./images/image4.jpg",
    },
    {
      quote:
        "“When something is important enough, you do it even if the odds are not in your favor.”",
      author: "Elon Musk",
      backGroundImage: "./images/image5.jpg",
    },
    {
      quote:
        "“Success usually comes to those who are too busy to be looking for it.” ",
      author: "Henry David",
      backGroundImage: "./images/image6.jpg",
    },
    {
      quote:
        "“Talent alone won’t make you a success. Neither will being in the right place at the right time, unless you are ready.”    ",
      author: "Johnny Carson",
      backGroundImage: "./images/image7.jpg",
    },
    {
      quote:
        "“The achievements of an organization are the results of the combined effort of each individual.” ",
      author: "Vince Lombardi",
      backGroundImage: "./images/image8.jpg",
    },
    {
      quote:
        "“There is no such thing as a self-made man. You will reach your goals only with the help of others.”",
      author: "George Shinn",
      backGroundImage: "./images/image9.jpg",
    },
    {
      quote: "“Success is not a good teacher, failure makes you humble.”",
      author: "Shah Rukh Khan",
      backGroundImage: "./images/image10.jpg",
    },
    {
      quote:
        "“The ladder of success is best climbed by stepping on the rungs of opportunity.”",
      author: "Ayn Rand",
      backGroundImage: "./images/image11.jpg",
    },
    {
      quote:
        "“There is no shortcut to achievement. Life requires thorough preparation – veneer isn’t worth anything.”   ",
      author: "George Washington Carver",
      backGroundImage: "./images/image12.jpg",
    },
  ];

  btn.addEventListener("click", swapQuotes());

  function swapQuotes() {
    const random = Math.floor(Math.random() * content.length);
    quote.textContent = content[random].quote;
    author.textContent = content[random].author;
    const background = content[random].backGroundImage;
    console.log(background);
    body.style.background = "url('" + background + "')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center center";
  }
});
