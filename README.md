
# Jane Street November 2021 Puzzle Solution

This README doccuments the methods used to solve the Jane Street puzzle for November 2021.


## Puzzle
![alt text](https://www.janestreet.com/puzzles/2021-11-01-split-division-2.png)

Two long division problems were calculated, and both problems had the exact same shape. At some places, the digits from the two problems were both positive and had a greatest common divisor that was larger than 1. All of those spots are marked with their respective GCDs.

The answer to this puzzle is the sum of the two 7-digit dividends in the completed long division problems.
# Manual Analysis

While one could theoretically code a filter for each digit it would take a ridicoulus amount of time and effort as well as potentially taking too long
to computer the answer or using too many computing resources. Thus the most efficient way to find the answer is to first use logical deduction 
to "fill in the blanks" for certain digits. 

The first logical deduction is that if two numbers have a GCD that is 5 or larger then both values are equal to the GCD. Thus for each digit in the
puzzle that is 7, 8, 9 is known. 

Next we can deduce the digits above the 7, the only combinations of a multiple of 3 subtracted by a multiple of 2 are 3 (13) - 6 and 9 - 2.
From here we split the potential digits into groups A and B, because one of the operations carries over thus resulting in different values
for the second digits of the 3 bottom lines. 

## Group A
Let group A be for if the 7 in the remainder was found by 9 - 2. We deduce that for the second digit of the remainder to be a multiple of 3, it 
must be the result of 6 - 7 as all the other multiples of 2 subtracted by 7 result in number that doesnt match the GCD of the digit. Now we work up rest
of the second column verticaly. The only number that results in 6 when subtracted by 8 is 14 so the digit above the 8 is 4 and we can also
extrapolate that to meaning the second digit of the dividend. The only other deduction that we can reasonably make now is that for line 4 (counting from bottom)
to be a 4 digit number the line above it has to lead with 1, otherwise the highest order digit will still remain aftrer subtraction of any integer.

Thus we get this long division table: 
![altext](https://i.imgur.com/s6maKYB.jpg)

## Group B
Let group B be for if the 7 in the remainder was found by 13 - 6.
