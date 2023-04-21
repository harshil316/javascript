function add(num, callback) {
    return callback(num + 10, false)
}
function sub(num, callback) {
    return callback(num - 5, false)
}
function mul(num, callback) {
    return callback(num * 2, false)
}
function div(num, callback) {
    return callback(num / 3, false)
}
add(10, (addres, error) => {
    if (!error) {
        sub(addres, (subres, error) => {
            if (!error) {
                mul(subres, (mulres, error) => {
                    if (!error) {
                        div(mulres, (divres, error) => {
                            if (!error) {
                                console.log(addres);
                                console.log(subres);
                                console.log(mulres);
                                console.log(divres);
                            }
                        })
                    }
                })
            }
        })
    }
})