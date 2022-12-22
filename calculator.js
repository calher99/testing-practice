const add = (a,b) =>{
    if(isNaN(a) || isNaN(b))return null
    return a+b;
}

const substract = (a,b) =>{
    if(isNaN(a) || isNaN(b))return null
    return a-b;
}

export {add, substract};