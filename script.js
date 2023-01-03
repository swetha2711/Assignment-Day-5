const arr=[1,2,3,4,5,6,7,8,9,10];
//IIFE 1a
(function(arr){
  odds=[]
  for(const num of arr){
    if(num%2===1){
      odds.push(num);

    }
  }
  console.log(odds)
})(arr);
//anonymous
var odd=function(arr){
  odds=[]
  for(const num of arr){
    if(num%2===1){
      odds.push(num);

    }
  }
  console.log(odds)
};
odd(arr);
//1b IIFE
var str="DAY 5 ASSIGNMENT";
(function(str){
  str=str.toLowerCase().split('');
  for(var i=0;i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
}
console.log(str.join(''));
})(str);

//Anonymous
var title1=function(title){
  title=title.toLowerCase().split('');
  for(var i=0;i<title.length;i++){
    title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1);
  }
  console.log(title.join(''));
  };
  title1("DAY 5 ASSIGNMENT");
//1c IIFE
(function(arr){
  sum=0;
  for(var num of arr){
    sum+=num;
  }
  console.log(sum);
})(arr);

//Anonymous
var sumfunc=function(arr){
  var sum =0;
  for(var num of arr){
    sum+=num;

  }
  console.log(sum);
};
sumfunc(arr);
//1d IIFE
function isPrime(num){
  if(num<2)
  return false;
  for(let k=2;k<num;k++)
  {
    if(num%k==0){
      return false;
    }
  }
  return true;
}
(function(arr){
  var prime=[];
  for(var num in arr){
    if(isPrime(num)){
    prime.push(num);
    }
  }
  console.log(prime);
})(arr);

//Anonymous
var prime=function(arr){
  var primes=[];
  for(var num in arr){
    if(isPrime(num)){
      primes.push(num);
    }
  }
  console.log(primes);
};
prime(arr);

//1e IIFE
const Arr=["malayalam","racecar","flower","madam"];
function checkIfPalindrome(str){
  return str == str.split('').reverse().join('');
}
(function(Arr){
  var result=[];
  for(var str of Arr){
    if(checkIfPalindrome(str)){
      result.push(str);
    }
  }
  console.log(result);
})(Arr);

//Anonymous
var palindrome=function(Arr)
{
  var result=[];
  for (var str of Arr){
    if(checkIfPalindrome(str)){
      result.push(str);
    }
  }
  console.log(result);
};
palindrome(Arr);

//1f IIFE
var arr1=[1,11,14,25,37];
var arr2=[3,12,16,29,44];
(function getMedian(arr1,arr2)
{
  n=arr1.length;
  //both arrays are sorted and of same size

  var i1=0;
  var i2=0;
  var count;
  var m1=-1;
  var m2=-1;
  for(count=0;count<=n;count++)
  {
    if(i1==n)
    {
      m1=m2;
      m2=arr2[0];
      break;
    }
    else if(i2==n)
    {
      m1=m2;
      m2=arr1[0];
      break;
    }
    if(arr1[i1]<=arr2[i2])
    {
      m1=m2;
      m2=arr1[i1];
      i1++;
    }
    else{
      m1=m2;
      m2=arr2[i2];
      i2++;
    }
  }
  console.log((m1+m2)/2);
})(arr1,arr2);

//anonymous
var median=function(arr1,arr2){
  n=arr1.length;
  var i1=0;
  var i2=0;
  var count;
  var m1=-1;
  var m2=-1;
  for(count=0;count<=n;count++)
  {
    if(i1==n)
    {
      m1=m2;
      m2=arr2[0];
      break;
    }
    else if(i2==n)
{
  m1=m2;
  m2=arr1[0];
  break;

} 
if(arr1[i1]<=arr2[i2])
{
  m1=m2;
  m2=arr1[i1];
  i1++;
}
else{
  m1=m2;
  m2=arr2[i2];
  i2++;

} 
  }
  console.log((m1+m2)/2);
};
median(arr1,arr2);


//1g IIFE
const array=[1,2,2,2,4,5,7,3,3,3,5,8,9];
(function(array){
  var unique=[];
  for(i=0;i<array.length;i++){
    if(unique.indexOf(array[i])===-1){
      unique.push(array[i]);
    }
  }
  console.log(unique);
})(array);

//Anonymous
var rduplicate=function(array){
  var unique=[];
  for(i=0;i<array.length;i++){
    if(unique.indexOf(array[i])===-1){
      unique.push(array[i]);
    }
  }
  console.log(unique);
};
rduplicate(array);
    

  
//1h IIFE
var ay=[1,2,3,4,5];
k=2;
(function rotation(a,k)
{
  n=ay.length;
  k=k%n;
  rotate=[]
  for(let i=0;i<n;i++){
    if(i<k){
      rotate.push(ay[n+i-k]);
}
else{
  rotate.push((ay[i-k]));
}
  }
console.log(rotate);
})(ay,k);

//Anonymous
var rotation=function(ay,k){
  n=ay.length;
  k=k%n;
  rotate=[]
  for(let i=0;i<n;i++)
  {
    if(i<k){
      rotate.push(ay[n+i-k]);
    }
    else{
      rotate.push((ay[i-k]));
    }
    }
    console.log(rotate);
  };
  rotation(ay,k);

  //3a
  var oddes=(arr)=>
  {
    odds=[]
    for(const num of arr){
      if(num%2===1){
        odds.push(num);
      }
    }
    console.log(odds)
  };
  oddes(arr);

  //3b
  var title1Arrow=(title)=>{

    title=title.toLowerCase().split('');
    for(var i=0;i<title.length;i++){
      title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1);
}
       console.log(title.join(''));
  };
  title1Arrow("DAY 5 ASSIGNMENT");

  //3c
  var sumFuncA=(arr)=>{
    var sum=0;
    for(var num of arr){
      sum+=num;
    }
    console.log(sum);
    };
    sumFuncA(arr);
  
    //3d
    var primeA=(arr)=>{
      var primeresult=[];
      for(var num in arr){
        if(isPrime(num)){
          primeresult.push(num);
        }
      }
      console.log(primeresult);
};
primeA(arr);

//3e
var palindromeA=(Arr)=>{
  var result=[];
  for (var str of Arr){
    if(checkIfPalindrome(str)){
      result.push(str);
    }
  }
  console.log(result);
  };
  palindromeA(Arr);
