// it is a module which returns the day in specified format

//console.log(module); // it will print what our module contains
//module.exports = "hello world" ;  it will export this string

//module.exports = getDate; // do not add parenthesis bz they are added when a function is called

//  module.exports.getDate = getDate;

// var  getDate = function(){
//     let today = new Date();
    
//     let options = {
//         weekday : "long",
//         day : "numeric",
//         month : "long"
//     };
//     return today.toLocaleDateString("en-US" , options);
//     // how to return day to anywhere ... means any file.... using node

// }

exports.getDate  = function(){
    const today = new Date();
    
    const options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    return today.toLocaleDateString("en-US" , options);
};

// what if we have to return many things together

exports.getDay  = function(){
    const today = new Date();
    
    const options = {
        weekday : "long",
       
    };
    return today.toLocaleDateString("en-US" , options);
};
