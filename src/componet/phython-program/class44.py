# class Student:
#     name="sameer ali"
# s1=Student()    
# print(s1.name)
# class Car:
#     color="red"
#     brand="mercedes"
# car1=Car()    
# print(car1.color)
# print(car1.brand)
class Student:
    # name = "sameer ali"
    
    def __init__(self,fullname,marks):
       self.name=fullname
       self.marks=marks
       print("I am init function")


# Create an instance of the Student class
s1 = Student("sameer ali",90)
print(s1.name,s1.marks)
s2=Student("shahzain",79)
print(s2.name,s2.marks)
s3=Student("ehsan",70)
print(s3.name,s3.marks)