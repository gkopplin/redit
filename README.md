![keep it moving](https://i.imgur.com/wUsFUAS.png)

redit is a small slice of its namesake. The application has full functionality affording users the ability to interact with the entire redit community by creating unqiue posts and leaving/receiving peer feedback.


# Technologies Implemented

  [WebPacks](https://webpack.js.org)
  
  Webpack is a tool used in JavaScript applications which uses a dependency graph to map your project files. 
But more specifically it uses an entry point where relevant module webpacks are automatically determined. Webpack runs on JavaScript and JSON but can utilize loaders for interoperability with other languages. Installation is as easy as typing
    
     npm install --global webpack
     
  into the CLI. Along these same lines we ended up altering the config file, adding a key:value of watch:true, then 
  
    npm install webpack-cli
    
and 

    npx webpack
    
which conveniently allowed us to make changes on the fly speeding up the production cycle.

 
# Approach

The basic approach was keeping the project simple, efficient and clean...

* User Stories/Wireframes
  * [Pivitol tracker](https://www.pivotaltracker.com/n/projects/2400264)
  * [Wireframe](url linkhere)

* [Timeline](https://github.com/gkopplin/redit/wiki/Timeline)
* [Trello](https://trello.com/b/r4PQPK5U/redit) - individual assignments
---
* Authentication
  * **Top priority**
  * localStorage for session control
* CRUD 
* Layout/CSS
* Bonus
  * Hash (url)
  
  
