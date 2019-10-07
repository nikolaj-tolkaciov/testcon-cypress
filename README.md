# testcon-cypress
## _Tutorial_
## How to?
### 1. Clone via Sourcetree

1. Click [Clone/New] button
2. Copy paste "https://github.com/nikolaj-tolkaciov/testcon-cypress.git" into [Source Path / URL] input
3. Input your desired path to store the repository on your local machine into [Destination Path] input 
4. Click the [Clone] button

### 2. Install

1. (Prerequisites) Install <a href="https://nodejs.org/en/download/">NodeJS</a> 
2.  
    * Navigate to your local ***testcon_cypress*** repository directory that you selected in _part 1_, click on the address/navigation bar, type 'cmd' and click Enter 
    * -OR-
    * Open your command line/terminal by clicking [Windows] keyboard key, typing "cmd" and then navigate to your local ***testcon_cypress*** repository directory through the terminal: write ***cd*** and insert the full (or relative) path of your local ***testcon_cypress*** repository directory
3. Run the ***npm run setup*** command

### 3. Run tests

1. Navigate to your local ***testcon_cypress*** repository via File Explorer
2. Enter the _helpers_ folder and open _credentials.js_
3. Enter the credentials provided in the workshop and save the file
4. In cmd navigate to your local ***testcon_cypress*** repository directory (you should already be there if you've just completed _part 2_)
5. Run the ***npm run cypress:open*** command
6. In the open Cypress window click on _login.js_ on the left
7. Watch as Cypress does the testing for you :)
