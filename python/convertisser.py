for x in range(10) :
  i = int(input("• 1 decimal / 2 binaire / 3 hexadecimal"))
  
  if i == 1 :
    k = int(input("• 1 pour convertir en binaire / 2 pour convertir en hexadecimal"))
    
    if k == 1 :
      x = int(input("• entrer l'octet"))
      while x > 0 :
        y = x % 2
        print (y)
        x = x // 2
        
    elif k == 2 :
      x = int(input("• entrer l'octet"))
      while x != 0 : 
        y = x % 16 
        if y == 0 : 
          print (y) 
        elif y == 1 : 
          print (y) 
        elif y == 2 : 
          print (y) 
        elif y == 3 : 
          print (y) 
        elif y == 4 : 
          print (y) 
        elif y == 5 : 
          print (y) 
        elif y == 6 : 
          print (y) 
        elif y == 7 : 
          print (y) 
        elif y == 8 : 
          print (y) 
        elif y == 9 : 
          print (y) 
        elif y == 10 : 
          print ("A")
        elif y == 11 : 
          print ("B") 
        elif y == 12 : 
          print ("C") 
        elif y == 13 : 
          print ("D") 
        elif y == 14 : 
          print ("E") 
        elif y == 15 : 
          print ("F") 
        x = x // 16 
        
  elif i == 2 :
    k = int(input("• 1 pour convertir en decimal / 2 pour convertir en hexadecimal"))
    
    if k == 1 :
      binaire = input("• entrer l'octet")
      decimal = 0
      puissance = len(binaire) - 1
      for chiffre in binaire:
        if chiffre == "1":
          decimal += 2**puissance
        puissance -= 1
      print(decimal)
      
    elif k == 2 :
      binaire = input("• entrer l'octet")
      x = 0
      puissance = len(binaire) - 1
      for chiffre in binaire:
        if chiffre == "1":
          x += 2**puissance
        puissance -= 1
      while x != 0 : 
        y = x % 16 
        if y == 0 : 
          print (y) 
        elif y == 1 : 
          print (y) 
        elif y == 2 : 
          print (y) 
        elif y == 3 : 
          print (y) 
        elif y == 4 : 
          print (y) 
        elif y == 5 : 
          print (y) 
        elif y == 6 : 
          print (y) 
        elif y == 7 : 
          print (y) 
        elif y == 8 : 
          print (y) 
        elif y == 9 : 
          print (y) 
        elif y == 10 : 
          print ("A")
        elif y == 11 : 
          print ("B") 
        elif y == 12 : 
          print ("C") 
        elif y == 13 : 
          print ("D") 
        elif y == 14 : 
          print ("E") 
        elif y == 15 : 
          print ("F") 
        x = x // 16 
        
  elif i == 3 :
    k = int(input("• 1 pour convertir en binaire / 2 pour convertir en decimal"))
    
    if k == 1 :
      hexa = input("• entrer l'octet")
      n = 0
      puissance = len(hexa) - 1
      for chiffre in hexa:
        if chiffre == "0":
          x = 0
        elif chiffre == "1":
          x = 1
        elif chiffre == "2":
          x = 2
        elif chiffre == "3":
          x = 3
        elif chiffre == "4":
          x = 4
        elif chiffre == "5":
          x = 5
        elif chiffre == "6":
          x = 6
        elif chiffre == "7":
          x = 7
        elif chiffre == "8":
          x = 8
        elif chiffre == "9":
          x = 9
        elif chiffre == "A":
          x = 10
        elif chiffre == "B":
          x = 11
        elif chiffre == "C":
          x = 12
        elif chiffre == "D":
          x = 13
        elif chiffre == "E":
          x = 14
        elif chiffre == "F":
          x = 15
        n += x*16**puissance
        puissance -= 1
      while n != 0 :
        y = n % 2 
        print (y)
        n = n // 2
        
    elif k == 2 :
      hexa = input("• entrer l'octet")
      decimal = 0
      puissance = len(hexa) - 1
      for chiffre in hexa:
        if chiffre == "0":
          x = 0
        elif chiffre == "1":
          x = 1
        elif chiffre == "2":
          x = 2
        elif chiffre == "3":
          x = 3
        elif chiffre == "4":
          x = 4
        elif chiffre == "5":
          x = 5
        elif chiffre == "6":
          x = 6
        elif chiffre == "7":
          x = 7
        elif chiffre == "8":
          x = 8
        elif chiffre == "9":
          x = 9
        elif chiffre == "A":
          x = 10
        elif chiffre == "B":
          x = 11
        elif chiffre == "C":
          x = 12
        elif chiffre == "D":
          x = 13
        elif chiffre == "E":
          x = 14
        elif chiffre == "F":
          x = 15
        decimal += x*16**puissance
        puissance -= 1
      print(decimal)