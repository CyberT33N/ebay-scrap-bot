/*
███████████████████████████████████████████████████████████████████████████████
██******************** PRESENTED BY t33n Software ***************************██
██                                                                           ██
██                  ████████╗██████╗ ██████╗ ███╗   ██╗                      ██
██                  ╚══██╔══╝╚════██╗╚════██╗████╗  ██║                      ██
██                     ██║    █████╔╝ █████╔╝██╔██╗ ██║                      ██
██                     ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║                      ██
██                     ██║   ██████╔╝██████╔╝██║ ╚████║                      ██
██                     ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝                      ██
██                                                                           ██
███████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████
.__                              __           .__               .__
|__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
|  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
|  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
|__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
         \/|__|                        |__|             /_____/         \/     \/

*/
var result;
var layer = 1;

            const fs = require('fs'),
                 log = require('fancy-log'),
               chalk = require('chalk'),
      chalkAnimation = require('chalk-animation'),
            gradient = require('gradient-string'),

   controllermongodb = require('./controller/controller-mongodb'),
          controller = require('./controller/controller');







   // ADVERTISE
   var ads = gradient('red', 'white').multiline([
          '',
          'Presented by',
          '████████╗██████╗ ██████╗ ███╗   ██╗',
          '╚══██╔══╝╚════██╗╚════██╗████╗  ██║',
          '   ██║    █████╔╝ █████╔╝██╔██╗ ██║',
          '   ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║',
          '   ██║   ██████╔╝██████╔╝██║ ╚████║',
          '   ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ Software'
   ].join('\n'));
   console.log(ads);
   console.log( '\nCheck my Github Profile: ' + chalk.white.bgGreen.bold(' github.com/CyberT33N ')  + '\n\n');
   console.log( gradient('white', 'black')('\n\n=======================================\n\n') );

























log( 'Current working directory: ' + __dirname );
(async () => {
log( 'ENTER main async area..' );




   // start browser and get page & client
   const botEngine = await controller.startBROWSER();
   log( 'startBROWSER() done..' );

   if(!botEngine){
      log( 'Something went wrong we cant find botEngine' );
      return;
   }

   const client = botEngine.client;
   const page = botEngine.page;


   result = await controllermongodb.getimport();
   await scrapSingleItemURL(result, client, page);



})().catch((e) => {(async () => {
    log('ASYNC - MAIN - error :' + e );


    if ( e.toString().match( "TypeError: Cannot read property 'outerHTML' of null" ) ){
         log( '#2 - TypeError: Cannot read property outerHTML of null was found we reload page now..' );
         if( layer == 1 ) await scrapSingleItemURL(result, client, page);
         else await exportData_singleItemURLS(result, client, page);
    }


    if ( e.toString().match( "Execution context was destroyed" ) ){
         log( '#2 - Execution context was destroyed was found we reload page now..' );
         if( layer == 1 ) await scrapSingleItemURL(result, client, page);
         else await exportData_singleItemURLS(result, client, page);
    }


    if ( e.toString().match( 'net::ERR_EMPTY_RESPONSE' ) ){
         log( '#35 - net::ERR_EMPTY_RESPONSE was found we reload page..' );
         if( layer == 1 ) await scrapSingleItemURL(result, client, page);
         else await exportData_singleItemURLS(result, client, page);
    } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){

    if ( e.toString().match( 'net::ERR_NAME_NOT_RESOLVED' ) ){
         log( '#35 - net::ERR_NAME_NOT_RESOLVED was found we reload page..' );
         if( layer == 1 ) await scrapSingleItemURL(result, client, page);
         else await exportData_singleItemURLS(result, client, page);
    } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


    if ( e.toString().match( 'net::ERR_CONNECTION_CLOSED' ) ){
         log( '#35 - net::ERR_CONNECTION_CLOSED was found we reload page..' );
         if( layer == 1 ) await scrapSingleItemURL(result, client, page);
         else await exportData_singleItemURLS(result, client, page);
    } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


    if ( e.toString().match( "TypeError: Cannot read property 'uploadFile' of null" ) ){
         log( '#35 - TypeError: Cannot read property uploadFile of null was found we reload page..' );
         if( layer == 1 ) await scrapSingleItemURL(result, client, page);
         else await exportData_singleItemURLS(result, client, page);
    } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


    if ( e.toString().match( 'Error: failed to find element matching selector "#titleTmplField_0"' ) ){
         log( '#35 - Error: failed to find element matching selector "#titleTmplField_0" was found we reload page..' );
         if( layer == 1 ) await scrapSingleItemURL(result, client, page);
         else await exportData_singleItemURLS(result, client, page);
    } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


})()});



























