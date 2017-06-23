/**
 * Created by YZTC on 2017/6/7.
 */

/**
 * Created by YZTC on 2017/6/7.
 */


function getDB() {

  let MongoClient = require('mongodb').MongoClient;
  // let MongoClient = mongodb.MongoClient;
  let url = 'mongodb://localhost:27017/admin';

  return MongoClient.connect(url, function(err, db) {
    console.log(123456);
    let DB = db.db('boysAndGirls');
    let connection = DB.collection("identities");
    connection.insert(
      [
        {"identity":"boy","name":"三十好汉"},
        {"identity":"girl","name":"十八美少女"},
        {"identity":"children","name":"乳臭未干"}
      ]
    );
    console.log(DB,connection)
  });
}

getDB();
