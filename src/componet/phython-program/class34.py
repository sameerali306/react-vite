~dictionary={
    "cat":"a small animal",
    "table":["a piece of ferniture","a number of fact and figures"]

}
# print(dictionary)

# subject={
#     "phython","c++","java","javascript"
# , "php","phython","java","php"}
# print(subject)
# print(len(sub))


marks={}
x=int(input("Enter your math marks :"))
marks.update({"math":x})

x=int(input("Enter your phy marks :"))
marks.update({"phy":x})

x=int(input("Enter your eng marks :"))
marks.update({"eng":x})

x=int(input("Enter your urdu marks :"))
marks.update({"urdu":x})

print(marks)