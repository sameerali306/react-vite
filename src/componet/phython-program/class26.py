# i=1
# while i<=5:
#     print(i)
#     if(i==3):
#         break
#     i +=1
# print("Your loop is break temperiory")    


nums = [1, 23, 43, 56, 98, 1, 5, 78, 23, 54]
x = 5
i = 0
while i < len(nums):
    if nums[i] == x:
        print("FOUND at index", i)
    i += 1  # Increment the index to avoid an infinite loop