async function scrapSingleItemURL(result, client, page){
log( 'app.js - scrapSingleItemURL()' );
layer = 1;


if(!result){
log(`It seems that we used now all data from the DB. Everything was marked as used..

############ FINISH ##############

We will start now the single item link part of the script..`);

  result = await controllermongodb.getSingleItemURL();
  await exportData_singleItemURLS(result, client, page);
  return;

} // else from if(result[0]){
log( chalk.green.bold('✔ SUCCESS') + ' LISTING AREA - We successfully get the current import from MongoDB:\n' + chalk.white.bold( result[0].url ) );




// check if enough RAM is avaible
if( !await controller.checkRAM() ){
    let e = 'scrapSingleItemURL() - We reached the max RAM limits.. We will stop the bot..';
    log(e);
    return;
}










 result = await controller.getPage(result);
 log( 'result edited: ' + JSON.stringify(result, null, 4) );

 // open link..
 if( !await controller.openLink(result.result[0].url, page) ){
     await scrapSingleItemURL(result.resultOLD, client, page);
     return;
  }
 log( 'openLink() done..' );




  const scrappedSingleItemURLs_AR = await controller.scrapSingleItemURL(page);
  if(!scrappedSingleItemURLs_AR.data){
      log('\n#0 It seems that we cant find any items on this page.. current page url: ' + result.result[0].url + '\n We will go now to the next import page..');
      await controllermongodb.markimportasued(result.result[0].url_original);
      result = await controllermongodb.getimport();
      await scrapSingleItemURL(result, client, page);
      return;
  }
  log( 'bot.js - scrapSingleItemURL() done.. active: ' + scrappedSingleItemURLs_AR.active );





  await controllermongodb.MongoDB_EXPORT_single_item_url( scrappedSingleItemURLs_AR.data );
  log( 'MongoDB_EXPORT_single_item_url() done..: ' );





  if ( !scrappedSingleItemURLs_AR.active ) {
  log( 'app.js - We reached the last page of the pagination..' );
         await controllermongodb.markimportasued(result.result[0].url_original);
         result = await controllermongodb.getimport();
         await scrapSingleItemURL(result, client, page);
  } else await scrapSingleItemURL(result.result, client, page);



}; // async function scrapSingleItemURL(result, client, page){




































async function exportData_singleItemURLS(result, client, page){
log( 'app.js - exportData_singleItemURLS()' );
layer = 2;


    if(!result){(async () => {
    log( `############ FINISH ##############
    Please wait we will close your browser now.. Please wait 10 seconds..`);

           await client.close();
           await new Promise(resolve => setTimeout(resolve, 10000));
           process.exit();
           return;

    })().catch((e) => console.error('Error while try to end the current session' + e))};
    log( chalk.green.bold('✔ SUCCESS') + ' LISTING AREA - We successfully get the current import from MongoDB:\n' + chalk.white.bold( result[0].url ) );




    // check if enough RAM is avaible
    if( !await controller.checkRAM() ){
        let e = 'exportData_singleItemURLS() - We reached the max RAM limits.. We will stop the bot..';
        log(e);
        return;
    }
    log( 'exportData_singleItemURLS() - checkRAM()() done..' );





     // open single_item_url link..
     if( !await controller.openLink(result[0].url, page) ){
         await exportData_singleItemURLS(result[0].url, client, page);
         return;
      }
      log( 'exportData_singleItemURLS() - openLink() done..' );







     // check if item can be found on website..
     if ( await page.evaluate(() => document.querySelector('#itemTitle').textContent) == '0' ){

          log('\n#2 It seems that we cant find any items on this page.. current page url: ' + result[0].url + '\n We will go now to the next single item url page..');
          await controllermongodb.markSingleItemURLasued(result[0].url);
          result = await controllermongodb.getSingleItemURL();
          await exportData_singleItemURLS(result, client, page);
          return;

     }
     log( 'Data was found we scrap it now..' );





     // scrap data from single item links..
     const singleItemURL_JSON = await controller.exportData_singleItemURLS(page, result);

     // export scrapped data to export collection..
     if( singleItemURL_JSON ) await controllermongodb.MongoDB_EXPORT_single_item_url_scrappedData(singleItemURL_JSON);

     // mark current single item url as used = 1
     await controllermongodb.markSingleItemURLasued(result[0].url);
     result = await controllermongodb.getSingleItemURL();
     await exportData_singleItemURLS(result, client, page);



} // async function exportData_singleItemURLS(result, client, page){
