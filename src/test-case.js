/**
 * 
 */
/*let nums=[1,2,4,4,5,6]; let val=4;

var removeElement = function(nums, val) {
    
    nums.sort((a,b)=> a-b );
    // console.log(nums);
    nums.splice(nums.indexOf(val),(nums.lastIndexOf(val)+1-nums.indexOf(val)));
    // console.log(nums);
    return nums.length;
};

console.log(nums);*/

function foo(n) {
    if (n <= 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += foo(n - 1);
        console.log(sum);
    }
    return sum;
}
console.log(foo(1));