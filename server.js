var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  users: {
    admin: 'admin'
  },
  port: 8000
});

app.listen();
