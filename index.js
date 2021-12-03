const allQuotients = [];
const allDivisors = [];

const dividendsGroupA = {};
const dividendsGroupB = {};

const getAllQuotients = () => {
  for (let i = 1; i < 3; i++) {
    const hundreds = 100*i*4;
    for (let j = 0; j < 10; j++) {
      const tens = hundreds + 10*j;
      for (let k = 1; k < 5; k++) {
        const ones = tens + k*2;
        allQuotients.push(ones);
      }
    }
  }
}

const getAllDivisors = () => {
  for (let i = 1; i < 4; i++) {
    const thousands = 1000*i*3;
    for (let j = 0; j < 10; j++) {
      const hundreds = thousands + 100*j;
      for (let k = 1; k < 5; k++) {
        const tens = hundreds + 10*k*2;
        for (let l = 1; l < 5; l++) {
            const ones = tens + l*2;
            allDivisors.push(ones);
        }
      }
    }
  }
}

const getDividendsGroupA = () => {
  allQuotients.forEach(quotient => {
    allDivisors.forEach(divisor => {
      // Filter quotient
      // if (getDigit(quotient, 100) !== 4) {
      //   return;
      // }
      // if (getDigit(quotient, 10) === 3 || getDigit(quotient, 10) === 6 || getDigit(quotient, 10) === 9) {
      //   return;
      // }
      // if (getDigit(quotient, 1) !== 2 && getDigit(quotient, 1) !== 4) {
      //   return;
      // }

      // Check thousands digit
      const quotientHundreds = getDigit(quotient, 100);
      let temp = quotientHundreds*divisor;
      if (temp > 99999 || temp < 10000) {
        return;
      }

      // Check tens digit
      const quotientTens = getDigit(quotient, 10);
      temp = quotientTens*divisor;
      if (temp > 9999 || temp < 1000) {
        return;
      }
      const divisorThousands = getDigit(temp, 1000);
      const divisorOnes = getDigit(temp, 1);
      if (divisorThousands !== 9 || divisorOnes !== 8) {
        return;
      }

      // Check ones digit
      const quotientOnes = getDigit(quotient, 1);
      temp = quotientOnes*divisor;
      if (temp > 99999 || temp < 10000) {
        return;
      }
      if (temp > 99999 || temp < 10000 || temp % 100 !== 72) {
        return;
      }

      const dividend = quotient*divisor+97;
      if (dividend > 9799989 || dividend < 1700023) {
        return;
      }
      if (getDigit(dividend, 100000) !== 7) {
        return;
      }
      if (dividend % 100 !== 49) {
        return;
      }

      dividendsGroupA[String(dividend)] = [divisor, quotient];
    });
  });
}

const getDividendsGroupB = () => {
  allQuotients.forEach(quotient => {
    allDivisors.forEach(divisor => {
      // Filter quotient
      // if (getDigit(quotient, 100) !== 4) {
      //   return;
      // }
      // if (getDigit(quotient, 10) === 3 || getDigit(quotient, 10) === 6 || getDigit(quotient, 10) === 9) {
      //   return;
      // }
      // if (getDigit(quotient, 1) !== 2 && getDigit(quotient, 1) !== 4) {
      //   return;
      // }

      // Check thousands digit
      const quotientHundreds = getDigit(quotient, 100);
      let temp = quotientHundreds*divisor;
      if (temp > 99999 || temp < 10000) {
        return;
      }

      // Check tens digit
      const quotientTens = getDigit(quotient, 10);
      temp = quotientTens*divisor;
      if (temp > 9999 || temp < 1000) {
        return;
      }

      // Check ones digit
      const quotientOnes = getDigit(quotient, 1);
      temp = quotientOnes*divisor;
      if (temp > 99999 || temp < 10000) {
        return;
      }

      // const quotientTens = getDigit(quotient, 10);
      temp = quotientTens*divisor;
      const divisorThousands = getDigit(temp, 1000);
      const divisorOnes = getDigit(temp, 1);
      if (divisorThousands !== 9 || divisorOnes !== 8 || temp > 9999 || temp < 1000) {
        return;
      }

      temp = quotientOnes * divisor;
      if (temp > 99999 || temp < 10000 || temp % 100 !== 76) {
        return;
      }

      const dividend = quotient*divisor+67;
      if (dividend > 9799989 || dividend < 1700023) {
        return;
      }
      if (getDigit(dividend, 100000) !== 7) {
        return;
      }
      if (dividend % 100 !== 23) {
        return;
      }

      dividendsGroupB[String(dividend)] = [divisor, quotient];
    });
  });
}

const getAnswers = () => {
  allQuotients.forEach(quotient => {
    allDivisors.forEach(divisor => {
      const dividendA = quotient*divisor+97;
      const dividendB = quotient*divisor+67;

      // Filter 1: check whether the product is one of the possible dividends.
      if (!dividendsGroupA[String(dividendA)] && !dividendsGroupB[String(dividendB)]) {
        return;
      }

      console.log(quotient, divisor, dividendA, dividendB);
    });
  });
}

/* Helpers */
const getDigit = (number, digit) => {
  return Math.floor((number % (digit*10)) / digit);
}

const matchPattern = (number, pattern) => {
  if (String(number).length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    // let i = 
  }
}

const matchGcd = (a, b, pattern) => {

}

getAllQuotients();
getAllDivisors();
// console.log(allQuotients);
// console.log(allDivisors);
getDividendsGroupA();
getDividendsGroupB();
console.log(dividendsGroupA);
console.log(dividendsGroupB);

// getAnswers();
// console.log(dividends.length);
