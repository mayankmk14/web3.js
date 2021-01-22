let test = require('./packages/web3/src/index') 

async function check(){
    console.log(test,"test",test.utils)
    let p = test.utils.toLuf("1000000","tiluf")
    let q = test.utils.fromLuf("1000000","tiluf")
    console.log(p,"qqqqqqqqqqqq",q)
}

check()