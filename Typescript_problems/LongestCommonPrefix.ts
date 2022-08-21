function longestCommonPrefix(strs: string[]): string {

    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }

    let minLength = Infinity;
    strs.forEach((str) => {
        minLength = minLength > str.length ? str.length : minLength;
    });
    let count = 0;
    let isCount = true;
    for (let i = 0; (i < minLength) && isCount; i++) {
        count = count + 1;
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] !== strs[j + 1][i]) {
                count = count - 1;
                isCount = false;
                break;
            }
        }
    }
    return strs[0].substring(0, count);
};