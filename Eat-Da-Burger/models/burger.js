var orm = require('../config/orm.js');

//write code that will call the orm funtions using burger specific input for the orm
// orm.selectAll("","");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });    
    }
};

module.exports = burger;