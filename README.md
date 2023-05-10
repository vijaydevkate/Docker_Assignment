# Docker_Assignment

This project is a web application that consists of both a Node.js backend and an Angular frontend. The Node.js backend is containerized using Docker Compose, while the Angular frontend is built using the Angular CLI.

## Getting Started

To get started with this project, you will need to have Node.js and the Angular CLI installed on your machine. You will also need to have Docker and Docker Compose installed if you want to run the backend in a container.

### Installing Dependencies

To install the dependencies for the Node.js backend, run the following command:

```
cd server
npm install
```

To install the dependencies for the Angular client, run the following command:

```
cd client
npm install
```

### Running the Application Locally

To run the application locally, first start the Node.js backend using Docker Compose. To do this, run the following command:

```
cd server
docker-compose up
```

This will start the backend container and expose it on port 3000. You can then start the Angular frontend by running the following command in a separate terminal window:

```
cd client
ng serve
```

This will start the frontend server and expose it on port 4200. You can then access the application by navigating to http://localhost:4200 in your web browser.
