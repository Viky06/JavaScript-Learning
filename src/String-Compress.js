/**
 * Problem Description
You are given a string S and you have to implement a function to perform basic string compression, using the counts of repeated characters.

If the "compressed" string would not become smaller than the original string, your function should return the original string.

You can assume the string has only uppercase and lowercase letters (a - z).

Sample Input 1
aabccccc


Sample Output 1
a2b1c5


Explanation 1
First 'a' repeats two times, then 'b' repeats once, then 'c' repeats two times.


Constraints
1 <= length(S) <= 100000

We will use two pointers, i and j, to traverse the array. 
Pointer i will iterate through the array while pointer j will count 
how many times the current character has been repeated in the array.

The number of times a character is repeated will be equal to [j-i].

If a character appears only once, then [j-i] will equal 1. 
However, since the given constraint states that 
the string cannot be compressed to a length less than 1, 
we will only compress characters when [j-i] > 1.

 */

let str="a";

/**
 * @param {string} s
 * @return {string}
 */

function compressString(s){
	
	let count=1;
	let prevChar=s[0];
	let compressedString="";
	for(let i=1;i<s.length;i++){
		
		if(s[i]==s[i-1]) count++;
		else{
			compressedString=compressedString+prevChar+count;
			count=1;
			prevChar=s[i];
		}
	}
	compressedString=compressedString+prevChar+count;
	console.log(s.length,compressedString.length);
	
	if(s.length==compressedString.length)
	console.log(s);
	else if(compressedString.length>s.length)console.log(s);
	else console.log(compressedString);
}


compressString(str);