/**
 * JavaScript practice 
 */

console.log(`Hello world`);
let M=[
	[1,2,3],
	[4,5,6],
	[7,8,9],
];

/*for(let i=0;i<M.length;i++){
	
	for(let j=0;j<M[i].length;j++){
		console.log(M[i][j]);
	}
}*/

function swap(matrix,n){
	
	//rotate elements and swap all elements. 
	//all 2D matrix has 4 elements needs to be swapped as corners.
	let temp=matrix[0][0];
	matrix[0][0]=matrix[n-1][0];
	matrix[n-1][0]=matrix[n-1][n-1];
	matrix[n-1][n-1]=matrix[0][n-1];
	matrix[0][n-1]=temp;
	
	
	return matrix;
	
}

function rotation(matrix,n){
	
}
console.log(swap(M,M.length));