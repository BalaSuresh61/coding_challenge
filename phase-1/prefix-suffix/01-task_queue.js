const process = require("node:process");

function eventLoop(){
    /*
    achive:
    call stack( console.log, loops without async)
    nextTick- queue(process.nextTick())
    microTask-queue(promises)
    macroTask-queue(setTimeout, setInterval, setImediate, I/O, Apis )
    */
    console.log("script Started");
    for(let i=0; i<5; i++){
        console.log("Loop Executed: ",i)
    }

    setTimeout(()=>{
        console.log("Top level SetTimeout executed")
    },1000)
    
    setInterval(()=>{
        console.log("Top level setIntervel executed")
    },1000)

    setImmediate(()=>{
        console.log("Top level setImidiate executed")
    })

    Promise.resolve().then(()=>{
        console.log("Top leve Promise executed")
        setTimeout(()=>{
            console.log("Second lavel SetTimeout Executed")
        },1000)
        process.nextTick(()=>{
            console.log("Second layer(Inside NextTick) Executed");
        })
        console.log("second level ended.")
    })

    process.nextTick(()=>{
        console.log("Top level nextTick executed")
    })
    
    console.log("Script Ended")
}
eventLoop();