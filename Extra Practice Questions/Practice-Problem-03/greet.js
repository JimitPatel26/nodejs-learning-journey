function greet(name){
    return `Hello ${name} !!\nThis greeting comes from ${__filename}\nLocated at : ${__dirname}`;
}

module.exports = greet;