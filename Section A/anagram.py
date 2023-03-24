
def groupAnagrams(strs: list) -> list:
    """A function that takes a list of strings and returns a list of grouped anagrams"""
    # initialise an empty dictionary to store anagram groups
    result = {}

    if not isinstance(strs,list):
        print(f'Invalid Input: List argument expected but got {type(strs)}')
        return
    for i in strs:
        # sort the current string and use it as a key for the result dictionary
        x = "".join(sorted(i))
        if x in result:
            result[x].append(i)
        else:
            result[x] = [i]
    return list(result.values())

print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))