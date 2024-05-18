# PhotoTagging-Frontend
This PhotoTagging project acts as the popular puzzle game, Where's Waldo?, only as a web app. The user is presented with 3 characters that they have to find in a scene that is very crowded with other random characters. They are timed and asked for their username if they wish to be placed on a global leaderboard. The purpose of building this project was to get experience on building my own API to handle the character selection and timing processes. Through this, I learned how to pass a JSON webtoken from my Node.js backend to this React.js frontend which contained the time it took for the user to complete the game. I also learned how to store the user info in MongoDB in order to display it on the leaderboard.  
[Live Preview](https://photo-tagging-frontend.vercel.app/)

## Features
* Magnify effect on picture hover
* User timed for game completion
* Leaderboard stores users' times

## Installation
* First run the backend -> [Instructions](https://github.com/amora7741/PhotoTagging-Backend)
* Clone the repository using `git clone`
* `cd` into the PhotoTagging-Frontend directory
* Create a .env file in the root of the project, and add the variable VITE_BASE_API containing the backend url, with the default local url being http://localhost:3000, i.e `VITE_BASE_API="http://localhost:3000"`.
* Run `npm i` to install the required dependencies
* Run `npm run dev` to start the project and navigate to `http://localhost:3000` to see the project in action 
