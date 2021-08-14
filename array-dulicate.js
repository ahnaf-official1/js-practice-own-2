

function removeDuplicate(names){
    const unique = [];
    // for (let i = 0; i <names.length; i++){
        // const elements = names[i]
    //     console.log(elements);
    // }
    for(const elements of names){
        console.log(elements);
        if (unique.indexOf(elements) == -1)
        unique.push(elements);
    }
     return unique;
}

const names = ['asad', 'masad', 'kasad', 'nasad', 'lasad', 'kasad'
    , 'nasad', 'basad', 'rasad', 'casad', 'pasad', 'qasad']
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);