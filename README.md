# FakeAPI
RESTful API with ExpressJS

## Getting Started
``` git clone https://github.com/masirsyaad/FakeAPI.git```

## Change Database
change your database in `con.js`

```
...
var con = mysql.createConnection({
  host: "hostofdatabase",
  user: "userofdatabase",
  password: "passwordofdatabase",
  database: "nameofdatabase"
});
...
```

## Run
just type this on your terminal
```
node server.js
```
