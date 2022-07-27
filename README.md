# mongodbcrud

## Mongo db mounted with docker-compose and auto filter function

- I use ubuntu 20.04 with docker as sudo, if it's not your case, may be necessary put the word 'sudo' before commands.
- For the same reason, may be neessary some others lighty changes to use babel in windows.
- in the project you can find a .env_example file, please rename it as .env file in your project, here you can find:
  MONGODB_URI=mongodb://localhost/your_db_name
  PORT=3000
  these environment variables are use for security, you can change the name "your_db_name" by your prefer name and the same for the port number ( 3000 by default)

### Mongo db container build:

To run this project we need :
1- First build a docker image with mongo db, we made this with the command inside the folder mongodb_server: `docker-compose up -d`
![docker-build.png](/images/docker-build.png "docker-build.png")<br>
2- With this command, docker compose will build the image and run the container with mongo db .We can check that container is runing with command: `docker ps`
![docker-container.png](/images/docker-container.png "docker-container.png")<br>
3- Afther that we can check that mongo is runing, with the command : `docker exec -it #container bash` we enter inside the container, and the put `mongo` to run mongodb:
![mongo.png](/images/mongo.png "mongo.png")<br>
4-finally with the command `show dbs` we obtain:
![showdatabases.png](/images/showdatabases.png "mongo.png")<br>

### Runing the App:

- We need install the modules to this project, with the command: `npm install`, we install all the modules detailed in _package.json_ file
  1- Run the command: `npm run dev` nodejs up the server on the local host : _http://localhost:3000/_ (by default)
  ![local-host-initial.png](/images/local-host-initial.png "local-host-initial.png")<br>
  we don't have any item in the database, therefore, the next step is load data.<br> 2- click the button "modify data", and then put a item and value, you can put anything, in my case, I put fruits:
  ![add_data.png](/images/add_data.png "add_data.png").
  You can add some items, and after each you will be redirect to the main page of the project.
  3- with some items loaded in the db, now you can find and "filter" automatically items in base a the letters that you input (it's not necessary click the button "buscar"), and you can edit or delete items too.
  To construct this project I used Nodejs and Express as framework, the main files are:
- Mongodb_server, here you can find the docker-compose.yml (run docker-compose commands inside this folder)
- In src folder we have controllers ( tasks to will be realize in each routes), models(data models to will be used in mongodb), routes(routing), and views(templates managed by handlebars).
- In _app.js_ file we import differents modules and other files too( like express, handlebars, morgan or routing file) and configure handlebars.
- In _config.js_ we export the environment variables ( used in the db connection and port).
- In _database.js_ we made the connection to the db and use the env variables ( this is for security of the connection).
- In _index.js_ we import differents modules and files and turn on the server.
- The file .babelrc is necessary to use babel, this module permit us use ECMAScript 2015+ code and convert this into backwards compatible version of JavaScript in current and older browsers.
