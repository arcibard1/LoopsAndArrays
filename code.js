function filterOddNumbers(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);  // Filter out even numbers
    return oddNumbers.length === 1 ? [oddNumbers[0]] : oddNumbers;
}


function countVowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let char of str) {
        if ('aeiou'.includes(char)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }

    console.log(`Word: ${str}`);
    console.log(`Vowels: ${vowelsCount}`);
    console.log(`Consonants: ${consonantsCount}`);
}

function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
