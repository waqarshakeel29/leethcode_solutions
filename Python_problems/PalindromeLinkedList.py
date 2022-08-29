# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        pointer = head
        stack = []
        while pointer != None:
            stack.append(pointer.val)
            pointer = pointer.next
            
        while head != None:
            if(head.val != stack.pop()):
                return False
            head = head.next
        return True