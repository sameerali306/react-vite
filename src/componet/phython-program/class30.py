from tkinter import *
from tkinter import messagebox

def login():
    UserName = entry1.get()
    password = entry2.get()

    if UserName == "" and password == "":
        messagebox.showerror("Login", "Blanks are not allowed")
    elif UserName == "sameer" and password == "12345":  # Password is a string "12345"
        messagebox.showinfo("Login", "Login is successful")
        root.destroy()
        top = Tk()
        top.configure(bg="#f5f5f5")
        Label4 = Label(top, text="Welcome!", font=("Arial", 30), bg="#f5f5f5", fg="green")
        Label4.place(relx=0.5, rely=0.5, anchor="center")
        top.geometry("400x300")  # Set size for the second window
        top.mainloop()  # Start the new window
    else:
        messagebox.showerror("Login", "Username and password are incorrect")

root = Tk()
root.configure(bg="#00bfff")  # Light cyan background
root.geometry("800x600")  # Set the size of the window

# Title label with a nice font
Label1 = Label(root, text="Login Page", bg="#00bfff", fg="white", font=("Arial", 26, "bold"))
Label1.place(relx=0.5, rely=0.1, anchor="center")

# Username label and entry field
Label2 = Label(root, text="Username:", font=("Arial", 18), bg="#00bfff", fg="white")
Label2.place(x=220, y=200)

entry1 = Entry(root, font=("Arial", 16), bd=2, relief="solid")
entry1.place(x=400, y=200, width=250)

# Password label and entry field
Label3 = Label(root, text="Password:", font=("Arial", 18), bg="#00bfff", fg="white")
Label3.place(x=220, y=270)

entry2 = Entry(root, font=("Arial", 16), bd=2, relief="solid", show="*")
entry2.place(x=400, y=270, width=250)

# Login Button with a more visible style
Button1 = Button(root, text="Login", bg="#32cd32", font=("Arial", 16), bd=5, fg="white", command=login)
Button1.place(x=400, y=350, width=250, height=40)

# Centering the window
root.eval('tk::PlaceWindow %s center' % root.winfo_toplevel())
root.mainloop()
