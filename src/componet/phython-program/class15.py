a=int(input("Enter first number :"))
b=int(input("Enter second number :"))
c=int(input("Enter third number :"))
d=int(input("Enter fourth number :"))

if(a>b and b>c and c>d):
    print("your first number is greater :",a)
elif(b>c and c>d ):
    print("The value of your second number is greater :",b)
elif(c>d):
    print("the value of third number is greater :",c)
else:
    print("the value of our fourth number number is greater :" ,d)
