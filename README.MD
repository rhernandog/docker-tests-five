# Visit Count App

### Description
Simple example that uses two different containers that run a Node-Express App with a redis server in order to set, read and update data to the container running redis server.

We use Docker Compose in order to create containers of both images and be able to connect the Node-Express app to the redis server. The data in the redis server is updated from the Node app.

### Important Notes
- Use the `docker-compose.yml` file to create the yaml config in order to create and run the containers of both images at the same time and allow communication between them. Run `docker-compose up --build` to build the images and create the containers of each image. If a change is made in the yaml file we can run `docker-compose up` since the files in the app are not updated
- We can run Docker Compose in the background using the detach flag: `docker-compose up -d`. This allows us to keep using the command line while the containers are running in the background. Later we can stop all the containers by running: `docker-compose down`.
- We can mix the flags in the `docker-compose` command to build and run in the background: `docker-compose up -d --build`.
