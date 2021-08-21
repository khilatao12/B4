let arr = [1,2,3,4,5,6,"hh", "9",80,100]
let fil = arr.filter(e => typeof e === 'number')
for(let i = 0 ; i<fil.length; i++){
    fil[i]=fil[i]*fil[i]
}
console.log(fil);