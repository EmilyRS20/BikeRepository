
CREATE DATABASE BixiBikeDB;


CREATE TABLE Tbl_Roles (
role_id SERIAL PRIMARY KEY,
role_name VARCHAR(50)
);


INSERT INTO Tbl_Roles (role_name)
VALUES ('admin');
INSERT INTO Tbl_Roles (role_name)
VALUES ('customer');
SELECT * FROM Tbl_Roles;


CREATE TABLE Tbl_Registers (
reg_id SERIAL PRIMARY KEY,

user_Name VARCHAR(50),
user_pass VARCHAR(50),
user_email VARCHAR(100)
);


INSERT INTO tbl_Registers ( user_Name, user_pass, user_email)
VALUES ( 'emily ', 'pass3', 'emily@example.com');


ALTER TABLE tbl_registers RENAME COLUMN user_name TO cust_name;
ALTER TABLE tbl_registers RENAME COLUMN user_pass TO cust_pass;
ALTER TABLE tbl_registers RENAME COLUMN user_email TO cust_email;
select * from tbl_registers;




	  
	  


CREATE TABLE Tbl_Locations (
   loc_id SERIAL PRIMARY KEY,
   loc_name VARCHAR(250)
);
    INSERT INTO Tbl_Locations (loc_name)
VALUES ( 'NDG'),
       ( 'Lasal'),
       ('West mount');
select * from Tbl_Locations;

CREATE TABLE Tbl_Bikes (
   bike_id SERIAL PRIMARY KEY,
   bike_color VARCHAR(25),
   loc_id INT,
   FOREIGN KEY (loc_id) REFERENCES Tbl_Locations (loc_id)
);

INSERT INTO Tbl_Bikes ( bike_color, loc_id)
VALUES ('blue', 1),
       ('red', 2),
       ( 'white', 3);
DELETE FROM Tbl_Bikes WHERE bike_id = 3;
ALTER TABLE tbl_bikes RENAME COLUMN bike_color TO bike_type;
UPDATE tbl_bikes SET bike_type = 'Hybrid bikes' WHERE bike_id = 1;
UPDATE tbl_bikes SET bike_type = 'Electrial  bikes' WHERE bike_id = 2;


select * from tbl_bikes;

CREATE TABLE tbl_customers (
    cust_id SERIAL PRIMARY KEY,
    cust_name VARCHAR(255) NOT NULL,
    cust_pass VARCHAR(255) NOT NULL,
    cust_email VARCHAR(255) NOT NULL,
    role_id INTEGER NOT NULL,
    FOREIGN KEY (role_id) REFERENCES tbl_roles (role_id)
);
INSERT INTO tbl_customers (cust_name, cust_pass, cust_email, role_id)
VALUES 
('Emily', '123', 'em@email.com', 1),
('mary', '222', 'mar@email.com', 2),
('maliheh', '222', 'mal@email.com', 2);


	   
	   select * from Tbl_Customers;
	   
	   
	   CREATE TABLE Tbl_Customer_Bike (
   custbikeId SERIAL PRIMARY KEY,
   cust_Id INT,
   bike_id INT,
   FOREIGN KEY (cust_Id) REFERENCES Tbl_Customers (cust_Id),
   FOREIGN KEY (bike_id) REFERENCES Tbl_Bikes (bike_id)
);



INSERT INTO Tbl_Customer_Bike (  cust_Id,bike_id)
VALUES ( 1,1),
       ( 2,2),
       (  3,2);
	   
	   select * from Tbl_Customer_Bike;
	   
	   
	   CREATE TABLE tbl_login (
    login_id SERIAL PRIMARY KEY,
    cust_email VARCHAR(255) NOT NULL,
    cust_pass VARCHAR(255) NOT NULL
);
	   


