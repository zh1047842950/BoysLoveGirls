/**
 * Created by YZTC on 2017/6/7.
 */

/**
 * Created by YZTC on 2017/6/7.
 */

/**
 * Created by YZTC on 2017/6/7.
 */


function getDB() {

  let MongoClient = require('mongodb').MongoClient;
  // let MongoClient = mongodb.MongoClient;
  let url = 'mongodb://localhost:27017/zhhydb';

  return MongoClient.connect(url, function(err, db) {
    console.log(123456);
    let DB = db.db('boysAndGirls');
    let connection = DB.collection("girlTypes");
    connection.insert(
      [
        {
          "type":"sportGirls",
          "name":"体育美女"
        },{
        "type":"cartoonGirls",
        "name":"动漫美女"
      },
        {
          "type":"magnificentGirls",
          "name":"唯美写真"
        },
        {
          "type":"modelGirls",
          "name":"模特美女"
        },
        {
          "type":"netHotGirls",
          "name":"网络美女"
        },
        {
          "type":"highDefinitionGirls",
          "name":"高清美女"
        },
        {
          "type":"stockingLegGirls",
          "name":"丝袜美腿"
        },
        {
          "type":"sexyBeautyGirls",
          "name":"性感美女"
        }
      ]
    );
    console.log(DB,connection)
  });
}

getDB();
