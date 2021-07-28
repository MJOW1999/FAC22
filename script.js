// an array of data we want to render to the DOM
const week1 = [
    {
      title: "CSS + JS Clock",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 1",
    },
    {
      title: "JavaScript Drum Kit",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?1",
      week: "Week 1",
    },
  ];
  const week2 = [
    {
      title: "Playing with CSS Variables + JS",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 2",
    },
    {
      title: "Array Cardio 1",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?1",
      week: "Week 2",
    },
  ];
  const week3 = [
    {
        title: "Array Cardio 2",
        summary:
          "This is the Project from the JavaScript30 Course!",
        image: "https://source.unsplash.com/400x300?0",
        week: "Week 3",
      },
      {
        title: "Flex Image Gallery",
        summary:
          "See my Euros themed Flex Image Gallery",
        image: "https://source.unsplash.com/400x300?1",
        week: "Week 3",
      },
      {
        title: "so many articles",
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, omnis!",
        image: "https://source.unsplash.com/400x300?2",
        week: "Week 3",
      },
  ];
  const week4 = [
    {
      title: "14 Must Know Dev Tools Tricks",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 4",
    },
    {
      title: "Hold Shift to Check Multiple Checkboxes",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?1",
      week: "Week 4",
    },
  ];
  const week5 = [
    {
      title: "Reference vs Copy",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?0",
      week: "Week 5",
    },
    {
      title: "Sorting Bands",
      summary:
        "This is the Project from the JavaScript30 Course!",
      image: "https://source.unsplash.com/400x300?1",
      week: "Week 5",
    },
    {
      title: "MEA Robotics",
      summary: "Paired agency project with Elena",
      image: "#",
      week: "Week 5"
    }
  ];

  const containerElement1 = document.querySelector("#container1");
  
  // this function uses standard createElement to do DOM manipulation
  // it'll only get longer as we add more stuff to the card element 🙃
  
  const containerElement2 = document.querySelector("#projects");
  
  // this function uses the <template> defined in the HTML
  // it'll only get longer if we need to add more dynamic properties
  function createCardUsingTemplate(article) {
    const { title, summary, image, week } = article;
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
    // put the fragment onto the page
    containerElement2.appendChild(domFragment);
  }
  
  
  week1.forEach(createCardUsingTemplate);
  week2.forEach(createCardUsingTemplate);
  week3.forEach(createCardUsingTemplate);
  week4.forEach(createCardUsingTemplate);
  week5.forEach(createCardUsingTemplate);