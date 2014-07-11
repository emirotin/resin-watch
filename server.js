var tty = require('tty.js');
var spawn = require('child_process').spawn;

// Simple tty.js in app mode
var app = tty.createServer({
  shell: 'bash',
  users: {
    admin: 'admin'
  },
  port: process.env.PORT
});
spawn('/app/spawn_screen',[''],
			{
			    detached: true,
			    stdio: [ 'ignore', 'ignore', 'ignore' ]
			}
			);

app.listen();
