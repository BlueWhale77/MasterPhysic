list1=[i for i in input().split()]
m=len(list1)
kq=0
h=int(list1[0])
v=int(list1[2])
for i in range(1,m):
    c=list1[i]
    if (c!='+') and (c!='-') and (c!='*') and (c!='/'): 
      h=int(list1[i])
      v=int(list1[i+2])
    if c=='*':
        tinh=h*v
        kq=kq+tinh
    elif c=='/':
        tinh=h/v
        kq=kq+tinh
print(kq)                                                                                              