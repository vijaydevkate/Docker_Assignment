# Driver Taxi Trip REST APIs (Node.js + Docker)

This is a Node.js application that uses a PostgreSQL database for getting information about taxi trips of a driver. The application is designed to run inside Docker containers using Docker Compose.

## Prerequisites

Before you can run this application, you must have the following installed on your system:

- Docker
- Docker Compose

## Installation

To install and run the application, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the root directory of the cloned repository.
3. Run the following command to start the application:

```bash
docker-compose up
```

This will start both the Node.js application and the PostgreSQL database in separate containers, and connect them to the same network so that they can communicate with each other.

## Usage

Once the application is running, you can access it by opening a web browser and navigating to `http://localhost:3000`. This will display the application's homepage, where you can interact with the application as intended.

To stop the application, you can use the following command:

```bash
docker-compose down
```

This will stop and remove the containers created by Docker Compose.

## Configuration

The application's configuration can be modified by editing the `docker-compose.yml` file in the root directory of the repository. In this file, you can modify the environment variables for the Node.js application and the PostgreSQL database, as well as specify any additional configuration options for the containers.

## Conclusion

That's it! We now have a fully functional Node.js application with a PostgreSQL database running inside Docker containers.
