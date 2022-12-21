// Your code here
Array.prototype.isEqual =  function(array){


    if(array.length === this.length){
        let countEqual  = 0
        for(let i = 0; i < array.length;i++){
            let value = array[i]
            if(value === this[i]){
                countEqual++
            }
        }
        if(countEqual === this.length){
            return true
        }
    }
    return false
}

// test with node
// console.log([1,2,3].isEqual([1,2,3]))
// console.log([1,2,3].isEqual([2,3]))
