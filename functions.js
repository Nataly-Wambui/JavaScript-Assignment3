//Question 1
function sortArray(animals){
    console.log(animals.sort());
    console.log(animals.reverse());
}
 sortArray(["cat", "dog", "cow", "zebra", "giraffe"])

 //Question 2
function numbers(){
    let nums = [2,3,4,-9,-4,0]
    nums.forEach(element => {
        if(element>0){
            console.log("positive")
        }
        else if(element<0){
            console.log("negative");
        }
        else{
            console.log("zero");
        }
    });

}
numbers();

//Question 3
function employees(employee){

}
employees()



//Question 4
function multiplyNumbers(numbers){
    numbers. forEach(x=> {
        console.log( 'multiply',x*2);
    })
}
multiplyNumbers([2,4,5,7,8]);

//Question 5
function operations(numerics){
    let firstNums = numerics.slice(0,4).map(x=> x*8);
    let lastNums = numerics.slice(-2).map(x=> x+5);
    let newNumbers = firstNums.concat(lastNums);
    console.log({newNumbers});
}

operations([10,21,12,9,13,14,32,45])