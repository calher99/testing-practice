const analizeArray = (array) =>{
    const length = array.length;

    const sum = array.reduce((acum,position) => {
        return position+acum
    },0)
    const average = sum/length;
    let max= array[0];
    let min= array[0];

    array.forEach(element => {
        if(element<min){
            min=element;
        }
        if(element >max){
            max=element;
        }
    });

    return{
        average,
        min,
        max,
        length
    }
}
console.log(analizeArray([1,8,3,4,2,6]))

export default analizeArray;