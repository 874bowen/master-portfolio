export const PROJECTS = [
    {
      id: 0,
      title:'Restaurant Con Fusion',
      subtitle: 'React.js',
      image: './images/react.jpg',
      category: 'frontend',
      link: "https://reactbootcamp.com",
      
      description:'This is a project I made after learning React.js, It is a restaurant application displaying menu, reserve table functionality, etc. It is the best front-end project I\'ve ever built. It wraps many of the React functionality from components to routes to Redux Forms to client-server communication. Fully working locally a link to the project is provided, but won\'t fetch data as I am still learning how to deploy it fully.',
      featured: false,     
      },
   {
      id: 1,
      title:'Code Snippets App',
      subtitle: 'Djangorestframework',
      image: './images/djangorest.jpg',
      category: 'backend',
      link: "https://reactbootcamp.com",
      
      description:'This is a Code snippets app that performs the basic CRUD functionality. It purely connects to the database. GET endpoint has a public access, the POST, PUT/PATCH, DELETE have restricted access requring access tokens and passwords. This was the project I did after having finished Django Project.',
      featured: false,
      },
   {
      id: 2,
      title:'Ads Management',
      subtitle: 'Django',
      image: './images/dj-ads.jpg',
      category: 'backend',
      link: "https://reactbootcamp.com",
      shortdesc: "This is a Django project that involves the management of advertisements one can post a photo of the advert give it a title and a price for the item in the advert ...",
      description:'This is a Django project that involves the management of advertisements one can post a photo of the advert give it a title and a price for the item in the advert, One can post comments for that advert view all comments, also delete his/her comment only. It demonstrates many to many relationship in databases.',
      featured: true,
      },
   {
      id: 3,
      title:'Con Fusion Restaurant',
      subtitle: 'Bootstrap-UI',
      image: './images/bootstrap.jpg',
      category: 'backend',
      link: "https://reactbootcamp.com",
      
      description:'This is a bootstrap version of the Restaurant confusion app that I made before venturing into react.js library. Gives a good User interface with nice user experience. It is the root of my front-end development skills.',
      featured: false,                     
    },
    {
        id: 4,
        title:'Social-Media Posts',
        subtitle: 'FastAPI',
        image: './images/fastapi.jpg',
        category: 'backend',
        link: "https://reactbootcamp.com",
        
        description:'This is a Social media-type API project that uses the FastApi . It deals with social media posts, it demostates my understanding of the Object Relational Mapping and various database relationships using postgreSQL. It uses JWT for token aurhentication with expiry after some time. This project isn\'t fully completed and resides on my local machine for the time being.',   
        featured: false,                  
      }
]