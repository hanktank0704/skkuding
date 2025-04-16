import express from 'express';
// import fs from 'fs';
import fs from 'fs/promises';
import path from 'path';
// import os, { hostname } from 'os';
import os from 'os';
import url from 'url';
import { waitForDebugger } from 'inspector';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//process.cwd()

const app = express();
const PORT = 3000;

app.use(express.json());

// app.get('/', (req, res) => {
//     console.log(__dirname);
//     res.sendFile(path.join(__dirname, './assets/week1.html'))
// });

app.get('/api/os', (req, res) => {
    res.send({
        type: os.type(),
        hostname: os.hostname(),
        cpu_num: os.cpus.length,
        total_mem: os.totalmem()
    })
});

const usersFilePath = path.join(__dirname, './data/users.json');
app.post('/api/signup', (req, res) => {
  const { username, password, email } = req.body;

  // Load existing users
  const data = fs.readFile(usersFilePath, 'utf-8');
  // setTimeout(2000);
  const users = JSON.parse(data);

  // Add the new user
  users.push({ username, password, email });

  // Save to file
  fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  res.status(201).send({ message: 'User registered' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const data = await fs.readFile(usersFilePath, 'utf-8');
  const users = JSON.parse(data);

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send({ message: 'Login successful' });
  } else {
    res.status(401).send({ error: 'Invalid credentials' });
  }
});

app.get('/api/users', async (req, res) => {
  const data = await fs.readFile(usersFilePath, 'utf-8');
  const users = JSON.parse(data).map(({ username, email }) => ({ username, email }));
  res.send(users);
});


app.listen(PORT, '0.0.0.0', ()=> {
    console.log("server start");
})