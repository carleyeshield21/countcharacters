// This is the link of this JavaScript Challenge in codewars.com
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count(string) {
  // First, we assign a variable for the length on the array
  arrlength = string.length

  // Then we create a new array called sorted because to make this function easier, we sort the elements first so we can make the for loop condition a little less confusing, the function sort is used to sort the array in ascending order. We will not use the function toLowerCase() so we can count how many times an uppercase letter appears
  sorted = []
  for (i = 0; i <= arrlength - 1; i++) {
      sorted.push(string[i])
  }
  sorted = sorted.sort()

  // Here, we are now identifying every distinct element in the array, and create an array called distinctarray so we can push each distint element in it when it finds an inequality in the array through the if condition, then each time it detects that inequality, we set j to be equal to i
  console.log(string)
  j = 0
  distinctarray = []
  for (i = 0; i <= sorted.length; i++) {
      if (sorted[j] != sorted[i]) {
          distinctarray.push(sorted[j])
          j = i
      }
  }
  // console.log(distinctarray)
  // Here is the crucial part of counting the frequency, by using the filter and includes function, and setting it inside a for loop. The includes function will only work if we pass in an array, so we assign the elem variable in an array format
  for (i = 0; i <= distinctarray.length - 1; i++) {
      elem = distinctarray[i]
      targetarray = sorted.filter(n => [elem].includes(n))
    //   console.log(`The frequency of the number/element ${elem} is ${targetarray.length}`)
      console.log(`${elem}: Number of occurences: ${targetarray.length}`)
  }

}  
count('countcharacters')
console.log('==========')
count('carleyeshield')
console.log('==========')
count('@hjue^?pkj|<yrbhKnhk')
console.log('==========')
