/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (petBreed === undefined || petName === undefined) {
    console.log('Missing information. Please provide a valid pet.');
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else {
    console.log('What an...interesting pet.')
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i);
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str === '') {
      continue
    }
    const newLetter = `${str[i].toUpperCase()}!`
    console.log(newLetter)
  }
  return
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  const letters = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      letters.neither++
    } else if (str[i] === ' ' || str[i] === '+') {
      letters.neither++
    } else if (str[i] === str[i].toUpperCase()) {
      letters.uppercase++
    } else {
      letters.lowercase++
    }
  }
  return letters;
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const greedyArr = []
  if (gnomes[0] === undefined) {
    return greedyArr
  }
  for (let i = 0; i < gnomes.length; i++) {
    if (gnomes[i].stolenDecorations.length > 1) {
      greedyArr.push(gnomes[i].name)
    }
  }
  return greedyArr;
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
