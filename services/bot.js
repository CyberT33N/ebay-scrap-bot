'use strict'
console.log( 'bot.js - Current working directory: ' + __dirname );
var confirmButton = false;
var firstRUN = true;
var paginationNumb = 0;


              const fs = require('fs'),


              useProxy = require('puppeteer-page-proxy'),
{ uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator'),
      generatePassword = require("password-generator"),
                   unq = require('unq'),
               cheerio = require('cheerio'),
                   log = require('fancy-log'),
                 chalk = require('chalk'),
             puppeteer = require('puppeteer'),
        chalkAnimation = require('chalk-animation'),
              gradient = require('gradient-string'),

                    os = require('os'),
                osHOME = os.homedir(),
            osPLATFORM = os.platform(),

              Entities = require('html-entities').XmlEntities,
              entities = new Entities(),

       json_configFile = fs.readFileSync('./admin/config.json', 'utf8'),
           json_config = JSON.parse(json_configFile),
config_browser_profile = json_config.browser_profile,

  enable_proxy_request = json_config.enable_proxy_request,
  enable_socks_request = json_config.enable_socks_request,
enable_useragent_request = json_config.enable_useragent_request,
           proxySERVER = json_config.proxy,

  ebay_additionalBoxes = json_config.ebay_additionalBoxes,



    enable_screenImage = json_config.enable_screenImage,



           windowWidth = json_config.windowWidth,
          windowHeight = json_config.windowHeight,
    windowSizeComplete = '--window-size=' + windowWidth + ',' + windowHeight;
    log( 'windowSizeComplete: ' + windowSizeComplete );












        const BOT = {

          startBROWSER: async function() { return await startBROWSER(); },
          openLink: async function(result, page) { return await openLink(result, page); },
          getPage: async function(result) { return await getPage(result); },
          scrapSingleItemURL: async function(page) { return await scrapSingleItemURL(page); },
          exportData_singleItemURLS: async function(page, result) { return await exportData_singleItemURLS(page, result); }


        };

        module.exports = BOT;

























      var args = [

            windowSizeComplete,

            '--disable-flash-3d',
            '--no-sandbox',
            // '--disable-setuid-sandbox',

            '--disable-popup-blocking',
            '--disable-notifications',
            '--disable-dev-shm-usage',
            '--force-webrtc-ip-handling-policy=disable-non-proxied-udp',
            '--disable-flash-stage3d',
            '--disable-java',
            '--disable-internal-flash',
            '--disable-cache',
            '--disable-webgl', // webgl
            '--disable-3d-apis', // webgl
            //'--disable-extensions',
            '--disable-webgl-image-chromium',
            //'--disable-reading-from-canvas', // <-- youtube videos not playing with this enabled

            '--lang=en'

    ];






        var browserProfilePath;
        log( 'osPLATFORM: ' + osPLATFORM );
        if( osPLATFORM == 'darwin' ) browserProfilePath = './lib/browserProfiles/';
        if( osPLATFORM == 'linux' ) browserProfilePath = './lib/browserProfiles/';
        if( osPLATFORM == 'win32' ) browserProfilePath = '../../../../../lib/browserProfiles/';
        log( 'browserProfilePath: ' + browserProfilePath + '\nconfig_browser_profile: ' + config_browser_profile );


        var chromeExtensionPath;
        if( osPLATFORM == 'darwin' ) chromeExtensionPath = './lib/chromeextension/';
        if( osPLATFORM == 'linux' ) chromeExtensionPath = './lib/chromeextension/';
        if( osPLATFORM == 'win32' ) chromeExtensionPath = '../../../../../lib/chromeextension/';
        log( 'chromeExtension Path: ' + chromeExtensionPath );








         var extensionlist = json_config.extensionlist;

         if( extensionlist.length !== 0 ){

             let extensionlistAR = [];
             for( let d in extensionlist ){
                    extensionlistAR.push( chromeExtensionPath + extensionlist[d] );
                    args.push( '--load-extension=' + chromeExtensionPath + extensionlist[d] );
             } // for( let d of extensionlist ){

          extensionlist = '--disable-extensions-except=' + extensionlistAR.join( ',' );
          args.push(extensionlist);

         } //  if( extensionlist.length !== 0 ){
         log( 'extensionlist: ' + extensionlist + '\n\nArgs: ' + args);










              const headlessVALUE = json_config.headless;

              log( '\n\nWe will check now your headless value..headlessVALUE: ' + headlessVALUE );
              if(headlessVALUE) {

                     log('\n\nYou enabled headless..\n\n');
                     args.push('--disable-gpu');

              }
              else log('\n\nYou disabled headless..\n\n');























                       // ## get random user agent
                       const useragentARRAY = require('../lib/useragent').useragent;
                       //log('useragentARRAY: ' + useragentARRAY)


                       function randomUSERAGENT(){
                       log('ENTER randomUSERAGENT()')

                       if( enable_useragent_request == 'yes' ){
                       log('#234324 You choosed that user-agents are enabled when we use the request module when we download as example a image. We will choose now a random user agent..The user agent list can be found at ./lib/useragent.js\nIf you don´t want to use custom user-agents please open ./admin/config.json and change it to: "enable_useragent_request":"no"')

                         var randomUSERAGENT = useragentARRAY[Math.floor(Math.random()*useragentARRAY.length)]
                         log( '#234243 random USERAGENT: ' + randomUSERAGENT )
                       } else var randomUSERAGENT = ''

                         return randomUSERAGENT;

                       }








































































                async function getRedirectURL(tmpAR){
                log( 'ENTER getRedirectURL()' );


                  let tmpARtwo = [];
                  if( tmpAR[0] ){



                await Promise.all(
                      tmpAR.map(async d => {
                      log( 'Current array item we process: ' + d );

                        let pageTMP = await client.newPage();
                        await pageTMP.goto(d, {waitUntil: 'load', timeout: 35000});

                        let currenturl = pageTMP.url()
                        if( currenturl.match( /\?\_trkparms\=/gmi ) ){
                                currenturl = currenturl.split( /\?\_trkparms\=/gmi );
                                currenturl = currenturl[0];
                        } // if( currenturl.match( /\?\_trkparms\=/gmi ) ){
                        log( 'Final url after redirect: ' + currenturl );

                        pageTMP.close();
                        tmpARtwo.push(currenturl);

                      }) // tmpAR.map(async process => {
                ); // await Promise.all(




                  } //    if( tmpAR[0] ){
                  log( '#redirect - for loop done.. tmpARtwo: ' + tmpARtwo );

                await page.bringToFront();
                return tmpARtwo;


                } //  async function getRedirectURL(tmpAR){



















































































































              // this is for the GUI
              async function screenlooper(){

                    let screenshot = await page.screenshot({path: './GUI/website/img/browser.png'});
                    setTimeout(() => { process.nextTick(screenlooper) }, 1000);

              } //function screenlooper(){













































async function startBROWSER(){
log( 'We will start now your Browser please wait..' );




        try {


                if( enable_screenImage == 'yes' ) process.nextTick( screenlooper );



                const client = await puppeteer.launch({
                 //executablePath: '/snap/bin/chromium',
                 //executablePath: '/usr/bin/google-chrome',
                 //executablePath: '/home/user/Downloads/Linux_x64_749751_chrome-linux/chrome-linux/chrome',
                // executablePath: '/home/user/Downloads/firefox-78.0a1.en-US.linux-x86_64/firefox/firefox',
                 headless: headlessVALUE, // true or false
                 userDataDir: browserProfilePath + config_browser_profile,
                 args: args
               });






               log( 'Create new page..' );
               const page = await client.newPage();
               await page.waitFor(5000);
               await page.bringToFront();
               log( 'Browser should be started now..' );

               const session = await page.target().createCDPSession();
               await session.send('Page.enable');
               await session.send('Page.setWebLifecycleState', {state: 'active'});


               log( 'Return page and client..' );
               return {"client":client,"page":page};


        } catch(e) {


                    if(typeof e == 'string'){

                                              if( e == 'Error: connect ECONNREFUSED 0.0.0.0:4444' ) log( '#1 ECONNREFUSED error found.. error: ' + e );
                                              else log( '#2 error: ' + e );

                    }//   if(typeof e == 'string'){
                    else{
                    log('Error while try to start browser - error :' + e )



                                    if ( e.length == undefined ) {
                                      log( '#browser start - error is undefinied.. we restart now the browser..' );

                                                 await client.close();
                                                 await startBROWSER();

                                    } //     if ( e.length == undefined ) {



                                    if ( e.name == 'TimeoutError' ) {
                                      log( '#browser start - TimeoutError was found.. we restart now the browser..' );

                                                    await client.close();
                                                    await startBROWSER();

                                    } //     if ( e.length == undefined ) {


                    } // else from if(typeof e == 'string'){



   } // catch(e) {





} //        async function startBROWSER(){























































































































async function scrapVideoInfo(page){
log( 'scrapVideoInfo()' );


        const videoTitle = await page.evaluate(() => document.querySelector('.title.style-scope.ytd-video-primary-info-renderer')?.textContent);
        log( 'videoTitle: ' + chalk.white.bgGreen.bold( videoTitle )  );

        const videoViews = await page.evaluate(() => document.querySelector('.view-count.style-scope.yt-view-count-renderer')?.textContent);
        log( 'videoViews: ' + chalk.white.bgGreen.bold( videoViews ) );

        const videoDate = await page.evaluate(() => document.querySelector('#date > yt-formatted-string')?.textContent);
        log( 'videoDate: ' + chalk.white.bgGreen.bold( videoDate ) );

        const channelName = await page.evaluate(() => document.querySelector('#upload-info > #channel-name')?.querySelector('.yt-simple-endpoint.style-scope.yt-formatted-string')?.textContent);
        log( 'channelName: ' + chalk.white.bgGreen.bold( channelName ) );

        const videoLikes = await page.evaluate(() => document.querySelector('#menu-container')?.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(1)')?.querySelector('#text')?.textContent);
        log( 'videoLikes: ' + chalk.white.bgGreen.bold( videoLikes ) );

        const videoDisslikes = await page.evaluate(() => document.querySelector('#menu-container')?.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(2)')?.querySelector('#text')?.textContent);
        log( 'videoDisslikes: ' + chalk.white.bgGreen.bold( videoDisslikes )  + '\n\n' );



} // async function scrapVideoInfo(client, page){

































async function getPage(result){
log( 'getPage()' );

       const resultOLD = result;

       const paginationNumbOld = paginationNumb;
       paginationNumb++;
       log('paginationNumbOld: ' + paginationNumbOld);
       log('paginationNumb: ' + paginationNumb);

       const urlEdit = result[0].url.match(/[&][_]pgn[=](\d+)/gmi);
       log('urlEdit: ' + urlEdit);




       // 200 items via page &_ipg=200
       // change url here for pagination url methode ebay: &_pgn=2&_ipg=50
       if ( urlEdit !== null ){

           if( paginationNumb >= 1 ) result[0].url = result[0].url.replace( urlEdit, '&_pgn=' + paginationNumb );
           return {"result":result,"resultOLD":resultOLD};

       } //    if ( urlEdit !== null ){
        else{

            result[0].url = result[0].url + '&_ipg=200' + '&_pgn=1';
            return {"result":result,"resultOLD":resultOLD};

       } // else from    if ( urlEdit !== null ){



} // async function getPage(result){













































async function scrapSingleItemURL(page){
log( 'scrapSingleItemURL()' );


     const checkIfItemsFound = await page.evaluate(() => document.querySelector('.srp-controls__count-heading')?.textContent);
     log( 'checkIfItemsFound: ' + checkIfItemsFound );


     if (  checkIfItemsFound == '0' ){ return; }




      /*
      https://www.ebay.de/itm/Bettgestell-Dunkelbraun-Massivholz-Kiefer-90-200-cm/174201282669?_trkparms=ispr%3D1&hash=item288f34a06d:g:mm8AAOSwM7VeVC-n&enc=AQAEAAACcIQvEcHUrT7nmUC3yY5qbPyaBN1nJEDYW8MyypsJPgXKo0mqHRozhbuScFNjCL0zkoVrXkkYjv8f13T9M3H0hiKi2IK20TFqAUr6xzD72R9fHOCwAjA6QE7m1M4zAdrYQV8vOEJy%2B0KR8%2BMtxo%2FOaJY7rz%2BBZwACbAnFXO4aOJoRfZr4IDJ4WGgoTzJcotdgKtcuC5eXmhqVQ5hY2pILOSTD%2FYDlQTb6r0NZHa86c8yiy0EOFllvghCG20tBte%2BIKPTuMD29ePZP9W1hCfB7ljBZH0WYoQAkThYaAFTa3Bz076BP%2B2chEZKVp0yi4jR8zCE23x1wZx0ibGvcsOdhBiCdxxsPHlx1T6atMZr2VOfjTr9WssteyPU6vWvD%2FV06VAC5MVF0uDsyMTNSS8QVty9XC8XlXrvMpM7m9AcBg7Rtddo5ImnTVL5R3VXsFpVRU89%2FWO7GVfE10809qChriDiKv9rsUnalIf4Z3slMlQGkp8G0aRT7o%2FYb0OzaLuMCQeb7EPshHPp2wxXnjFfFDkkJHRRs2pMUm%2BxkrJpEQ%2BGxuDEKiVYO1qq%2BpQtQoo7DasO0a%2FqPgt6EXxmxzrhyZclLfY937IP8iZDEp4lLX3vGH4Dmc1xytHQzmHkXDMtjC6xvOxruMzcm0yY%2B8miQpMb8PNe%2BkNWlh2JTc4ZqWlV8TcM0%2FtlFj1pE038Dnr%2Bb6yoZ5b9WvMs1iqJLR6huHtuC7EEtRpUscQDfR6Eye4fNnMMsViN4I%2F7JzfD%2BuCRbn4npmb9zwF%2BX%2B29ghpYCcbBekXnLD5E%2FlO0lhW8xsEMCVzgxCLIN%2FWpkRCaHlDalQg%3D%3D&checksum=1742012826694ab791118c134c718e2ae5572b5983ed
      */


      log( 'Generate scrappedSingleItemURLs_AR..' );
      const scrappedSingleItemURLs_AR = await page.evaluate(() => {

         let all = document.querySelectorAll('.s-item__link');
         let ar = [];

         if(all){
            for( const d of all ){ ar.push(d.getAttribute('href')?.replace( /\?_trkparms=(.*)/gmi, '' )); }
            return ar;
         }

      });
      log( 'scrappedSingleItemURLs_AR: ' + scrappedSingleItemURLs_AR );



       const checkPaginationNext = await page.evaluate(() => document.querySelector('.pagination__next')?.getAttribute('aria-disabled'));
       log( 'checkPaginationNext: ' + checkPaginationNext );

       const paginationFound = await page.evaluate(() => document.querySelector('.s-pagination > span'));
       log( 'paginationFound: ' + paginationFound );


       if (  checkPaginationNext == 'true' || !paginationFound ) return {"data":scrappedSingleItemURLs_AR, "active":false};
       else return {"data":scrappedSingleItemURLs_AR, "active":true};




}; // async function scrapSingleItemURL(page){


























































async function openLink(url, page){
log( 'openLink()' );



          try {
              await page.goto(url, {waitUntil: 'networkidle0', timeout: 35000});
          } catch(e) {
          log( 'Error while open youtube video.. Error: ' + e.message );


                    if( e.message.match('Navigation timeout of') ){
                        log( '#2 - Navigation timeout was found we reload page in 30 seconds..\n\n' );
                        await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_EMPTY_RESPONSE' ) ){
                         log( '#2 - net::ERR_EMPTY_RESPONSE was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_NETWORK_CHANGED' ) ){
                         log( '#2 - net::ERR_NETWORK_CHANGED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_NAME_NOT_RESOLVED' ) ){
                         log( '#2 - net::ERR_NAME_NOT_RESOLVED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_CLOSED' ) ){
                         log( '#2 - net::ERR_CONNECTION_CLOSED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }


                    if ( e.message.match( 'net::ERR_PROXY_CONNECTION_FAILED' ) ){
                         log( '#2 - net::ERR_PROXY_CONNECTION_FAILED was found.. Maybe your proxy is offline? Maybe change your proxy.. However we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_REFUSED' ) ){
                         log( '#2 - net::ERR_CONNECTION_REFUSED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_TIMED_OUT' ) ){
                         log( '#2 - net::ERR_CONNECTION_TIMED_OUT was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }


          }; //   } catch(e) {


          return true;


} // async function openLink(result, client, page){































































async function exportData_singleItemURLS(page, result){
log( 'exportData_singleItemURLS()' );

let singleItemURL_JSON = {};




      singleItemURL_JSON.url = result[0].url;
      log( '#single item url - url: ' + singleItemURL_JSON.url );



      const auctionactive = await page.evaluate(() => document.querySelector('#w1-4-_msg')?.textContent);
      if( auctionactive ) singleItemURL_JSON.auctionactive = entities.decode(auctionactive).replace( /\s\s+/gmi, ' ' ).trim();
      else singleItemURL_JSON.auctionactive = true;
      log( '#single item url - auctionactive: ' + auctionactive );






      if( await page.$('#itemTitle > span') ) {
      log( '#itemTitle > span was found..' );

          await page.evaluate(() => document.querySelector('#itemTitle > span').remove());
          var title = await page.evaluate(() => document.querySelector('#itemTitle')?.textContent);

      } // if(  $( '#itemTitle > span' ).text()  ) {
      if( title ) singleItemURL_JSON.title = entities.decode(title).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - title: ' + title );




      const price = await page.evaluate(() => document.querySelector('#prcIsum')?.textContent);
      if( price ) singleItemURL_JSON.price = entities.decode(price).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - price: ' + price );


      const viewsday = await page.evaluate(() => document.querySelector('.vi-notify-new-bg-dBtm > span')?.textContent);
      if( viewsday ) singleItemURL_JSON.viewsday = entities.decode(viewsday).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - viewsday: ' + viewsday );




      const seller_name = await page.evaluate(() => document.querySelector('.bdg-90 > .mbg.vi-VR-margBtm3 > a > span')?.textContent);
      if( seller_name ) singleItemURL_JSON.seller_name = entities.decode(seller_name).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - seller_name: ' + seller_name );

      const seller_url = await page.evaluate(() => document.querySelector('.bdg-90 > .mbg.vi-VR-margBtm3 > a')?.getAttribute('href'));
      if( seller_url ) singleItemURL_JSON.seller_url = entities.decode(seller_url).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - seller_url: ' + seller_url );


      const seller_feedback_url = await page.evaluate(() => document.querySelector('.bdg-90 > .mbg.vi-VR-margBtm3 > .mbg-l > a')?.getAttribute('href'));
      if( seller_feedback_url ) singleItemURL_JSON.seller_feedback_url = entities.decode(seller_feedback_url).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - seller_feedback_url: ' + seller_feedback_url );

      const seller_feedback_amount = await page.evaluate(() => document.querySelector('.bdg-90 > .mbg.vi-VR-margBtm3 > .mbg-l > a')?.textContent);
      if( seller_feedback_amount ) singleItemURL_JSON.seller_feedback_amount = entities.decode(seller_feedback_amount).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - seller_feedback_amount: ' + seller_feedback_amount );

      const seller_feedback_percent = await page.evaluate(() => document.querySelector('#si-fb')?.textContent);
      if( seller_feedback_percent ) singleItemURL_JSON.seller_feedback_percent = entities.decode(seller_feedback_percent).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - seller_feedback_percent: ' + seller_feedback_percent );


      const seller_status = await page.evaluate(() => document.querySelector('.si-pd-newFix')?.textContent);
      if( seller_status ) singleItemURL_JSON.seller_status = entities.decode(seller_status).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - seller_status: ' + seller_status );








      const instock = await page.evaluate(() => document.querySelector('#qtySubTxt')?.textContent);
      if( instock ) singleItemURL_JSON.instock = entities.decode(instock).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - instock: ' + instock );



      const item_selled = await page.evaluate(() => document.querySelector('.vi-txt-underline')?.textContent);
      if( item_selled ) singleItemURL_JSON.item_selled = entities.decode(item_selled).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - item_selled: ' + item_selled );







      const shipping_cost = await page.evaluate(() => document.querySelector('#fshippingCost > span')?.textContent);
      if( shipping_cost ) singleItemURL_JSON.shipping_cost = entities.decode(shipping_cost).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - shipping_cost: ' + shipping_cost );


      const shiptolocation = await page.evaluate(() => document.querySelector('span[itemprop="areaServed"]')?.textContent);
      if( shiptolocation ) singleItemURL_JSON.shiptolocation = entities.decode(shiptolocation).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - shiptolocation: ' + shiptolocation );


      const delivertime = await page.evaluate(() => document.querySelector('#delSummary > div.sh-del-frst  > .sh-inline-div')?.textContent);
      if( delivertime ) singleItemURL_JSON.delivertime = entities.decode(delivertime).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - delivertime: ' + delivertime );


      const item_location = await page.evaluate(() => document.querySelector('span[itemprop="availableAtOrFrom"]')?.textContent);
      if( item_location ) singleItemURL_JSON.item_location = entities.decode(item_location).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - item_location: ' + item_location );










      const paymentmethod_paypal = await page.evaluate(() => document.querySelector('#payDet1')?.querySelector('.vi-pv2-paypal'));
      if( paymentmethod_paypal ) singleItemURL_JSON.paymentmethod_paypal = true;
      log( '#single item url - paymentmethod_paypal: ' + paymentmethod_paypal );


      const paymentmethod_direct_debit = await page.evaluate(() => document.querySelector('#payDet1')?.querySelector('.vi-pv2-payment_method_direct_debit'));
      if( paymentmethod_direct_debit ) singleItemURL_JSON.paymentmethod_direct_debit = true;
      log( '#single item url - paymentmethod_direct_debit: ' + paymentmethod_direct_debit );


      const paymentmethod_other = await page.evaluate(() => document.querySelector('#payDet1')?.querySelector('.vi-pv2-txtwrapper')?.textContent);
      if( paymentmethod_other ) singleItemURL_JSON.paymentmethod_other = entities.decode(paymentmethod_other).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - paymentmethod_other: ' + paymentmethod_other );


      const ebay_buyerprotection = await page.evaluate(() => document.querySelector('#vi-ebp2-logo'));
      if( ebay_buyerprotection ) singleItemURL_JSON.ebay_buyerprotection = true;
      log( '#single item url - ebay_buyerprotection: ' + ebay_buyerprotection );












      const ebay_articleID = await page.evaluate(() => document.querySelector('.u-flL.iti-act-num.itm-num-txt')?.textContent);
      if( ebay_articleID ) singleItemURL_JSON.ebay_articleID = entities.decode(ebay_articleID).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - ebay_articleID: ' + ebay_articleID );






      const descriptioniframe_url = await page.evaluate(() => document.querySelector('#desc_ifr')?.getAttribute('src'));
      if( descriptioniframe_url ) singleItemURL_JSON.descriptioniframe_url = entities.decode(descriptioniframe_url).replace( /\s\s+/gmi, ' ' ).trim();
      log( '#single item url - descriptioniframe_url: ' + descriptioniframe_url );














      if( await page.$('#vi_main_img_fs > ul > li') ){
      log( '#single item url - images was found..' );

          singleItemURL_JSON.imageURLS = await page.evaluate(() => {

                 let all = document.querySelectorAll('#vi_main_img_fs > ul > li');
                 let ar = [];

                 if(all){
                    for( const d of all ){  ar.push( d.querySelector('img')?.getAttribute('src')?.replace('s-l64', 's-l9999') );  }
                    return ar;
                 }

           });
           log( 'singleItemURL_JSON.imageURLS: ' + singleItemURL_JSON.imageURLS );

      } // if( await page.$('#vi_main_img_fs > ul > li') ){












        if( await page.evaluate(() => document.querySelector('.itemAttr')?.querySelector('table > tbody > tr > td')) ){
        log( '#single item url - table was found..' );


            singleItemURL_JSON.table = await page.evaluate(() => {

                   let all = document.querySelector('.itemAttr')?.querySelectorAll('table > tbody > tr > td');
                   let obj = {};

                   if(all){

                      for( const d of all ){

                           if( d.getAttribute('class') == 'attrLabels' ){

                               let columnNameValue = 'table_' + d.textContent?.replace( /[ ]/gmi, '' ).replace( /\s\s+/gmi, '' ).replace( /[^a-zA-Z0-9äüöÄÜÖ]/gmi, '' ).toLowerCase().trim();
                               let columnText = d.nextElementSibling?.textContent?.replace( /\s\s+/gmi, ' ' ).trim();
                               if( d.textContent ) obj[columnNameValue] = columnText;

                           } // if( d.getAttribute('class') == 'attrLabels' ){

                       } // for( const d of all ){
                       return obj;

                   } // if(all){

             }); // await page.evaluate(() => {
             log( 'singleItemURL_JSON.table: ' + singleItemURL_JSON.table );


        } // if( await page.$('#vi_main_img_fs > ul > li') ){



































          // await page.evaluate(() => document.querySelector('#vi_main_img_fs > ul > li')?.textContent);
          // await page.evaluate(() => document.querySelector('#desc_ifr')?.getAttribute('src'));
          // await page.evaluate(() => document.querySelector('#payDet1')?.querySelector('.vi-pv2-payment_method_direct_debit'));



          if( await page.$('.mfe-card-group') && ebay_additionalBoxes ){
          log( '#single item url - additionalBoxes was found..' );










                if( await page.evaluate(() => document.querySelector('#CenterPanel')?.querySelector('.mfe-reco-flat-cell.mfe-reco-flat-cell-left.image-96px > a')) ){
                log( '#single item url - buyers also looked at those articels was found..' );

                    singleItemURL_JSON.buyersAlsoLooked = await page.evaluate(() => {

                           let all = document.querySelector('#CenterPanel')?.querySelectorAll('.mfe-reco-flat-cell.mfe-reco-flat-cell-left.image-96px > a');
                           let ar = [];

                           if(all){

                              for( const d of all ){

                                   let itemURL = d.getAttribute('href');
                                   if( itemURL.match( /\?\_trkparms\=/gmi ) ){
                                       itemURL = itemURL.split( /\?\_trkparms\=/gmi );
                                       itemURL = itemURL[0];
                                   } // if( currenturl.match( /\?\_trkparms\=/gmi ) ){
                                   ar.push( itemURL );

                                 } // for( const d of all ){
                              return ar;

                           } // if(all){

                     }); // singleItemURL_JSON.buyersAlsoLooked = await page.evaluate(() => {
                     log( 'singleItemURL_JSON.buyersAlsoLooked: ' + singleItemURL_JSON.buyersAlsoLooked );

                } // if( await page.evaluate(() => document.querySelector('#CenterPanel')?.querySelector('.mfe-reco-flat-cell.mfe-reco-flat-cell-left.image-96px > a')) ){
















                  if( await page.evaluate(() => document.querySelector('#FootPanelInnr')?.querySelector('.mfe-reco-flat-cell.mfe-reco-flat-cell-left.image-96px > a')) ){
                  log( '#single item url - buyers also looked at those articels FOOTER was found..' );

                      singleItemURL_JSON.buyersAlsoLooked_footer = await page.evaluate(() => {

                             let all = document.querySelector('#FootPanelInnr')?.querySelectorAll('.mfe-reco-flat-cell.mfe-reco-flat-cell-left.image-96px > a');
                             let ar = [];

                             if(all){

                                for( const d of all ){

                                     let itemURL = d.getAttribute('href');
                                     if( itemURL.match( /\?\_trkparms\=/gmi ) ){
                                         itemURL = itemURL.split( /\?\_trkparms\=/gmi );
                                         itemURL = itemURL[0];
                                     } // if( currenturl.match( /\?\_trkparms\=/gmi ) ){
                                     ar.push( itemURL );

                                   } // for( const d of all ){
                                return ar;

                             } // if(all){

                       }); // singleItemURL_JSON.buyersAlsoLooked = await page.evaluate(() => {
                       log( 'singleItemURL_JSON.buyersAlsoLooked: ' + singleItemURL_JSON.buyersAlsoLooked );

                  } // if( await page.evaluate(() => document.querySelector('#CenterPanel')?.querySelector('.mfe-reco-flat-cell.mfe-reco-flat-cell-left.image-96px > a')) ){
































                    if( await page.evaluate(() => document.querySelector('#BottomPanel')?.querySelector('.mfe-reco-link')) ){
                    log( '#single item url - Other articels from this customer directly under image was found..' );

                        const otherArticels = await page.evaluate(() => {

                               let all = document.querySelector('#BottomPanel')?.querySelectorAll('.mfe-reco-link');
                               let ar = [];

                               if(all){

                                  for( const d of all ){

                                       let itemURL = d.getAttribute('href');
                                       if( itemURL.match( 'pulsar.ebay' ) ) ar.push( itemURL );

                                     } // for( const d of all ){
                                  return ar;

                               } // if(all){

                         }); // singleItemURL_JSON.buyersAlsoLooked = await page.evaluate(() => {
                         log( 'otherArticels: ' + otherArticels );



                        if(otherArticels) singleItemURL_JSON.SellerOtherItems = await getRedirectURL(otherArticels);
                        log( 'singleItemURL_JSON.SellerOtherItems: ' + singleItemURL_JSON.SellerOtherItems );


                   } // if( await page.evaluate(() => document.querySelector('#CenterPanel')?.querySelector('.mfe-reco-flat-cell.mfe-reco-flat-cell-left.image-96px > a')) ){







} //   if( checkforadditionalBoxes ){














log( 'FINAL singleItemURL_JSON: ' + JSON.stringify(singleItemURL_JSON, null, 4) );
return singleItemURL_JSON;








} // async function exportData_singleItemURLS(){
