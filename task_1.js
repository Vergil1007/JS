function findMiddleCharacter() {
    let word = prompt("Enter the word:");

    if (word === null) {
        alert("Canceled.");
        return;
    }

    word = word.trim();

    if (word === "") {
        alert("Invalid value");
        return;
    }

    let length = word.length;
    let middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        alert(word[middleIndex - 1] + word[middleIndex]);
    } else {
        alert(word[middleIndex]);
    }
}