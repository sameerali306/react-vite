n=int(input("Enter a number :"))
i=1
while i <= 10:
    print(n*i)
    i +=1
print("your enter number table print successfully")    


nums=[1,4,6,7,8,9,1,12,16,37,0,87]
index=0
while index < len(nums):
    print(nums[index])
    index +=1
print("you are out of the loop")    

student=["sameer","faria","shakeel","shoib","karim","jamil","karian","nafeesa"]
index=0
while index <len(student):
    print(student[index])
    index +=1
print("Your student print successfully")    


nums=(45,34,2,3,4,78,90,0,23,3,)
x=78
i=0
while i <len(nums):
    if(nums[i]==x):
        print("numbr found at index",i)
    else:
        print("finding")
    i +=1

    