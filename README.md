# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png" alt="Node.js" height="23"/>&#8239;Simple CRUD API
Thanks for your attention to this project -  
just for testing custom API features.  
Made with Node.js 20.9.0 LTS.  
<img src="https://rolling-scopes-school.github.io/front42-JSFE2021Q1/presentation/z/front42.jpg" alt="logo" height="23"/>  
Clone this repository - for example with SSH: **git clone** git@github.com:front42/node.js-simple-crud-api.git  
Go to project directory and install dependencies - **npm i**  
Use these commands to enjoy, for example:
- npm run **start:dev** - runs project in development mode
- npm run **start:prod** - runs project in production mode building dist folder
- npm run **build** - builds project in dist folder

Then you can try **curl** or just **address bar** to check API adding **api/endpoints** to http://localhost:4000/  
But the most convenient way is to send your requests from **Postman**:
- GET http://localhost:4000/api/users - get all users from storage
- GET http://localhost:4000/api/users/{userId} - get user by id (uuid)
- POST http://localhost:4000/api/users - create new user and add it in storage
- PUT http://localhost:4000/api/users/{userId} - update existing user (all fields required)
- DELETE http://localhost:4000/api/users/{userId} - delete existing user from storage

User's required fields & types (set in your request **JSON**-body):
- username: string
- age: number
- hobbies: string[]