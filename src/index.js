module.exports = function getZerosCount(number, base) {
  // your implementation
    let res = 0;

    function findMultipliers(base){
        let j = 1;
        let i = 2;
        let a = [];
        do {
            if (base % i === 0){
                a.push(i);
                j++;
                base /= i;
            }
            else {
                i++;
            }
        }while (i < base);
        if((i===2) && (base===1)){
            return a;
        }else {
            a.push(i);
        }
        return a;
    }

    function getUnique(arr){
        let rez = [];
        let power = [];
        rez.push(arr[0]);
        power.push(0);
        arr.forEach(function(item,i){
            if(!(rez.indexOf(item) + 1)){
                rez.push(item);
                power.push(1);
            }else{
                power[power.length-1]++;
            }
        });
        return [rez,power];
    }

    let multipliers = findMultipliers(base);
    let arr = getUnique(multipliers);
    let uniqMult = arr[0];
    let power = arr[1];

    let result = [];

    for(let j = 0;j<uniqMult.length;j++){
        i = 1;
        while (Math.pow(uniqMult[j], i) <= number) {
            res += Math.floor(number / Math.pow(uniqMult[j], i++));
        }
        result.push(~~(res/power[j]));
        res=0;
    }

    return Math.min.apply( Math, result );


};
