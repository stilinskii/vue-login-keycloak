const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

const members = [
  { id: 3, name: '하영', loginId: 'jenn', loginPw: '1234' },
  { id: 4, name: '하영2', loginId: 'jenn2', loginPw: '1234' },
];

// parse application/json
app.use(bodyParser.json());

app.get('/api/account', (req, res) => {
  res.send(401);
});

app.post('/api/account', (req, res) => {
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;

  const member = members.find(
    (m) => m.loginId === loginId && m.loginPw === loginPw
  );

  if (member) {
    res.send(member);
  } else {
    res.send(404);
  }
  console.log(loginId, loginPw);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
