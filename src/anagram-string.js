/*
 * check if the strings are anagram or not
 * 
 * 
 */

 let str1="aebcd4";
 let str2="b4cade5";
 let l=0;
 let r=str1.length-1;
 
 console.log(str1," ",str2);
 

 function anargramCheck(str1,str2){
	  for(let i=0;i<str1.length;i++){
	 l++;
	 
	 for(let j=0;j<str2.length;j++){
//		 console.log(str1.charAt(i),str2.charAt(j));
		 if(str1.length==str2.length){
			 if(str1.charAt(i)==str2.charAt(j)){
			//	 console.log(str1.charAt(i));
				 r--;
			 }
		 }
		 else return false;
		 
	 }
	
	 
 }
// console.log(l,r);
 if(l+r==str1.length-1) return true;
  else return false;
 }

 
 console.log(anargramCheck(str1,str2));