class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def avg(self):
        sum = 0  # Initialize sum as an integer with value 0
        for val in self.marks:
            sum += val
        print("Hi", self.name, "your avg score is", sum / len(self.marks))  # Use len(self.marks) for dynamic calculation

s1 = Student("Sameer", [90, 89, 88])
s1.avg()

s2= Student("akash alam", [90, 90, 98])          
s2.avg() 

s3=Student("shahzain",[78,87,60])
s3.avg()
