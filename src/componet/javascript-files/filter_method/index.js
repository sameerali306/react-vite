function filterNumbers(numbers) {
    // This function filters out numbers greater than 10
    return numbers.filter(function(number) {
        return number > 10;
    });
}

// Example usage
const numbers = [1, 5, 12, 7, 15, 9, 3, 21];
const filteredNumbers = filterNumbers(numbers);
console.log(filteredNumbers);
