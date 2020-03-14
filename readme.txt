This Project will let you add employee details to locally running mysql database.

Please follow these steps to execute the code.

+++++++++++++++++++++++++++++++++README++++++++++++++++++++++++++++++++++++++++++++

Step1. You should have node js & mysql installed on computer and both should be running.
Step2. Your mysql db should have user as <root> and password as <anuj@123>.
Step3. Run the index.js file using <node index.js> to run the code.
Step4. Head to <http://localhost:3000/createdb> on your browser to create a schema/db name as <employeesdb>
Step5. Head to <http://localhost:3000/createtable> on your browser to create a Table named <employeesList>
Step6. Head to <http://localhost:3000/createEmployees> on your browser to create entries for your employees & click Submit. This can be done as many times as you want.
Step7. Head to <http://localhost:3000/getEmployeeDetails> on your browser to get details for employees with salary (Less than/More than) and enter the Salary and click submit which will return you all the employee details which have salary according to your selection from the Table(employeesList).
(optional)Step8. Head to <http://localhost:3000/employees> which will retun you all the entries in the Table(employeesList)


++++++++++++++++++++++++++++++END++++++++++++++++++++++++++++++