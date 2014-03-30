/*==========  QUESTION 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.   ==========*/

var multiplesOf = function (num) {
    var sum = 0;
    for (var i = 0; i < num; i++)
    {
      if (i % 3 === 0 || i % 5 === 0)
      {
      sum += i;
      }
    }
   return sum;
};


/*==========  Question 2
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.  ==========*/

var fibonacci = function(num) {
	var curr = 2;
	var last = 1;
	var temp = 0;
	var sum = 0;

	while(curr < num)
	{
		if (curr % 2 === 0)
		{
			sum += curr;
		}
		temp = curr;
		curr += last;
		last = temp;
	}
	return sum;
};


/*==========  //Question 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?  ==========*/

var largestPrime = function (num) {
	var factors = [];
	var i = 2;
	while (num > 1)
	{
		while (num % i === 0)
		{
			factors.push(i);
			num /= i;
		}
		i += 1;
	}
	return factors[factors.length-1]; //return last element (which is the largest) in array of prime numbers
}

/*==========  TEST CASES  ==========*/

console.log("TEST MULTIPLES OF 3 AND 5 FUNCITON:")
console.log("Expected: 23");
console.log("Actual: " + multiplesOf(10));

console.log(multiplesOf(1000));
console.log("\n");


console.log("TEST FIBONACCI FUNCTION:")
console.log("Expected: 10");
console.log("Actual: " + fibonacci(10));

console.log("Expected: 44");
console.log("Actual: " + fibonacci(100));

console.log("Actual: " + fibonacci(4000000));
console.log("\n");


console.log("TEST LARGEST PRIME FUNCTION:")
console.log(largestPrime(100));
console.log(largestPrime(13195));
console.log(largestPrime(600851475143));