# DrugMan
This is DrugMan(ager). A sample of a system to manage drugstores.

# Running

Download and install [NodeJS](https://nodejs.org/en/download/).

Install bower to manage client dependencies :
```
$npm install -g bower
```

Clone this repo:
 ```
 $git clone git@github.com:arthurstomp/drugman.git
 ```

Install dependencies:
```
$cd drugman/
$cd server/
$npm install
.
.
.
$cd ../client/
$bower install
```

Run server (be sure that you have an instance of Mongodb running)
```
$cd ../server/
$node server.js
```
