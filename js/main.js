// Question #1

let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!';
let dog_names = ['Max', 'HAS', 'PuRple', 'dog'];

let findWords = (a_list, b_list) =>{
    for(let i=0; i<b_list.length; i++){
        if(a_list.includes(b_list[i])){
            b_list.splice(i,1, `Matched ${b_list[i]}`)
        } else {
            b_list.splice(i,1, `No Match`)
        }
    }
    return b_list
};

console.log(findWords(dog_string, dog_names))

// Question #2

let given_arr = [13,22,26,40,1,10];

let replaceEvens = (arr) =>{
    return arr.filter(i => {
        if (i*2<50){
            return i
        }
    })
};

console.log(replaceEvens(given_arr))