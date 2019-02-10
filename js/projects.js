/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-undef */

const projectsDiv = document.getElementById('projects')

const projects = [
  {
    imgUrl: './img/projects/looplist-demo.gif',
    title: 'Loop List',
    description: `Single-page web app for reusable 
    checklists with a custom auto-save feature`,
    tech: `Node.js, Express, MongoDB, Mongoose, Handlebars, 
    Bcryptjs, Axios, JavaScript, CSS`,
    liveUrl: 'http://www.looplist.xyz/',
    gitUrl: 'https://github.com/nsafai/looplist',
  },
  {
    imgUrl: 'https://cdn.filestackcontent.com/Ci573SGQwe4CbpG3cKND',
    title: 'Tweet Generator',
    description: `A website that generates 25-word sentences in the style 
    of Alice in Wonderland and Harry Potter using n-th order Markov Chains`,
    tech: `Python, Flask, Gunicorn, HTML/CSS, Javascript`,
    liveUrl: 'http://tweetr.us/',
    gitUrl: 'https://github.com/nsafai/Tweet-Generator',
  },
  {
    imgUrl: 'https://cdn.filestackcontent.com/bstlxLr2Qq6CNhkCX5Vo',
    title: 'Rad Link',
    description: `A custom shortlink generator with analytics`,
    tech: `Ruby on Rails, PostgreSQL, Devise, CSS`,
    liveUrl: 'http://radl.ink/',
    gitUrl: 'https://github.com/nsafai/shortlink-api',
  },
  {
    imgUrl: 'https://cdn.filestackcontent.com/nJ89AiiRlqmioOjHTbKA',
    title: 'Keto Recipes',
    description: `A Keto recipe finder website that lets users save 
    their favorite recipes and turn them into grocery lists`,
    tech: `Node.js, Express, MongoDB, Mongoose, Handlebars, Bcryptjs, 
    JavaScript, CSS, Edamam API`,
    liveUrl: 'http://www.ketoeat.io/',
    gitUrl: 'https://github.com/Keto-Eating/Keto-Recipe-API',
  },
  {
    imgUrl: 'https://cdn.filestackcontent.com/ES15An1AS2K3WbBobu8B',
    title: 'Voter\'s Guide',
    description: `A nonpartisan voter guide website that lets 
    users save their votes and share them with others`,
    tech: `Node.js, Express, MongoDB, Mongoose, Handlebars, 
    Bcryptjs, JavaScript, SASS`,
    liveUrl: 'http://www.votersguide.co/',
    gitUrl: 'https://github.com/MakeItAwesome/Voters-Guide',
  },
  {
    imgUrl: 'https://cdn.filestackcontent.com/kqMoaEEQQXOL7dYMyAXQ',
    title: 'Ticket Bash',
    description: `Fight your parking ticket from your phone`,
    tech: `Swift, Python, Google API, Stripe API, Lob API`,
    liveUrl: 'http://nicolaisafai.com/ticketbashwebsite',
    gitUrl: 'https://github.com/nsafai/ticketbash-ios',
  },
]

projects.forEach((project) => {
  $(projectsDiv).append(`
<div class="project">
  <div class="project-img-container">
    <img class="project-img" src="${project.imgUrl}" alt="loop list screenshot">
  </div>
  <div class="project-txt">
    <h4 class="project-title">${project.title}</h4>
    <h5 class="project-tech">${project.tech}</h5>
    <p class="project-desc">${project.description}</p>
  </div> 
  <div class="project-buttons">
    <a href='${project.liveUrl}'>
      <button class="project-link">Try it</button>
    </a>
    <a href='${project.gitUrl}'>
      <button class="project-github">See code</button>
    </a>
  </div>
</div>`)
})
