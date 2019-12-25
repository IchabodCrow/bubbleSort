main();

function main(){
    let arr = [1,9,2,8,4,5,6,9,7,1,-1,0];
    console.log(sort(arr));
    console.log(arr);
}

function sort(arr){
    let tmp = 0;
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
               swap(tmp, arr, j);
            }
        }
    }
}

function swap (tmp, arr, j){
    tmp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = tmp;
}