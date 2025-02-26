import tkinter as tk
from tkinter import messagebox

# Function to check login credentials
def check_login():
    username = entry_username.get()
    password = entry_password.get()
    
    # Predefined credentials (for simplicity)
    correct_username = "user"
    correct_password = "pass"
    
    if username == correct_username and password == correct_password:
        messagebox.showinfo("Login Successful", "Welcome, you have successfully logged in!")
    else:
        messagebox.showerror("Login Failed", "Incorrect username or password!")

# Create main window
root = tk.Tk()
root.title("Login Form")

# Set window size
root.geometry("300x200")

# Create and place labels, entry fields, and button
label_username = tk.Label(root, text="Username:")
label_username.pack(pady=5)

entry_username = tk.Entry(root)
entry_username.pack(pady=5)

label_password = tk.Label(root, text="Password:")
label_password.pack(pady=5)

entry_password = tk.Entry(root, show="*")  # show="*" hides the password
entry_password.pack(pady=5)

login_button = tk.Button(root, text="Login", command=check_login)
login_button.pack(pady=20)

# Start the GUI main loop
root.mainloop()
