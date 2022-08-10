import random
from js import document

def MillerRabin(n):
    if n==0 or n==1:
        return False
    
    t = n-1
    s = 0
    
    while not t%2:
        t = t//2
        s += 1
    
    b = random.randrange(1,n)
    
    y = pow(b, t, n) 
    
    if not (y-1)%n:
        return True
        
    for i in range(s):
        if not (y+1)%n:
            return True
        y = pow(y, 2, n)
    
    return False

def itMillerRabin(n,m):
    for i in range(m):
        if not MillerRabin(n):
            return "not a prime :("
    return "probably a prime ¯\_(ツ)_/¯ "

def mr(e):
    inp = document.getElementById("input_number").value
    pyscript.write("her_du", itMillerRabin(int(inp),10))