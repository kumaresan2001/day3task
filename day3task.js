//1)  for json 
var obj = [{
  "name": "John",
  "age": "20",
  "gender": "male",
  "attendance": ["mon","tues","wed","thu"]
}]
for(var i =0;i<obj.length;i++){
  console.log(obj[i]);
}

//for in json
var obj = [{
  "name": "John",
  "age": "20",
  "gender": "male",
  "attendance": ["mon","tues","wed","thu"]
}]
for(let i in obj)
{
  console.log(obj[i]);
}


//for of json
var obj = [{
  "name": "John",
  "age": "20",
  "gender": "male",
    "attendance": ["mon","tues","wed","thu"]
}]
for(let age of obj )
{
  console.log(age);
}

//2)josn resume
var arr=[
   {
       "name": "kumaresan",
       "age": "22",
       "date of birth":"05/03/2001",
       "gender":"male",
       "marital status":"singal",
       "languages_known":"tamil$english"

    }
]
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
 }