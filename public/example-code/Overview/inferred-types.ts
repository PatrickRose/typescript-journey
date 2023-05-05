function getLengthOfString(value: string): number {
    return value.length;
}

// We know this has to be a string!
const knownString = 'test';
// No type error!
getLengthOfString(knownString);

// And because we know that getLengthOfString returns a number, inferredNumber has to be a number
const inferredNumber = getLengthOfString('1');

