f=open("cars.txt","r")
lin1=f.read()
print(lin1)

f=open("car_models.txt","r")
lin2=f.read()
print(lin2)

f=open("color.txt","w")
f.write("green\n")
f.write("yellow\n")
f.close()

f=open("color.txt","r")
line=f.read()
print(line)
f=open("color.txt","w")
f.write("i  am from gilgit")
f.close()