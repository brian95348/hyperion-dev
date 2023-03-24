
Code Review

### General comments

1. The code is missing commentary, which is critical for explaining not-so-easy-to-understand parts of the code.
2. Class name is not fully concise. Even though it is easy to pronounce it doesnt reflect the class' intended functionalities
3. The class is lacking funtionality that can give other code readers more intuitive information about this class. This includes dunder methods like \__repr__ and \__str__
4. The instance method groupAnagrams does not have logic for handling edge cases i.e when the input isn't an array, no argument


### Line comments

1. line 2-10: Incorrect indentation
2. line 5: Sorted argument is missing an argument, which should be i in this case

### Recommendations

Since the class does not have other methods ( instance, static ) using it  with only 1 instance is overkill, the solution should be refactored using a function