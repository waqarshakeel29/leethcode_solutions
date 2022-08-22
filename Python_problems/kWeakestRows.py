class Solution(object):
    def kWeakestRows(self, mat, k):
        """
        :type mat: List[List[int]]
        :type k: int
        :rtype: List[int]
        """
    
        sumOfRows = [sum(x) for x in mat]
        sortedSumOfRows = sorted(sumOfRows)[:k]
        minList = []
        for x in sortedSumOfRows:
            index = sumOfRows.index(x)
            if index in minList:
                sumOfRows[index] = 99999999
                index = sumOfRows.index(x)
            minList.append(index)
        return minList
        