function maximumWealth(accounts: number[][]): number {
    const l: number[] = [];
    accounts.forEach((customer) => {
        l.push(customer.reduce((values, init) => values + init));
    });
    return Math.max(...l);
};