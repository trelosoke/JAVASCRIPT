//continues, breaks e labels

outer: 
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++){
        let input = console.log(i, j)

        if (i % 2 === 0) continue outer
    }
}

console.log('Done!')