# fruits=["mango","apple","grape","orange","banana","pineapple"]
# for value in fruits:
#     print(value)


# str="you are best for each other"    
# for char in str:
#     if(char=="b"):
#         print("b is found")
#         break
#     print(char)

nums=[1,4,9,16,35,56,100,98,45]

for num in nums:
    print(num)

nums = [1, 4, 9, 16, 35, 56, 100, 98, 45]
index = 0
x = 100
for num in nums:
    if num == x:
        print("FOUND at index", index)
    index += 1
