# FakeAPI
RESTful API with ExpressJS

## Getting Started

### Clone Repository
```
$ git clone https://github.com/masirsyaad/FakeAPI.git
$ cd FakeAPI 
```

### Change Database
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

### Run
just type this on your terminal
```
node server.js
```
