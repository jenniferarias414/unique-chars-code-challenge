// Write your solution below:
// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

// function makeUnique (arr) {
//     // let str = ''
//     let newArr = []
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] !== newArr.contains){
//             newArr.push([])
//         }
//     }
//     return newArr.
// }

//owen's soln
function makeUnique(str){
    let countedChars = []
    let newStr = ""
// if string of counted letters does not contain the current char being looped over, add the current char to new string to be returned
    for (let i=0; i<str.length; i++){
        if (!countedChars.includes(str[i])) {
        newStr += str[i]
    }
// then: adds current char in the loop to the counted chars array
    countedChars.push(str[i])
    }

    return newStr
}
console.log(makeUnique('helloworld'))
console.log(makeUnique('jellybelly'))