function linearSearch(list, target) {
    // return target index or null
    for(let i=0; i < list.length; i++) {
        console.log("i", i);
        if(list[i] === target) {
            return i;
        }
    }
    return null;
}

console.log("search", linearSearch([4,5,6,7,3,2,5,1], 10))