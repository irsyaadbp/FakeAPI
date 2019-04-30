'use strict';

var response = require('./res');
var connection = require('./conn');
var crypto = require('crypto');

exports.api = function(req, res){
    response.ok("Hello from the Node JS RESTful side", res);
};

exports.loginAdmin = function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    password = crypto.createHash('md5').update(password).digest('hex');

    connection.query('SELECT * FROM tb_admin WHERE username = ? AND password = ?', [ username, password ],
    function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            if(rows.length > 0){
                response.ok(rows,res)
            }else{
                response.error("Admin not found",res)
            }
        }
    });
}
exports.admin = function(req, res){
    connection.query('SELECT * FROM tb_admin', function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            if(rows.length > 0){
                response.ok(rows,res)
            }else{
                response.error("Data not found",res)
            }
        }
    });
};

exports.findAdmin = function(req, res){
    var admin_id = req.params.admin_id;

    connection.query('SELECT * FROM tb_admin WHERE id = ?', [ admin_id ],
    function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            if(rows.length > 0){
                response.ok(rows,res)
            }else{
                response.error("Data not found",res)
            }
        }
    });
}

exports.createAdmin = function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var status = req.body.status;
    
    password = crypto.createHash('md5').update(password).digest('hex');
    
    if(status == "Super Admin" || status == "Marketing"){
        connection.query('INSERT INTO tb_admin (username, password, email, status) values (?,?,?,?)',
        [ username, password, email, status ],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil menambahkan admin!", res);
            }
        });
    } else{
      response.error(status + " tidak ada pada status", res)  
    }
}

exports.updateAdmin = function(req, res){
    var admin_id = req.body.admin_id;
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var status = req.body.status;

        password = crypto.createHash('md5').update(password).digest('hex')
        connection.query('UPDATE tb_admin SET username = ?, password = ?, email = ?, status = ? WHERE id = ?',
        [ username, password, email, status, admin_id],
        function(error, rows, fields){
            if(error){
                response.error("Error", res);
            }else{
                response.ok("Berhasil merubah data admin!", res);
            }
        });
    
}

exports.deleteAdmin = function(req, res){
    var admin_id = req.body.admin_id

    connection.query("DELETE FROM tb_admin WHERE id = ?", [ admin_id ],
    function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil menghapus admin!", res);
        }
    })
}