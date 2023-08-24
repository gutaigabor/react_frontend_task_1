# Task

Image to follow with styling: ./assets/Example.PNG

• The website should be responsive and built with ReactJS functional components and Typescript
• Data should be downloaded asynchronously from a mock server - serving json files (any technology)
• The code should be placed in any repository along with instructions on how to run the project.
• Time limit: 4 hours
• [Optional] Usage of Chakra UI will be a plus

# Install and run

## Mock server

### Install

```
cd ./mock_api_server

npm install -g json-server
```

### Run

```
json-server --watch data.json --port 3001
```

## Frontend

### Install
```
cd ./frontend

npm install
```

### Run

```
npm run dev
```

# Test data JSON file

- location: './mock-api-server/data.json'
- after change in file, mock api server restart required

# Unit Tests

There is an example unit test: './frontend/tests/App.test.tsx'

```
cd ./frontend

npm run test
```

# Environment

./frontend/.env: .env file is uploaded into git repo only because of the test task nature 