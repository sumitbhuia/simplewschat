# Simple WebSocket Chat

![Screenshot 2024-08-17 at 3 36 19 AM](https://github.com/user-attachments/assets/a7009adb-4dbc-4553-8733-079d9e547d9f)

This project is a simple implementation of a WebSocket-based chat application. It includes a React-based frontend and a Node.js WebSocket server, demonstrating real-time communication between clients. 

## Features
- **Server:** Handles WebSocket connections, broadcasts messages to all connected clients, and provides a basic HTTP route.
- **Client:** A React application that connects to the WebSocket server, sends and receives messages in real-time, and displays a chat history.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:sumitbhuia/simplewschat.git
    ```
2. Navigate to the project directory:
    ```bash
    cd simplewschat
    ```

### Running the Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm run dev
    ```

### Running the WebSocket Server

1. Compile the TypeScript code:
    ```bash
    npx tsc -b
    ```
2. Start the WebSocket server:
    ```bash
    node dist/index.js
    ```
3. The WebSocket server will be running on `ws://localhost:8080`.

### Testing the WebSocket Server

1. You can use Postman or any WebSocket client to test the server:
    - Open Postman and create a new WebSocket connection to `ws://localhost:8080`.
    - Send messages and observe them being broadcasted to other connected clients.

### How It Works

- **Server:** The Node.js server listens for WebSocket connections on port 8080. When a client sends a message, the server broadcasts it to all other connected clients.
- **Client:** The React app connects to the WebSocket server and provides a chat interface. Users can send messages, which are sent to the server and broadcasted back to all connected clients.

### Example Usage

- **Client 1:** Connect using Postman or any WebSocket client.
- **Client 2:** Connect using the React frontend in the browser.
- Both clients can send and receive messages in real-time.

