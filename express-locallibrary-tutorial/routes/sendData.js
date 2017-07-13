var express = require('express');
var router = express.Router();
var session = require('express-session');
// Require controller modules
var sendData = require('../controllers/sendData');
var ssn;
/* GET home page. */
router.post('/', function(req, res,next) {
    ssn = req.session;
    console.log("Sending Data For Tableau");
    sendData.data.getAllData(req,res);
     console.log("Data Sent to Tableau");
    next();
});
router.post('/', function(req, res,next) {
    console.log("Call Tableau");
    sendData.data.createTableauConnection();
    console.log("Tableau Connection Created");
    next();
});
router.post('/', function(req, res) {
    console.log("Call Tableau");
    sendData.data.accessTableau();
    console.log("Tableau Connection Created");
    res.send("Done");
});
module.exports = router;