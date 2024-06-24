1. i have one floating variable if i want to show the integar without decimals i can do it by console.log or i can decalre another variable- see below
---> To make the decimal number into integar
 
parseInt
var x = 25.4565
one way--
console.log(parseInt(x))
or
var y = parseInt(x)
console.log (y)

To convert a string to a number-->
to show the fraction number as integar-->
parseFloat
var num1 = parseFloat(num)
console.log(num1)

To find out the types of variable either sring, numeric or boolean-->
typeof
var num = "15.36"
console.log(typeof num)

to change the value of a variable-->
var see = 10;
see = 15

to keep the certain number after decimal--need to use 'toFixed' and the amount of number which we want to keep-

var dad = '67.5454';
var floating = parseFloat(dad)-->to make number
var integar = parseInt(floating)-->to make integar
var fixed = floating.toFixed(2)-->to keep certain number after decimal

one propble of using toFixed- it makes the number into string. so to convert it-
console.log(parseFloat(fixed))


Calculation--

var x = 5;
var y = 10;
var z = x + y;

want to add more--> line 44, 45, 46 and 47 hase the same poutput. in all these circumstances the value of x will be - 6
x + 1; ---44
x += 1 ---45
x ++ ---->post increment
++ x ---->pre incremnet

--->post increment
var x = 5;
console.log(x++) --->it works inline- so first will print then will add 1 and the result get 6 but will show 5
console.log(x++) -->same as before-it should show 7, but will show 6

--->pre-increamnent
var y = 10;
console.log(++y)- as it is pre- it will show the result 11 in the same line
console.log(++y)- now it will show 12 as first line show 11. so this line will add 1 and total will be 12



<---ARRAY--->
Now i can set multiple value rather than
var arr = [10, 39, 57, 56]
---> to find how elements in the array- need to use "length"
console.log(arr.length)

-->index of array- it means the positon of the elements in the array. the indexing pattersn start from 0
---> to show or work with the thrid element of the array - 56. how to do it?
console.log(arr{3});--- it shows in the console
var num1 = arr(3)--- here show how to show by another variable
console.log(num1)

---> to add element in the array-- Push
var hasan =  ['sadia', 'jorina']
hasan.push('korina')
hasan.push('sokina')
console.log(hasan)

--->to remove sth from array
hasan.pop()
console.log(hasan)

--->how to bring back the removed item 
var x = hasan.pop()

// Array unshift -- to add a number at beginning of the array

var numbers = [2, 3, 4, 5]
console.log(numbers)
numbers.unshift(1);
console.log(numbers)

// array shift --- to remove the first number

var numbers = [1, 2, 3, 4, 5]
console.log(numbers)
numbers.shift()
console.log(numbers)



---> if else condition

var age = 25;
if (age >= 18){
    console.log('u r adult')
}
else {
    console.log('tmi teenage acho');
}

var mark = 58;
if (mark >= 80){
    console.log('u get A +')
}

else if --- help to write another condition

else if(mark >= 78){
    console.log('u get A')
}

else if{ (mark >= 60)
    console.log(u got b)
}

else if {(mark >= 50)
    console.log('u got c')
}

else{
    console.log('u fail')
}

else---> i have lot of contions Over, if it does not fulfil then you are fail


---> nested if else

var temparetture = 25;
var isRaining = true;

if (temparetture >= 25){
    console.log('it is hot day')
    if(isRaining == true){
        console.log('it is raining')
    }
    else{
        console.log('it is not raining')
    }
}
else{
    console.log('it is a cold day')
    if(isRaining == true){
        console.log('it is raining')
    }
    else{
        console.log('it is not raining')
    }
}

----> loop - it means repeating samething or doing again agian

while loop----->

var i = 1;
----- rules for the while is that i need to write a breaking condition. it means that if you run a loop how llong or how many times it will run. so to make it defined i need to use while loop
while(1<= 10){
    console.log('um sorry')
    i++
}

to show the amount of times in loop-- for loop and while loop both are same and work in a same way

i can write so

var i = 1;
while <= 1{
    console.log('um sorrry', i)
    i++
}

// for loop---- it is same as while loop, but for the for loop i need to write a normal variable

for(var x = 1; x <=10; x++){
    console.log('um sorry', x)
}
