/**
 * Created by YZTC on 2017/6/7.
 */



module.exports = {
   query:function (resp,table,limit,field,value) {

     let MongoClient = require('mongodb').MongoClient,
      url = 'mongodb://localhost:27017/admin',
      searchResult = {};

      MongoClient.connect(url, function(err, db) {
       let DB = db.db('boysAndGirls');
       let connection = DB.collection(table);
      connection.find({[field]:value}).limit(limit?limit:0).toArray(function(err, docs) {

        searchResult = {
            error:err,
            data:docs
         };

		

         /*if((table=='boyTypes'||table=='girlTypes')&&searchResult.data){
         	let length = searchResult.data.length,i=0,
         	 tableNew = table=='boyTypes'?'boys':'girls',
         	 type = table=='boyTypes'?'boyType':'girlType',
        
         	 connection = DB.collection(tableNew);
         	for (; i < length; i++) {
         		console.log(111,searchResult.data[i]);
         		connection.find({[type]:searchResult.data[i].type}).limit(limit?limit:0)
         		.toArray(function(err, docs) {
         			console.log(222,searchResult.data);
         			searchResult.data[0].top = docs;
         		});
         	}

         }*/
         
         db.close();
		resp.send(searchResult);
         

         
         

       });

     });
      
   }
};


