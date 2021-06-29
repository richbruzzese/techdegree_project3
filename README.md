# techdegree_project3
 Interactive Form project for unit 3 of the tech degree

Form function:
User registeration for a Full Stack Conference.  User will provide a name, Tshirt Info, Email, and job role.
Afterwhich user will select an activity and provide payment information

Error Handling:
User must provide a name, email, an activity and payment details
If details missing then error messaging will display on form fields.

Real Time Error Handling:
If user selects an activity that conflicts with another one at the same time, they will be prevented from selecting
a conflicting activity

-  Email Address validation -
Email Address field will validate in real time.  Event Listener will check the field after an input is detected in 
Email Address Field. A few errors will display based on specific criteria:

Email can't be blank - displays if input field is found to be empty
Email must contain @ - will display if user submits an email address without an @ symbol present
Email invalid - This error will handle any other event that would validate the inputTest false.