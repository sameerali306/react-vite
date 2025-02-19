dictionary={
    "name":"sameer",
    "marks":{
        "math":80,
        "chemistry":73,
        "biology":65,
    }
}
print(dictionary["name"])
print(dictionary["marks"]["chemistry"])
print(dictionary["marks"]["math"])

# to find number of keys
print(list(dictionary.keys()))
print(len(dictionary))

# dictionary value
print(list(dictionary.values()))

# dictionary.items can return our value in the form of tuple
print(dictionary.items())
# this both return the same value but when we print the value which is not exist the first will return an error while the the second will not return an error but it rturn none
print(dictionary["name2"])
print(dictionary.get("name2"))


# if we want to add any new value to our dictionary we can use  update
dictionary.update({"city":"gigit"})
print(dictionary)