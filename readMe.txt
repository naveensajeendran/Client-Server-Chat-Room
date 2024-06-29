Name: Naveen Sajeendran
Student Number: 101252826
Course: COMP 2406 A
Assignment: Assignment 3

node -v: v18.13.0
npm -v: 8.19.3
OS: Windows 11 Home

Install: npm install node-v18.13.0 LTS

Launch instructions:
	1) When you open folder COMP2406A3NaveenSajeendran, right click on there 
	   and select open in terminal
	2) Once you've opened terminal enter the following command:
		2.1) npm install so you can add the node_modules folder for socket.io
		2.2) after npm install is executed then you can run the following command: node server.js
	3) It will then give the following
	      Server Running at PORT 3000  CNTL-C to quit
		To Test
		http://localhost:3000/chatClient.html

		3.1) Visit: http://localhost:3000/chatClient.html
		

	4) Holding the control key, press the link 
		4.1) If you want to have multiple screens open, visit the link on different tabs and follow the next steps	

	5) Go to chrome or default browser and from there it will show a Messages header and right below is a Register User box where you write your name and then hit enter or press connect as

	6) Once you are connected to the server then the text box to type a message will open

	7) Now that you have joined the CHAT Server on a few screens, the following can be possible
		7.1) Enter a chat and it will appear blue on the sender's screen and black on the other screens
		7.2 Enter another person's name in the chat box and use the colon key and it will send a private message to that user only and for both the sender and receiver, the text will appear as red. (EXAMPLE : John:Hey or John : Hey or John: Hey)
		7.3) If you enter one name then a comma then another name and keep going until a colon key is entered followed by a message after, that will result in a private group message being created and for the sender and receiver, the text will appear in red. (EXAMPLE : John, Adam, Bob : Hey or John,Adam,Bob:Hey or John , Adam , Bob : Hey
		7.4) If a user wants to clear their message board, then they can press the clear button and it will clear all the messages on their screen but not for the other screens in the chat.

Any Issues Present:
- Not entirely sure if it was a requirement but if the user enters a private message and the receiver gets it, they still have to enter the senders name then the colon to respond as a private message back to them.
I wasnt able to figure out a way to change back to public mess

		



