function twoSum(nums: number[], target: number): number[] {
    let prevMap = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in prevMap) {
            return [prevMap[diff], i]
        }
        prevMap[nums[i]] = i;
    }
    return [];
};