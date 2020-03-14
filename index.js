const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
var port = '3000'

app.listen(port, () => {
    console.log('Server started on port '+port);
});

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'anuj@123',
    database : 'employeesdb',
    multipleStatements: true
});

db.connect((err) => {
    if(err) throw err;
    console.log('employeesdb Connected...');
});

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE employeesdb';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE employeesList(EmpID int AUTO_INCREMENT, Name VARCHAR(255), Email VARCHAR(255), Salary int , PRIMARY KEY(EmpID))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('employeesList table created...');
    });
});

app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employeesList', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/createEmployees',(req,res)=>{
	res.sendFile(__dirname+'/static/createEmployees.html')
});

app.post('/createEmployees',(req,res)=>{
	console.log(req.body)
	let emp = {
		"Name": req.body.Name,
		"Email": req.body.email,
		"Salary": req.body.salary
	}
    var sql = 'INSERT INTO employeesList SET ?'
    db.query(sql, emp, (err, rows, fields)=>{
    	if(err) throw err;
        else{
        	res.send(rows);
            console.log(rows);
        }
    })
});

app.get('/getEmployeeDetails',(req,res)=>{
	res.sendFile(__dirname+'/static/searchEmployee.html')
})

app.post('/getEmployeeDetails',(req,res)=>{
	console.log(req.body)
	let emp = req.body
	if(emp.option == 'Less than'){
		var sql = 'SELECT * FROM employeesList WHERE Salary <= ?';
	}
	else if(emp.option == 'More than'){
		var sql = 'SELECT * FROM employeesList WHERE Salary >= ?';
	}
	db.query(sql, [emp.salary],(err,rows,fields)=>{
		if(err) throw err;
		else{
        	// res.send('The Number of Employees with salary '+emp.option+' Rs. '+emp.salary+' are '+rows.length);
        	res.send(rows);
        	console.log(rows);
        }
	})
})