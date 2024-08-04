function generateRandomNumber() {
    // Generate a random number between 1 and 100
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Display the result
    document.getElementById('result').innerText = `Random Number: ${randomNumber}`;
}