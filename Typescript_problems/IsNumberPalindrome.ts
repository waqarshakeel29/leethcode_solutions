function isPalindrome(x: number): boolean {
    // hint: reverse the number and compare with actual number;
    if (x < 0) {
        return false;
    }
    const n = x;
    let rev = 0;
    do {
        const digit = x % 10;
        rev = (rev * 10) + digit;
        x = Math.trunc(x / 10);
    } while (x !== 0);
    return n === rev ? true : false;
};


function isPalindromeAnotherApprocach(x: number): boolean {
    const n = x.toString();
    let rev = '';
    for (let i = n.length - 1; i >= 0; i--) {
        rev = rev + n[i];
    }
    return n === rev ? true : false;
};