import math
a = 3
b = 4
c = 5
n = int(input("n: "))
count = 0
i = 1
while c <= n:
    c = math.sqrt( (a*i)**2 + (b*i)**2)

    count = count + 1
    i = i + 1
count = count - 1
print(count)
