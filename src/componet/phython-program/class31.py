# dictionaries are used in phython to store value or data in key value pairs
friends_age={
    "sameer":20,
    "shahzain":22,
    "shoaib":22,
    "sartaj":22,
    "ehsan":22
}
print(friends_age)

# accessing dictionary item
print(friends_age["sameer"])
print(friends_age["shahzain"])
print(friends_age["sartaj"])
print(friends_age["shoaib"])

# changing an item ina dictionary
friends_age["ehsan"]=23
print(friends_age["ehsan"])

friends_age["sameer"]=19
print(friends_age["sameer"])

# adding value in a dictionary
friends_age["sanan"]=23
print(friends_age)

# delete an item in a dictionary we use pop method
friends_age.pop("shoaib")
print(friends_age)

friends_age.pop("ehsan") 
print(friends_age)

# loop in a phython
student_attendance={
    "sameer":99,
    "shoaib":70,
    "shahzain":92,
    "sanan":90,
    "sohail":96,
    "sartaj":95,
}
for student in student_attendance:
    print(f"{student}: {student_attendance[student]}")