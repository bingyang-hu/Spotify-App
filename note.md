+ an dependency needs to be installed under right directory. For instance, at first I installed nodemon inside client rather than under root then error pops up when I try to 'npm start' under root directory.
    - Solution: go back to root and 'npm install nodemon'
+ why we can use 'npm start' to start index.js?

+ 'Expressapp listenning at' .... vs. new web browser showing 'log into Spofity'.

+ gitignore file 


+ When I write codes like these:
```
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
```
CLIENT_ID is undifined, that's the reaon why web shows that missing CLIENT_ID. 

So I changed:
```
app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);
  
    const scope = 'user-read-private user-read-email';
  
    const queryParams = querystring.stringify({
      client_id: process.env.CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.REDIRECT_URI,
      state: state,
      scope: scope,
    });
```

Rather than client_id : CLIENT_ID, I use client_id :process.env.CLIENT_ID

+ When styling UI -The profile page:
Error: Unhandled Rejection (TypeError): Cannot read properties of undefined (reading 'data')

Solution:  In **Profile.js**
Wrong codes :
```javascript
const {userProfile} = await getCurrentUserProfile();
```

Correct:
```javascript
const userProfile = await getCurrentUserProfile();
```
