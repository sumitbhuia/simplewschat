# Simple Websocket Chat 
A bare-bone implementation of a server-client chat room . <br>
Here <br>
client1 : Postman websocket connection messages<br>
client2 : Browser react frontend messages


![Screenshot 2024-08-17 at 3 36 19 AM](https://github.com/user-attachments/assets/a7009adb-4dbc-4553-8733-079d9e547d9f)

To setup locally
```
git clone git@github.com:sumitbhuia/simplewschat.git
```
Run frontend
```
cd frontend
npm install
npm run dev

```
Run websocket-node
```
npx tsc -b
node dist/index.js
```

Open postman 
cmd+N / ctrl+N ->websocket -> ws://localhost:8080 -> connect -> now you can send messages 
