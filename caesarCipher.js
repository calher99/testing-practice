const caesarCipher = (string,shift) =>{
    let result='';
    for(let i = 0; i<string.length; i++){
        if(string[i]!==' '){
            result += cipherLetter(string[i],shift)
        }else{
            result +=' '
        }
    }
    return result;
}

const cipherLetter = (letter,shift) =>{

    const index = letter.charCodeAt(0);
    let replacement = ''

    if (index>=97 && index <=122){//lowercase
        replacement = modifyString(index,shift,122,97)
    }else if (index>=65 && index <=90){//uppercase
        replacement = modifyString(index,shift,90,65)
    }else{//something weird
        replacement = letter;
    }
    return replacement;
}

function modifyString (index,shift,max,min){
    const newIndex= index+shift;
    if(newIndex>max){ //case it goes above Z
        const newShift = newIndex-(max+1);
        const replacement = String.fromCharCode(min+newShift);
        return replacement;
    }
    //normal case
    const replacement = String.fromCharCode(index+shift)
    return replacement;
}


export default caesarCipher