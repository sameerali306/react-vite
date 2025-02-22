# default parameter
def function(a=0,b=0):
    print(a*b)
function()  

cities=["karachi","lahore","faisalabad","islamabad"]
studen=["sameer","shahzain","shoaib","sartaj","ehsan","sageer","sharaz","izhar","mohsin","sohail"]
def length(list):
    print(len(list))
length(cities)    
length(studen)

country=["pakistan","america","bretain","india"]
def function(country):
    print(len(country))
function(country) 

def function(list):
    for item in list:
        print(item,end="\n")
function(country)

def function(list):
    for item in list:
        print(item , end="\n")
function(studen)        
   
def paisa(USD_value):
    INR_value=USD_value*83
    print(USD_value , "USD=" , INR_value,"INR")
paisa(100) 

def converter(USD_value):
    PAK_value=USD_value*270
    print(USD_value,"USD=",PAK_value,"PAK")
converter(4)    

def rupy(ARB_value):
    PAK_value=ARB_value*62
    print(ARB_value,"ARB=",PAK_value,"PAK")
rupy(10)    