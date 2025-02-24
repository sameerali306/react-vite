def fact(n):
    if(n==1 or n==0):
        return 1
    return fact(n-1)*n
print(fact(7))

def add(n):
    if(n==0):
        return 
    return(n-1)+n
sum=add(5)
print(sum)