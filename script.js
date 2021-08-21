// an array of data we want to render to the DOM
const week1 = [
    {
      title: "CSS + JS Clock",
      summary:
        "whattimeisitrightnow.com",
      image: "Images/Clock.PNG",
      week: "Week 1",
      link: "https://mjow1999.github.io/FAC22/Week1/JS30/CSS%20+%20JS%20Clock/",
    },
    {
      title: "JavaScript Drum Kit",
      summary:
        "Get ready to rock with the JS Drum Kit!",
      image: "https://source.unsplash.com/400x300?1",
      week: "Week 1",
      link: "https://mjow1999.github.io/FAC22/Week1/JS30/JavaScript%20Drum%20Kit/",
    },
  ];
  const week2 = [
    {
      title: "Playing with CSS Variables + JS",
      summary:
        "Time to experiment!",
      image: "Images/playVariables.PNG",
      week: "Week 2",
      link: "https://mjow1999.github.io/FAC22/Week2/JS30/Playing-with-CSS-Variables-JS/",
    },
    {
      title: "Array Cardio 1",
      summary:
        "Time to get moving with Array Cardio 1!",
      image: "https://source.unsplash.com/400x300?1",
      week: "Week 2",
      link: "https://mjow1999.github.io/FAC22/Week2/JS30/Array-Cardio-1/",
    },
  ];
  const week3 = [
    {
        title: "Array Cardio 2",
        summary:
          "We can't just stop at one. It's cardio time!",
        image: "https://source.unsplash.com/400x300?0",
        week: "Week 3",
        link: "https://mjow1999.github.io/FAC22/Week3/JS30/Array-Cardio-2/",
      },
      {
        title: "Flex Image Gallery",
        summary:
          "See my Euros themed Flex Image Gallery",
        image: "Images/Flex-Gallery.PNG",
        week: "Week 3",
        link: "https://mjow1999.github.io/FAC22/Week3/JS30/Flex-Image-Gallery/",
      },
      
  ];
  const week4 = [
    {
      title: "14 Must Know Dev Tools Tricks",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 4",
      link: "https://mjow1999.github.io/FAC22/Week4/JS30/14_Dev_Tools/",
    },
    {
      title: "Hold Shift to Check Multiple Checkboxes",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "Images/Cboxes.PNG",
      week: "Week 4",
      link: "https://mjow1999.github.io/FAC22/Week4/JS30/Hold_Shift_Cboxes/",
    },
  ];
  const week5 = [
    {
      title: "Sorting Bands",
      summary:
        "Let's sort this out!",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 5",
      link: "https://mjow1999.github.io/FAC22/Week%205/JS30/Sorting_Band_Names/",
    },
  ];
  const week6 = [
    {
      title: "MEA Robotics",
      summary:
        "Paired Agency Project with Elena",
      image: "Images/MEA Robotics.PNG",
      week: "Week 6",
      link: "https://fac22.github.io/Michael-Elena-Agency/",
    },
    {
      title: "Fetch Workshop",
      summary:
        "Fetching Github Usernames!",
      image: "Images/ghuser.jpeg",
      week: "Week 6",
      link: "https://mjow1999.github.io/FAC22/Week6/Fetch/",
    },
    {
      title: "Promise Practice 1",
      summary:
        "Returning traffic light colours after a delay!",
      image: "Images/traffic-light.jpeg",
      week: "Week 6",
      link: "https://mjow1999.github.io/FAC22/Week6/Promise/challenge-1/",
    },
    {
      title: "Promise Practice 2",
      summary:
        "Playing with the Pokemon API!",
      image: "Images/poke.jpeg",
      week: "Week 6",
      link: "https://mjow1999.github.io/FAC22/Week6/Promise/challenge-2/",
    },
  ]

  const week7 = [
    {
      title: "HTML Forms",
      summary:
        "HTML Forms Workshop!",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 7",
      link: "https://mjow1999.github.io/FAC22/Week7/HTML-Forms/",
    },
    {
      title: "Real-world fetch",
      summary:
        "Choose your Pokemon with the Pokemon API",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 7",
      link: "https://mjow1999.github.io/FAC22/Week7/RW-Fetch/",
    },
    {
      title: "Magic the Gathering API",
      summary:
        "Get your booster set with the MTG API site!",
      image: "Images/mtg.jpeg",
      week: "Week 7",
      link: "https://fac22.github.io/michaelAlexAPI/",
    },
  ]

  const week8 = [
    {
      title: "Testing",
      summary:
        "Starting our learning of testing!",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 8",
      link: "https://mjow1999.github.io/FAC22/Week8/Testing/",
    },
    {
      title: "Unit Testing",
      summary:
        "More testing",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 8",
      link: "https://mjow1999.github.io/FAC22/Week8/Unit-Testing/",
    },
  ]

  const week9 = [
    {
      title: "Integration Testing",
      summary:
        "Even more testing, this time with a calculator!",
      image: "Images/calculator.jpeg",
      week: "Week 9",
      link: "https://mjow1999.github.io/FAC22/Week9/Integration-Testing/",
    },
  ]

  
  const containerElement1 = document.querySelector("#projects");
  
  // this function uses the <template> defined in the HTML
  // it'll only get longer if we need to add more dynamic properties
  function createCardUsingTemplate(article) {
    const { title, summary, image, week, link } = article;
    // get the template for articles (from the HTML)
    const template = document.querySelector("#articleTemplate");
    // clone the content of the template (returns a DocumentFragment)
    const domFragment = template.content.cloneNode(true);
    // we only need to add the dynamic properties inside the fragment
    // since all the static ones (e.g. styling classNames) are set in the template
    domFragment.querySelector("h3").textContent = title;
    domFragment.querySelector("img").src = image;
    domFragment.querySelector("p").textContent = summary;
    domFragment.querySelector("b").textContent = week;
    domFragment.querySelector("a").href = link;
    // put the fragment onto the page
    containerElement1.appendChild(domFragment);
  }

  const tilContainer = document.querySelector("#TIL");

  const til1 = [
    {
      title: "for..of/for..in loops",
      summary: "Learning about different types of for loops",
      image: "Images/loop.jpeg",
      week: "Week 1",
      link: "https://twitter.com/michWills99/status/1407055829069664260?s=20"
    },
    {
      title: "Generators",
      summary: "Playing with the Pokemon API!",
      image: "Images/Generators Example.PNG",
      week: "Week 1",
      link: "https://twitter.com/michWills99/status/1408535637389684744?s=20",
    },
    {
      title: "Lighthouse",
      summary: "Accessibility tool Lighthouse",
      image: "Images/Lighthouse example.PNG",
      week: "Week 1",
      link: "https://twitter.com/michWills99/status/1407474917487095811?s=20"
    },
    {
      title: "Slice method",
      summary: "Interesting applications of the slice() method!",
      image: "",
      week: "Week 1",
      link: "https://twitter.com/michWills99/status/1409900498908594182?s=20"
    },
  ]
  const til2 = [
    {
      title: "None in JavaScript",
      summary: "Creating a none() function by negating some()!",
      image: "Images/none.PNG",
      week: "Week 2",
      link: "https://twitter.com/michWills99/status/1410708270327676931?s=20"
    },
    {
      title: "Join with Reduce",
      summary: "Creating the join function with reduce!",
      image: "Images/joinReduce.PNG",
      week: "Week 2",
      link: "https://twitter.com/michWills99/status/1411819924704665602?s=20"
    },
    {
      title: "ARIA Labels",
      summary: "Learning the importance of ARIA Labels to accessibility.",
      image: "Images/ARIA-example.PNG",
      week: "Week 2",
      link: "https://twitter.com/michWills99/status/1412133992720121870?s=20"
    },
    {
      title: "Finding values with Sets",
      summary: "Using has() in Sets to find a specific value",
      image: "Images/incSet2.PNG",
      week: "Week 2",
      link: "https://twitter.com/michWills99/status/1412378348018442254?s=20"
    },
  ]
  const til3 = [
    {
      title: "JSON stringify and parse",
      summary: "Going on a round trip with JSON!",
      image: "Images/JSON.PNG",
      week: "Week 3",
      link: "https://twitter.com/michWills99/status/1414002349077667844?s=20"
    },
    {
      title: "Set Union",
      summary: "Exactly what it says on the tin",
      image: "Images/setUnion1.PNG",
      week: "Week 3",
      link: "https://twitter.com/michWills99/status/1414646156022452228?s=20"
    },
    {
      title: "Property order",
      summary: "Ordering doesn't always go to plan",
      image: "Images/propOrder2.PNG",
      week: "Week 3",
      link: "https://twitter.com/michWills99/status/1414979135957577745?s=20"
    },
  ]
  const til4 = [
    {
      title: "%c style tool",
      summary: "Learnt that you can style elements in JavaScript!",
      image: "Images/styleResult.PNG",
      week: "Week 4",
      link: "https://twitter.com/michWills99/status/1416485700678164496?s=20"
    },
  ]
  const til5 = [
    {
      title: "Character Sets",
      summary: "Interesting character sets in Regex!",
      image: "Images/char-sets.PNG",
      week: "Week 5",
      link: "https://twitter.com/michWills99/status/1418688312013905920?s=20"
    },
    {
      title: "Reference vs Copy",
      summary: "Ref vs Copy. Let's see who wins!",
      image: "Images/Ref.PNG",
      week: "Week 5",
      link: "https://twitter.com/michWills99/status/1419341891062095872?s=20"
    },
  ]
  const til6 = [
    {
      title: "setTimeout interval 0",
      summary: "Let's see what happens with an interval of 0!",
      image: "Images/setTimeout0.PNG",
      week: "Week 6",
      link: "https://twitter.com/michWills99/status/1420730551225442312?s=20"
    },
    {
      title: "Resolve can be rejected",
      summary: "Promise.resolve can give rejected promises!!",
      image: "Images/promise.resolve can be rejected.PNG",
      week: "Week 6",
      link: "https://twitter.com/michWills99/status/1422635162559565829?s=20"
    },
  ]
  const til7 = [
    {
      title: "Promise.all",
      summary: "We always keep all of our promises!",
      image: "Images/Promise.all example.PNG",
      week: "Week 7",
      link: "https://twitter.com/michWills99/status/1424646955809099779?s=20"
    }
  ]
  const til9 = [
    {
      title: "Sleep",
      summary: "Time to learn the importance of sleep",
      image: "Images/sleep.jpeg",
      week: "Week 9",
      link: "https://twitter.com/michWills99/status/1429178086503952384?s=20"
    }
  ]
  
  function createTILUsingTemplate(article) {
    const { title, summary, image, week, link } = article;
    const template = document.querySelector("#tilTemplate");
    const domFragment = template.content.cloneNode(true);
    domFragment.querySelector("h3").textContent = title;
    domFragment.querySelector("img").src = image;
    domFragment.querySelector("p").textContent = summary;
    domFragment.querySelector("b").textContent = week;
    domFragment.querySelector("a").href = link;
    domFragment.querySelector("a").target = "_blank";
    
    tilContainer.appendChild(domFragment);
  }

  week9.forEach(createCardUsingTemplate)
  week8.forEach(createCardUsingTemplate)
  week7.forEach(createCardUsingTemplate)
  week6.forEach(createCardUsingTemplate)
  week1.forEach(createCardUsingTemplate);
  week2.forEach(createCardUsingTemplate);
  week3.forEach(createCardUsingTemplate);
  week4.forEach(createCardUsingTemplate);
  week5.forEach(createCardUsingTemplate);

  til1.forEach(createTILUsingTemplate);
  til2.forEach(createTILUsingTemplate);
  til3.forEach(createTILUsingTemplate);
  til4.forEach(createTILUsingTemplate);
  til5.forEach(createTILUsingTemplate);
  til6.forEach(createTILUsingTemplate);
  til7.forEach(createTILUsingTemplate);
  til9.forEach(createTILUsingTemplate);
