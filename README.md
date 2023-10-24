Set Up.
Note: To set up the application you must have NodeJS installed.

1. Download the zip file.

2. Extract the .zip file into a folder that you'd be able to find again. 

3. Next open Visual Studio Code. If you do not have this downloaded here is a link: https://code.visualstudio.com/

4. Once downloaded, open it and head to "File > Open Folder", and locate the place you extracted the .zip folder into.
(You can use the shortcut "Ctrl + O" to open a folder)

5. When you've opened the file you should see the 2 folders called frontend and backend.

6. Head to "Terminal > New Terminal".
(You can use "Ctrl + '"(current) or "Ctrl + Shift + '"(new) to open the terminal).

7. Head to the backend directory by entering "cd (name of the folder)" in the terminal. In this case enter "cd backend".
(You can you "cd ../" to go back a directory).

8. Inside the backend directory enter the command "npm i" in the terminal.

9. When the process is completed you can enter the command "npm start" and you'll see that the server has started running.
Note: If it dosen't start up, you may need to change the port number in the .env file.

10. Open up a new terminal and repeat the steps 7-9 for the "frontend" folder.

11. Finally when a broswer tab has opened up, enter the name of a country you'd like to see.

IMPORTANT NOTES:

If you'd like to deploy the frontend there's a build folder that you can use.
Backend you can deploy normally.

A proxy server is used when sending the requests in the frontend. It can be viewed in "frontend > package.js".

If you change the PORT number in "backend > .env" file you'll need to change the port number in "frontend > package.js".
