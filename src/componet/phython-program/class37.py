def show(n):
    if n==0:
        return
    print(n)
    show(n-1)
show(10)    

def remove(string):
  # Base Case
  if not string:
      return ""

  # Recursive Case
  if string[0] == "\t" or string[0] == " ":
      return remove(string[1:])
  else:
      return string[0] + remove(string[1:])

# Driver Code
print(remove("Hello\tWorld"))