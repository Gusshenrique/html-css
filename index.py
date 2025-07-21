import re

# Abrir o arquivo
name = input("Enter file: ")
if len(name) < 1:
    name = "regex_sum_2260041.txt"

handle = open(name)
text = handle.read()

# Encontrar todos os números usando regex
numbers = re.findall('[0-9]+', text)

# Converter para inteiros e somar
total = 0
for number in numbers:
    total += int(number)

# Imprimir o resultado
print(total)

# Fechar o arquivo
handle.close()