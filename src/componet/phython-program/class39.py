cars= input("what is the model of your car?")

file= open('cars.txt','w')
file.write(f'{cars}\n')
file.close()

# Open the file in write mode and add content
file = open('car_models.txt', 'w')  # Open file in write mode
file.write("Toyota Corolla\n")  # Write a car model to the file
file.write("Honda Civic\n")     # Write another car model to the file
file.close()  # Close the file after writing

file = open('cars.txt', 'r')
content = file.read()
print(content)
file.close()


import os

if os.path.exists('car_models.txt'):
    file = open('car_models.txt', 'r')
    content = file.read()
    print(content)
    file.close()
else:
    print("File does not exist!")

with open("cars.txt", "r") as file:
    lines = file.readlines()

for line in lines:
    print(f"My car is a, {line.rstrip()}")
