// ****************CHAPTER 21(CHANGING case)******************************
// Q1
// var userInput=prompt("enter your name");
// var userInput = userInput.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= cleanestCities.length; i++) {
//    if (userInput === cleanestCities[i]) {
// alert("It's one of the cleanest cities");
//    }
//  }
//  Q2
// var x="Q"
// x=x.toLowerCase();
// console.log(x);
// q3
// var x="y"
// x=x.toUpperCase();
// console.log(x);
// q4
// var userinput="Q";
// var lowercase=userinput.toLowerCase();
// console.log(lowercase);
// q5
// var arr=["Q"];
// var lowercase=arr[0].toLowerCase();
// console.log(arr);
// q6
// var x="q"
// x=x.toUpperCase();
// alert(x);
// q7
// var cityName = "kaRacHi";
// var firstletter=cityName.slice(0,1);
// var firstletter=firstletter.toUpperCase();
// var other=cityName.slice(1);
// var other=other.toLowerCase();
// var letter=firstletter+other;
// console.log(letter);
// Chapter 22 - 25 (Strings)
// q1
// var sameWords="captains";
// var words=sameWords.slice(1,3);
// console.log(words);
// q2
// var str="characters";
// var length=str.length;
// console.log(length);
// q3
// var animal="elephant";
// var seg=animal.slice(2,6);
// console.log(seg);
// q4
// var str="characters";
// var length=str.length;
// console.log(length);
// q5
// var word="character";
// var length=word.length;
// var sec=word.slice(0,1);
// var sec2=word.slice(6);
// var variable=sec+sec2;
// console.log(variable);
// q6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);
// Q7 ANSWER

// var text = "To be or not to be.";

// var indx = text.lastIndexOf("be");

// console.log(indx);


// Q8 ANSWER


// var text = "This is a string with multiple instances of go. Let's find the index of the first character of the last instance.";

// var indx = text.lastIndexOf("go");

// console.log(indx);


// Q9 ANSWER

// Q10 ANSWER

// var str = "abcde";

// var character = str.charAt(2);

// console.log(character);
// // answer is (c)


// // Q11 ANSWER

// var text = "welcome into mine world.";

// var cha = text.charAt(10);

// console.log(cha);
// // in character spaces also include


// Q12 ANSWER

// var str = "welcome into mine world.";

// var x = str.charAt(str.length -1);

// console.log(x);


// // Q13 ANSWER

// var input = "example";

// var cha = input.charAt(5);

// console.log(cha);


// Q14 ANSWER

// var string = "example";

// if(string.charAt(2) === "a"){
// // alert("right");
// // }else{
// // alert("not right");
// // }


// // Q15 ANSWER

// var string = "example";

// var array = [];

// for (var i = 0; i < string.length; i++){
// array.push(string[i]);
// }

// console.log(array);

// var reply = "no, not now" ;

// var revisedReplay = reply.replace("no","yes");

// console.log(revisedReplay);


// // Q16 ANSWER

// var str ="This is 1 string with multiple 1s.";

// var newStr = str.replace("1", "one") ;

// console.log(newStr) ;

// Q17 ANSWER

// var x = "This is a.";

// var y = x.replace( /a/g, "z");

// console.log(y)
// Chapter 26 (Rounding Numbers)
// Chapter 26 (Rounding Numbers)
// // Q1 ANSWER
// // round a number to nearest integer
// var number = 3.5;
// var roundedNumber = Math.round(number);
// console.log(roundedNumber) ;
// // Q2 ANSWER
// round up a number
// var origNum = 3.5;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);
// Q3 ANSWER
// round down a number
// var origNum = 3.5;
// var roundNum = Math.floor(origNum) ;
// console.log(roundNum);
// // Q4 ANSWER
// var num = 3.14159 ;
// var roundNum = Math.round(num);
// console.log(roundNum);
// // Q5 ANSWER
// // not sure
// var number = 0.5;
// var roundedNumber = Math.round(number);
// console.log(roundedNumber);
// Chapter 28, 29 (Converting Strings)
// // Q1 ANSWER
// var str = "1234" ;
// var num = parseInt(str);
// console.log(num);
// // // Q2 ANSWER
// var str = "123" ;
// var num = parseInt(str);
// console.log(num);
// // // Q3 ANSWER
// var str = "3.14159" ;
// var num = parseFloat(str);
// console.log(num);
// // Q4 ANSWER
// // Q5 ANSWER
// var num = 15;
// var text = num.toString();
// console.log(text);
// // // Q6 ANSWER
// var num = 42 ;
// var text = num.toString();
// console.log(text);
// // // Q7 ANSWER
// var decimalString = "3.14";
// var roundInteger = Math.round(parseFloat(decimalString));
// console.log(roundInteger);
// / Chapter 30 (Controlling the length of
    // decimals)
    
    // // Q1 ANSWER
    
    // var num = 3.14159265359;
    // var strNum = num.toFixed(4);
    
    // console.log(strNum);
    
    // // Q2 ANSWER
    
    // var n = 3.14159265359;
    // n = Number(n.toFixed(2));
    // console.log(n);
    
    
    // // Q3 ANSWER
    
    // var num = 234;
    // if (num.toFixed(2).toString().length > 4) {
    
    // console.log(num);
    // }
    
    // // Q4 ANSWER
    
    // var num = 1.123456;
    // var roundString = num.toFixed(2);
    // console.log(roundString);
    