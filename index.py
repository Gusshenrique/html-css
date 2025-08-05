import re

fname = input("Enter file name: ")
total = 0
count = 0

with open(fname, 'r') as fh:
    for line in fh:
        nums = re.findall(r'\d+', line)
        count += len(nums)
        total += sum(map(int, nums))

print(f"There are {count} values with a sum = {total}")
# python sum_numbers.py # type: ignore
        
