# My Express App

This is a simple Express server application scaffolded with no endpoints, listening on port 8001. 

## Project Structure

```
my-express-app
├── src
│   └── app.js          # Entry point of the application
├── .gitignore          # Specifies files to be ignored by Git
├── Dockerfile          # Dockerfile to build the application image
├── package.json        # Configuration file for npm
├── yarn.lock           # Locks the versions of dependencies
└── README.md           # Documentation for the project
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-express-app
   ```

2. **Install dependencies:**

   This project uses Yarn. Make sure you have Yarn installed, then run:

   ```bash
   yarn install
   ```

3. **Run the server:**

   To start the server with automatic code reloading, use:

   ```bash
   yarn start
   ```

   The server will be running on [http://localhost:8001](http://localhost:8001).

## Docker

To build and run the application using Docker, follow these steps:

1. **Build the Docker image:**

   ```bash
   docker build -t my-express-app .
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 8001:8001 my-express-app
   ```

The server will be accessible at [http://localhost:8001](http://localhost:8001) from your host machine.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.