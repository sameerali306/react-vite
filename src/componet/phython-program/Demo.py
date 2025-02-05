print("phython first pprogram")
# Simple Python Program to calculate the year of birth

# Ask for user input
name = input("Enter your name: ")
age = int(input("Enter your age: "))

# Get the current year
from datetime import datetime
current_year = datetime.now().year

# Calculate year of birth
birth_year = current_year - age

# Display the result
print(f"Hello {name}! You were born in {birth_year}.")

# Function to calculate the grade based on the percentage
def calculate_grade(percentage):
    if percentage >= 90:
        return 'A+'
    elif percentage >= 80:
        return 'A'
    elif percentage >= 70:
        return 'B+'
    elif percentage >= 60:
        return 'B'
    elif percentage >= 50:
        return 'C+'
    elif percentage >= 40:
        return 'C'
    else:
        return 'Fail'

# Function to calculate and display the marksheet
def marksheet():
    print("Enter the number of subjects:")
    num_subjects = int(input())  # Get the number of subjects
    
    total_marks = 0
    max_marks = 100  # Assuming each subject has a maximum of 100 marks
    
    subjects = []
    
    # Input marks for each subject
    for i in range(num_subjects):
        print(f"Enter the marks for subject {i + 1}:")
        marks = float(input())
        subjects.append(marks)
        total_marks += marks

    # Calculate the percentage
    percentage = (total_marks / (num_subjects * max_marks)) * 100
    
    # Get the grade based on the percentage
    grade = calculate_grade(percentage)

    # Display the results
    print("\n------ Marksheet ------")
    for i, marks in enumerate(subjects):
        print(f"Subject {i + 1}: {marks} marks")
    
    print(f"Total Marks: {total_marks}/{num_subjects * max_marks}")
    print(f"Percentage: {percentage:.2f}%")
    print(f"Grade: {grade}")

# Run the marksheet program
marksheet()
