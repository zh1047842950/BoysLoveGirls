/**
 * Created by YZTC on 2017/6/7.
 */


let fs = require("fs");

let express = require("express");

let bodyParser = require("body-parser");

// let urlEncode = bodyParser.urlencoded({extended: false});

let request = require("request");

// import queryDB from './queryData'

let queryDB = require("./queryData");

let app = express();

// app.use(express.static("kuaiYa"));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.all('*', (req, res, next) => {
  const origin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');

  next();
});


let server = app.listen(8888,"192.168.56.1", function () {
  console.log("服务器开启，host：" + server.address().address + " port:" + server.address().port);
  // console.log("服务器开启，host：" );
});

app.get("/", function (reqs, resp) {
  resp.send({users:[{name:"张三丰",skill:"太极拳"},{name:"岳不群",skill:"辟邪剑谱"}]});
});

app.post("/identities", function (reqs, resp) {
  queryDB.query(resp,"identities");
});

app.post("/identities/boy", function (reqs, resp) {
	
  queryDB.query(resp,"girlTypes");
});

app.post("/identities/girl", function (reqs, resp) {
  queryDB.query(resp,"boyTypes");
});
app.post("/identities/girl/:boyType", function (reqs, resp) {
  let limitNum = reqs.body.limitNum;
  queryDB.query(resp,"boys",limitNum?limitNum:0,"boyType",reqs.params.boyType);

});
app.post("/identities/boy/:girlType", function (reqs, resp) {
	let limitNum = reqs.body.limitNum;
  queryDB.query(resp,"girls",limitNum?limitNum:0,"girlType",reqs.params.girlType);
  
});


app.post("/activity", function (reqs, resp) {

  request("http://duif.applinzi.com/leyuan/activitys.php",function(err,res,body){
    if (!err&&res.statusCode === 200) {
      console.log(""+body);
      resp.send(""+body);
    }
  })

});
