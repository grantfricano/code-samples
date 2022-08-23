
// sample input 07:05:45PM
function timeConversion(s) {
    // Write your code here
    var timeArr = s.split(':');
    if (timeArr[2].indexOf("AM") > 0){
        if (timeArr[0] == "12"){
            timeArr[0] = "00";
        }
    }
    else {
        if (timeArr[0] != "12"){
            timeArr[0] = parseInt(timeArr[0]) + 12;
        }
    }
    var newString = timeArr[0] + ':' + timeArr[1] + ':' + timeArr[2].substring(0, 2);
    return newString;
}

// takes an unsorted array of odd amount of numbers... sorts it... then returns median value 
function plusMinus(arr) {
    // Write your code here
    let posNums = 0;
    let negNums = 0;
    let zeroNums = 0;
    let arrSize = arr.length;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            posNums += 1;
        }
        else if (arr[i] < 0){
            negNums += 1;
        }
        else {
            zeroNums += 1;
        }
    }
    
    console.log((posNums/arrSize).toPrecision(6));
    console.log((negNums/arrSize).toPrecision(6));
    console.log((zeroNums/arrSize).toPrecision(6));

}

//input a = [1,2,3,4,3,2,1]
function lonelyinteger(a) {
    // Write your code here
    const map = new Map();
    for (let i = 0; i < a.length; i++) {
        if (!map.get(a[i])){
            map.set(a[i], 1);
        }
        else {
            map.set(a[i], map.get(a[i]) + 1);
        }
    }
    
    for (let i = 0; i < a.length; i++) {
        if (map.get(a[i]) == 1){
            return a[i];
        }
    }
}

function flippingMatrix(mat) {
    let R = mat.length;
    let C = mat.length;
    let sum = 0;
   
        for (let i = 0; i < R / 2; i++) {
            for (let j = 0; j < C / 2; j++) {
                let r1 = i;
                let r2 = R - i - 1;
                let c1 = j;
                let c2 = C - j - 1;
   
                // We can replace current cell [i, j]
                // with 4 cells without changing affecting
                // other elements.
                sum += Math.max(Math.max(mat[r1][c1], mat[r1][c2]),
                        Math.max(mat[r2][c1], mat[r2][c2]));
            }
        }
   
        return sum;

}


