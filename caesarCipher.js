const caesarCipher = (string,shift) =>{
    let result='';
    for(let i = 0; i<string.length; i++){
        result += cipherLetter(string[i],shift)
    }
    return result;
}

const cipherLetter = (letter,shift) =>{
    const index = letter.charCodeAt(0);
    const newIndex= index+shift;
    if(newIndex>122){
        const newShift = newIndex-123;
        const replacement = String.fromCharCode(97+newShift);
        return replacement;
    }
    const replacement = String.fromCharCode(index+shift)
    return replacement;
}

export default caesarCipher