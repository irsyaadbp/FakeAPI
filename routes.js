'use strict';

module.exports = function(app){
    var todoList = require('./controller');

    app.route('/api')
        .get(todoList.api);
    
    /*
    Routes Admin
     */
    // Login Admin
    app.route('/api/admin/login')
        .post(todoList.loginAdmin);

    //CRUD Admin
    app.route('/api/admin')
        .get(todoList.admin);

    app.route('/api/admin/:admin_id')
        .get(todoList.findAdmin);

    app.route('/api/admin')
        .post(todoList.createAdmin);

    app.route('/api/admin')
        .put(todoList.updateAdmin);

    app.route('/api/admin')
        .delete(todoList.deleteAdmin);
}