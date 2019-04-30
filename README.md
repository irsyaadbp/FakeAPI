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

### Create Table
```
CREATE TABLE `tb_admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` enum('Super Admin','Marketing') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

### Run
just type this on your terminal
```
$ node server.js
```
