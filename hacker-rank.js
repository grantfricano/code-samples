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
    return newString
}

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