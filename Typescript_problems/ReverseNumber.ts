function reverse(x: number): number {
    let rev = 0;
    do {
        const digit = x % 10;
        rev = (rev * 10) + digit;
        x = Math.trunc(x / 10);
    } while (x !== 0);

    if (rev < (-(2 ** 31)) || rev > ((2 ** 31) - 1)) {
        return 0;
    }

    return rev;
};