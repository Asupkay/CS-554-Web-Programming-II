const constructorMethod = app => {
  app.get('/', (req, res) => {
    res.render('portfolio/homepage', {products: [
      {
        id: 1,
        name: "Wonderball",
        img: "/public/img/wonderball.jpg",
        description: "Milk chocolate sphere",
        details: "A cornerstone of the American diet. The chocolate wonderball is a sphere that cannot be beat. I won 2 awards for it including the 'Great job' award and 'Smord Ford Award'.",
      },
      {
        id: 2,
        name: "Notball",
        img: "/public/img/notball.jpg",
        description: "Not a milk chocolate sphere",
        details: "This was not a cornerstone of the american diet. The not chocolate ball is a sphere that was beat by many things. It did not win any awards.",
      },
      {
        id: 3,
        name: "Meatball",
        img: "/public/img/meatball.jpg",
        description: "This is a standard meatball",
        details: "Little do people know that the meatball is standard due to my invention. The addition of spaghetti was not my idea and I think the adding of spaghetti is not what should have been done.",
      },
      {
        id: 4,
        name: "Notmeatball",
        img: "/public/img/notmeatball.jpg",
        description: "This is not a standard meatball",
        details: "Is there meat in this? I don't know I just made it. Not Meatball of the year 1986.",
      },
      {
        id: 5,
        name: "Basketball",
        img: "/public/img/basketball.jpg",
        description: "A bouncy ball",
        details: "I did not invent the game of basketball I just invented the ball. Overall, the fact that it was adopted for the game is an insult to the craftmanship of the ball.",
      },
      {
        id: 6,
        name: "Notbasketball",
        img: "/public/img/notbasketball.jpg",
        description: "Not a bouncy ball",
        details: "This ball has not been adopted for any games because it doesn't do anything in reality it is just a polished off rock like a bowling ball but not good at rolling.",
      },
      {
        id: 7,
        name: "Football",
        img: "/public/img/football.jpg",
        description: "A throwing ball",
        details: "This ball can be thrown a variety of distances, short, medium, far, very far, a short-far, long-far, far with a side of mash potatoes. Lemon cream pie. ",
      },
      {
        id: 8,
        name: "Notfootball",
        img: "/public/img/notfootball.jpg",
        description: "DO NOT THROW THIS BALL",
        details: "NO BALL, DO NOT THROW, I REPEAT DO NOT THROW THIS BALL, THROWING THIS BALL COULD RESORT IN A VARIETY OF INJURIES. *REDACTED*",
      },
      {
        id: 9,
        name: "Blenderball",
        img: "/public/img/blenderball.jpg",
        description: "Will it blend?",
        details: "It will blend because it is a blender ball. If you have to blend this is the ball for you. Blend king 2018.  'I got nothing, it blends' - Hovig",
      },
      {
        id: 10,
        name: "Notblenderball",
        img: "/public/img/notblenderball.jpg",
        description: "Will it not blend!",
        details: "No, it won't blend how could you think it would blend that is a bit ridiculous. If you have 10 toes this will not blend them.",
      }
    ]});
  }); 

  app.use('*', (req,res) => {
    res.status(404).send('Not found');
  });
};

module.exports = constructorMethod;
