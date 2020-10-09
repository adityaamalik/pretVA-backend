# pretVA-backend
Server side code for PretVA internship assignment

Prerequisites for your local machine : 

1. Node and NPM should be installed on the local machine
2. MongoDB should be setup for your machine

Before running the app : 

1. Make sure your mongodb daemon process is running in the background

2. mongodb should be accessible on port 27017 (default port for mongodb)

3. MongoDB Compass should be installed for better UI experience for DB management

4. Project includes "product_data.json" file, make a database named "productDB" and a collection named "products" inside it. Note : Exact naming is very very important. After creating the database and the collection, click on Import data button and select the "product_data.json" file.

To run the app : 

1. Go to project directory
2. run command : "node app.js"
