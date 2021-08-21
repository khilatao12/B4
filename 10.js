let str = "High knowledge, high return"
let arr = str.split(',')
for(let i=0; i < arr.length;i++){
    arr[i]=arr[i].toLowerCase()
}
console.log(arr);