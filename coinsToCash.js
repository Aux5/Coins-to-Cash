const piggyBank ={
    pennies:342,
    nickels: 245,
    dimes: 400,
    quartars: 182,
}
dollarAmount = ((piggyBank.quartars*25+piggyBank.dimes*10+piggyBank.nickels*5+piggyBank.pennies)/100)
console.log(dollarAmount)