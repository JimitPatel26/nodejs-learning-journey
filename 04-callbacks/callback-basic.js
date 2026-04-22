function main(cb){
    console.log("Perform Operation 1");
    setTimeout(function(){
        console.log("Operation Completed");
    },2000);
    console.log("Perform Operation 2");
}

function callback_fun(result){
    console.log("Result : "+result);
}

main(callback_fun);