import copy

# A class to represent an object
class Person:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address

    def __str__(self):
        return f'{self.name}, {self.age} years old, Address: {self.address}'

# Creating an original Person object
original_person = Person("Alice", 30, {"city": "New York", "zip": "10001"})

# Shallow clone
shallow_clone = copy.copy(original_person)

# Deep clone
deep_clone = copy.deepcopy(original_person)

# Modifying the address in the original object
original_person.address["city"] = "Los Angeles"

# Output the results
print("Original Person:", original_person)
print("Shallow Clone:", shallow_clone)
print("Deep Clone:", deep_clone)
