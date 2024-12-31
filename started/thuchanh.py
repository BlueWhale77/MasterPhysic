a=int(input('nhập a '))
b=int(input('nhập b '))
for i in range(a,1,-1):
    if (a%i==0) and (b%i==0):
        ucln=i
        break
print('BCNN là ',(a*b)/ucln)    
        