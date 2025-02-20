# set in phython
my_set={"helllo",3,"hi",23}
print(my_set)

# we can cheack weather an item in a set or not by in
print(2 in my_set)
print("hi" in my_set)
print(22 in my_set)

# we can print the length of set by len method but length can ignore the duplicate item in a set
print(len(my_set))

# we can make an empty set by following
collection=set()
print(type(collection))
collection.add(1)
collection.add("hi")
collection.add("hello")
collection.add(43)
print(collection)
collection.remove(43)
collection.remove(1)
print(collection)
# we can clean the set by clear method
collection.clear()
print(len(collection))

# pop can remove any element in set
print(my_set.pop())

# the union method i set are work similer in math it give all element by ignoring the repeteded element aND TREATED AS A SINGLE VALE
set1={1,4,5,5}
set2={2,3,6,5,1,7}
print(set1.union(set2))
print(set1.intersection(set2))