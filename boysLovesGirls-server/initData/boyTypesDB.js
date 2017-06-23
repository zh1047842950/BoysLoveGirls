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
    let connection = DB.collection("boyTypes");
    connection.insert(
      [
        {
          "type":"sexyBeautyBoys",
          "name":"性感帅哥"
        },{
        "type":"sportBoys",
        "name":"运动帅哥"
      },
        {
          "type":"muscleBoys",
          "name":"肌肉帅哥"
        },
        {
          "type":"asianBoys",
          "name":"亚洲帅哥"
        },
        {
          "type":"EuropeUsaBoys",
          "name":"欧美帅哥"
        },
        {
          "type":"maturityBoys",
          "name":"熟男帅哥"
        },
        {
          "type":"handsomeBoys",
          "name":"小帅哥"
        },
        {
          "type":"militaryPoliceBoys",
          "name":"军警帅哥"
        }


      ]
    );
    console.log(DB,connection)
  });
}

getDB();
