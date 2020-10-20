'use strict'


         const fs = require('fs'),
      json_config = JSON.parse(  fs.readFileSync('./admin/config.json', 'utf8')  ),
              log = require('fancy-log'),
   chalkAnimation = require('chalk-animation'),
         gradient = require('gradient-string'),
            chalk = require('chalk'),
      MongoClient = require('mongodb').MongoClient,
           assert = require('assert'),
         ObjectId = require('mongodb').ObjectId,
   MongoDB_DB_URL = json_config.MongoDB_DB_URL,
  MongoDB_DB_NAME = json_config.MongoDB_DB_NAME;
  var MongoDB, client;










log( 'MongoDB_DB_URL: ' + MongoDB_DB_URL );
MongoClient.connect(MongoDB_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(e, client) {
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );

   if(e){
     log( chalk.red.bold('❌ ERROR') + ' Error while try to connect to MongoDB Database - ' + chalk.white.bold('error:\n') + e );
     //assert.equal(null, e);
     return;
   } //   if(e){

     log( 'MongoDB - Connected successfully to server..' );
     MongoDB = client.db( MongoDB_DB_NAME );

});



















const mongodb = {

      getimport: async function() { return await getimport(); },
      getSingleItemURL: async function() { return await getSingleItemURL(); },
      MongoDB_EXPORT_single_item_url: async function(scrappedSingleItemURLs_AR) { return await MongoDB_EXPORT_single_item_url(scrappedSingleItemURLs_AR); },
      MongoDB_EXPORT_single_item_url_scrappedData: async function(singleItemURL_JSON) { return await MongoDB_EXPORT_single_item_url_scrappedData(singleItemURL_JSON); },
      markimportasued: async function(result) { return await markimportasued(result); },
      markSingleItemURLasued: async function(result) { return await markSingleItemURLasued(result); },
      importDB: async function(json) { return await importDB(json); },
      getExport: async function(searchURL) { return await getExport(searchURL); }

};

module.exports = mongodb;

































async function MongoDB_EXPORT_single_item_url(single_item_ARRAY){
log( 'MongoDB_EXPORT_single_item_url()' );

      const collection = MongoDB.collection('single_item_url');

      await looper1(collection, [...single_item_ARRAY], []);
      log( 'looper1() done..' );

} // async function MongoDB_EXPORT_single_item_url(){




async function looper1(collection, tempAR, tempAR2){
log( 'ENTER looper1() - tempAR[0]: ' + tempAR[0] + '\ntempAR2[0]' + tempAR2[0] );


    if( !tempAR[0] ) {
    log( 'looper1() - !tempAR[0]' );
        if( tempAR2[0] ) return await collection.insertMany(tempAR2);
    }
    else{
    log( 'looper1() - check for duplicated entries in db..' );

        var result = await collection.find( {"url": tempAR[0]} ).toArray({});
        log( '#23423a' );

         if(!result[0]){
            log( 'MongoDB - Search value was not found.. item: ' + tempAR[0] );
            tempAR2.push(  {"url": tempAR[0], "used":0, "description": ""}  );
          } else log( 'Current item was already found in collection.. item: ' + tempAR[0] );

         tempAR.shift();
         await looper1(collection, tempAR, tempAR2);

    } // else from   if( iterations == 0 ){

} // function looper1(){














































async function markimportasued(url){
log('\n\nWe will mark now the following import url as used:' + url);

      const query = { url: url };
      const newvalues = { $set: { used: 1 } };
      const collection = MongoDB.collection('import');

      const r = await collection.updateOne(query, newvalues);
      if( r.result.n == 0 ){
        log(chalk.red.bold('❌ ERROR') + ' #1 There was an error while try to mark the current page as used' + chalk.white.bold('error:\n') + e);
        return;
      }
      log( 'markimportasued() - result:' + JSON.stringify(r, null, 4) );
      return true;


} // async function markimportasued(){
























async function markSingleItemURLasued(url){
log('\n\nWe will mark now the following single item url as used:' + url);

        const query = { url: url };
        const newvalues = { $set: { used: 1 } };
        const collection = MongoDB.collection('single_item_url');

        const r = await collection.updateOne(query, newvalues);
        if( r.result.n == 0 ){
          log(chalk.red.bold('❌ ERROR') + ' There was an error while try to mark the current single item url as used' + chalk.white.bold('error:\n') + e);
          return;
        }
        log( 'markSingleItemURLasued() - result:' + JSON.stringify(r, null, 4) );
        return true;


} // async function markSingleItemURLasued(){


























async function importDB(json){
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
log('We will import now your json to the import collection..  json: ' +  JSON.stringify(json, null, 4) + '\nurl: ' + json[0].url);

     const importCollection = MongoDB.collection('import');

    // check for duplicated data
    const verify = await importCollection.find( {"url": json[0].url} ).toArray({});
    log( 'Auth Check - verify:' + JSON.stringify(verify, null, 4) );


       if(!verify[0]) return await importCollection.insertMany(json);
       else return 'duplicated';


};







async function getExport(searchURL){
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
log('We will get now the export for this link: ' + searchURL);


      const collection = MongoDB.collection('export');

      const result = await collection.find( {"search_url": searchURL} ).toArray({});
      //log( 'getExport() - result:' + JSON.stringify(result, null, 4) );
      if(result[0]) return result;

};


















async function getimport() {
log( 'ENTER getimport()' );


      const collection = MongoDB.collection('import');

      var result = await collection.find( {"used": 0} ).limit( 1 ).toArray({});


      if(result[0]) {
      log( 'getimport() - result:' + JSON.stringify(result, null, 4) );

         result[0].paginationNumb = 0;
         result[0].url_original = result[0].url;
         return result;

      }
      log( 'getimport() - We can´t find any results..' );


} // async function getimport() {




















async function getSingleItemURL(){
log( 'getSingleItemURL()' );

      const collection = MongoDB.collection('single_item_url');
      const result = await collection.find( {"used": 0} ).limit( 1 ).toArray({});

      if(result[0]) return result;

} // async function getSingleItemURL(){
































async function MongoDB_EXPORT_single_item_url_scrappedData(json){
log( 'MongoDB_EXPORT_single_item_url_main_ENTER()' );

      const collection = MongoDB.collection('export');
      const result = await collection.find( {"url": json.url} ).toArray({});

      if(!result[0]) await collection.insert(json);

} //   async function MongoDB_EXPORT_single_item_url_scrappedData(json){
