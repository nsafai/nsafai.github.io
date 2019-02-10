/* eslint-disable semi */
/* eslint-disable no-undef */

const timelineDiv = document.getElementById('timeline')

const experiences = [
  {
    dates: '2018—Present',
    title: 'Learning Web Development',
    description: `I am currently studying Applied Computer Science w/ a focus on full-stack 
    web development at Make School, in San Francisco. I'm also working 
    part-time on special projects directly with Make School co-founder, 
    Ashu Desai.`,
  },
  {
    dates: '2016-18',
    title: 'Building Education Tools',
    description: `As Make School's Head of Product, I oversaw the design and development of 
    a suite of internal and external products, including our own Application Management System, 
    Student Information System and Learning Management System. I was also responsible for our
    marketing pages, and integration with third-party services, such as Hubspot, Amplitude, 
    Mouseflow, Mixpanel, Segment, Zapier, etc.`,
  },
  {
    dates: '2015-16',
    title: 'Creating Learning Experiences',
    description: `As Make School's Head of Summer Academy, I oversaw Make School's Summer Academy, 
    an 8-week summer program where 400 students from 35 different countries learned iOS development 
    and launched their own app or game to the App Store. I oversaw Admissions, Marketing, 
    Curriculum development, Hiring, Instructor Training, Operations and Expansion to 13 locations 
    in 5 timezones. During the duration of the program, I was indirectly managing 45 iOS & 400
    students. This program has a 4.8 to 5.0 star rating and an 81 NPS (Net Promoter Score). 
    Alumni attend top colleges and work at companies like Tesla, Facebook and Apple.`,
  },
  {
    dates: '2014-15',
    title: 'Getting our Name Out There',
    description: `As Make School's Head of Marketing, I led the development of Make School's first 
    independent team, responsible for marketing and admissions. Generated 20k+ leads in less than 1 year. 
    Built first partnerships with local CS teachers & related events. Setup transactional emails, 
    drip campaigns, automated interview scheduling, e-signatures, customer service, 
    ad campaigns (incl. retargeting), analytics, attribution reports and marketing reports.`,
  },
  {
    dates: '2013-14',
    title: 'Teaching Myself Hireable Skills',
    description: `After I graduated, I spent 9 months teaching myself how to code, while I worked at as 
    a marketing intern at a local Santa Babara startup that oversaw music artist's digital presence, 
    such as Jack Johnson.`,
  },
  {
    dates: '2009-13',
    title: 'Learning About the World',
    description: `I attended UC Santa Barbara as a BioPsychology major in the Brain Sciences Department. 
    I also participated in the Technology Management Program, and New Venture Competition where I was a 
    semi-finalist.`,
  },
]

experiences.forEach((experience) => {
  const index = experiences.indexOf(experience)
  const expId = `exp-${index}`
  $(timelineDiv).append(`
    <div class="container" id=${expId}>
      <div class="content">
        <h3>${experience.dates}</h3>
        <h4>${experience.title}</h4>
        <p>${experience.description}</p>
      </div>
    </div>`)
  if (index % 2 === 0) {
    document.getElementById(expId).classList.add('left');
  } else {
    document.getElementById(expId).classList.add('right');
  }
})
