
## ReadME

### What this app does?

This is a Node.js + Typescript application takes a numeral (just digits without separators (e.g. 19093 instead of 19,093) and returns the standard way of reading a number, complete with punctuation.

### Installing the app

Clone the git repo. Run the script: __npm install__ inside the __Section C__ root folder to install all the required dependencies.

### Running the app
Navigate to the __Section C__ folder from the project root using the terminal. Run the script: __npm start__
from your terminal. The program will launch on the terminal, with an open __stdin__ for the user to enter input. The program uses
__ts-node__ which is a JIT transformer hence there is no need for pre compiling.

### Exiting the program
Press __Ctrl + C__ to stop the program and close the terminal

### Running the test suite
Before running the test suite comment out the __while__ statement block from the __index.ts__ file so that __jest__ doesnt run the
application. The final step is to run the script: __npm run test__ from your terminal.

