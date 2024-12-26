# Simple Node.js App with CI/CD

This is a minimal Node.js application that serves a single route, has unit tests, and is containerized with Docker. The repository includes a CI/CD pipeline set up using GitHub Actions.

## Features

- **Node.js** application with Express.
- **Unit Tests** written using Jest and Supertest.
- **Dockerized** for containerized deployment.
- **CI/CD Pipeline** using GitHub Actions.

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed (version 16+ recommended)
- [Docker](https://www.docker.com/) installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-node-ci-cd.git
   cd simple-node-ci-cd

   
2. Install dependencies:
   ```bash
   npm install

3. Run the unit tests with Jest:

   ```bash
   npm test

3. Build Docker Image:

   ```bash
   docker build -t simple-node-ci-cd .

4. Run Docker Container:

   ```bash
   docker run -p 3000:3000 simple-node-ci-cd
