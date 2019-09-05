/*
 * Copyright [2019] B. Müller
 * SPDX-License-Identifier: MIT
 */
 
const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({
  secure: false,
  //authMethods: ['PLAIN', 'LOGIN'],
  authOptional: true,
  //allowInsecureAuth: true,

  onData(stream, session, callback) {
    stream.pipe(process.stdout); // print message to console
    stream.on("end", callback);
  }

});

server.on("error", err => {
  console.log("Error %s", err.message);
});

server.listen(25);