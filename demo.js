//1. FizzBuzz Function
//Write your code below this line:

def gen_buzz(num):
    if num%3==0 and num%5==0:
        return 'GenBuzz'

    else if num % 3 == 0:
        return 'Gen'

    else if num % 5==0:
        return 'Buzz'
    else:
        return num

for n in range(1,15):
    print(Gen_buzz(n))

//2. E-Commerce Item list Function
//Write your code below this line:

let itemList = 'shoes';
 
switch (itemList) {
  case 'shoes':
    console.log('Shoes are $50.');
    break;
  case 'Jeans':
    console.log('Jeans are $25');
    break;
  case 'hat':
    console.log('Hats are $12');
    break;
  case 'socks':
    console.log('Socks are $2');
    break;
  default:
    console.log('Invalid item');
    break;
}
 

// 3. Exercise Tracker
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:

const exercises = ["Push-ups", "Sit-ups", "Bear Crawls", "1 mile run", "60 second plank", "Burpees", "Jumping Jacks", "Squats", "Weighted Squats", "Inch Worms"]
const random = Math.floor(Math.random() * exercises.length);
console.log(random, exercises[random]);

const exercises = ["Push-ups", "Sit-ups", "Bear Crawls", "1 mile run", "60 second plank", "Burpees", "Jumping Jacks", "Squats", "Weighted Squats", "Inch Worms"]
const random = Math.floor(Math.random() * exercises.length);
console.log(random, exercises[random]);
