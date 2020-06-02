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
*/

























     /*
    ▄██████▄  ▀█████████▄       ▄█    ▄████████  ▄████████     ███        ▄████████
   ███    ███   ███    ███     ███   ███    ███ ███    ███ ▀█████████▄   ███    ███
   ███    ███   ███    ███     ███   ███    █▀  ███    █▀     ▀███▀▀██   ███    █▀
   ███    ███  ▄███▄▄▄██▀      ███  ▄███▄▄▄     ███            ███   ▀   ███
   ███    ███ ▀▀███▀▀▀██▄      ███ ▀▀███▀▀▀     ███            ███     ▀███████████
   ███    ███   ███    ██▄     ███   ███    █▄  ███    █▄      ███              ███
   ███    ███   ███    ███     ███   ███    ███ ███    ███     ███        ▄█    ███
    ▀██████▀  ▄█████████▀  █▄ ▄███   ██████████ ████████▀     ▄████▀    ▄████████▀
                           ▀▀▀▀▀▀
   Here you can add all Objects/Arrays
   */
var t33n = {};
var looperVAL = 1;
var scrappedSingleItemURLs_AR = [];

//puppeter
var client;
var page;

var configOBJECT = {};
var MongoDB;
var changeIP_NEWACC = false;
var changeIP = false;
var browserStarted = false;
var firstRUN = true;














/*
████████████████████████████████████████████████████████████████████████████████
.__                              __           .__               .__
|__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
|  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
|  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
|__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
         \/|__|                        |__|             /_____/         \/     \/
Here you can add all your plugins. *Note* The enabled plugins are necessary.
*/
const fs = require('fs'),
          useProxy = require('puppeteer-page-proxy'),
          { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator'),
          generatePassword = require("password-generator"),
          unq = require('unq'),
          request = require('request'),
          simpleTimestamp = require('simple-timestamp'),
          //uuidv1 = require('uuid/v1'),
          log = require('fancy-log'),
          chalk = require('chalk'),
          randomize = require('randomatic'),
          puppeteer = require('puppeteer'),
        //  moment = require('moment'),
          chalkAnimation = require('chalk-animation'),
          gradient = require('gradient-string'),
          dateFormat = require('dateformat'),
          cheerio = require('cheerio'),
          os = require('os'),
          osHOME = os.homedir(),
          osPLATFORM = os.platform(),
          //image2base64 = require('imageurl-base64'),
          Entities = require('html-entities').XmlEntities,
          entities = new Entities(),
          {exec} = require('child_process'),
          //const path = require('path');
          //const shuffle = require('shuffle-array');

/*
          json_vpnFile = fs.readFileSync('/home/t33n/Desktop/nordvpn/acc.json', 'utf8'),
          json_vpn = JSON.parse(json_vpnFile),
          vpn_username = json_vpn.username,
          vpn_password = json_vpn.password,
*/



          json_configFile = fs.readFileSync('./admin/config.json', 'utf8'),
          json_config = JSON.parse(json_configFile),




          config_browser_profile = json_config.browser_profile,



         //############### CHROME WINDOW SIZE - START #####################################
          windowWidth = json_config.windowWidth,
          windowHeight = json_config.windowHeight,
          windowSizeComplete = '--window-size=' + windowWidth + ',' + windowHeight,
         //############### CHROME WINDOW SIZE - END #####################################



        //############## disable screen record ##################################
        enable_screenImage = json_config.enable_screenImage,



        //############## MongoDB ##################################
       MongoClient = require('mongodb').MongoClient,
       assert = require('assert'),
       MongoDB_DB_URL = json_config.MongoDB_DB_URL,
       MongoDB_DB_NAME = json_config.MongoDB_DB_NAME,





         //############## spoofer area for request ##################################
         enable_proxy_request = json_config.enable_proxy_request,
         enable_socks_request = json_config.enable_socks_request,
         enable_useragent_request = json_config.enable_useragent_request,
         proxySERVER = json_config.proxy;





         //############### TIMEOUTS - START #####################################
          configOBJECT.waiter = Number(json_config.pause2);
          log('#11 - configOBJECT.waiter: ' + configOBJECT.waiter);



/*
          configOBJECT.waiterSCROLL = Number(json_config.pause3_scroll);
          log('#11 - configOBJECT.waiterSCROLL: ' + configOBJECT.waiterSCROLL);

          configOBJECT.tempnumberSCROLL = Number(json_config.scroll_distance);
          log('#11 - configOBJECT.tempnumberSCROLL: ' + configOBJECT.tempnumberSCROLL);


          configOBJECT.scroll_loopAmount = Number(json_config.scroll_loopAmount);
          log('#11 - configOBJECT.scroll_loopAmount: ' + configOBJECT.scroll_loopAmount);
*/




          configOBJECT.pause5_end = Number(json_config.pause5_end);
          log('#11 - configOBJECT.pause5_end: ' + configOBJECT.pause5_end);






































                                                           /*
                                                           ████████████████████████████████████████████████████████████████████████████████
                                                          */

                                                           //############## GET HEADLESS VALUE ##################################

                                                           const headlessVALUE = json_config.headless;


                                                           var disableGPU;


                                                           log( '\n\nWe will check now your headless value..headlessVALUE: ' + headlessVALUE );
                                                           if(headlessVALUE == true) {
                                                           log('\n\nYou enabled headless..\n\n');

                                                                disableGPU = '--disable-gpu';

                                                           } //  if(headlessVALUE == 'yes') {
                                                           else {
                                                           log('\n\nYou disabled headless..\n\n');

                                                                disableGPU = '--disable-popup-blocking';

                                                          } // else from if(headless == true) {

                                                            /*
                                                            ████████████████████████████████████████████████████████████████████████████████
                                                            */




























         log( '\n\n\nWE USE THIS HOMEPATH: ' + osHOME + '\n\n' );









         // ## get random user agent
         const useragentARRAY = require('./lib/useragent').useragent;
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
















         // ## get random proxy
         const proxylistARRAY = require('./lib/proxylist').proxylist;
         //log('proxylistARRAY: ' + proxylistARRAY)

         function randomproxylist(){
         log('ENTER randomproxylist()')

         if( enable_proxy_request == 'yes' ){
         log('#234324 You choosed that proxies are enabled when we use the request module when we download as example a image. We will choose now a random proxy..The proxy list can be found at ./lib/proxylist.js\nIf you don´t want to use proxies please open ./admin/config.json and change it to: "enable_proxy_request":"no"')
           var randomPROXY = 'http://' + proxylistARRAY[Math.floor(Math.random()*proxylistARRAY.length)]
           log( '#23rgegergerge43 random PROXY: ' + randomPROXY )
         } else var randomPROXY = ''


         return randomPROXY;
         } // randomproxylist()





















//const proxylistARRAY_nordvpn = JSON.parse( fs.readFileSync('./lib/nordvpn_all_server.json', 'utf8') );
//log('proxylistARRAY: ' + proxylistARRAY)




  function randomSOCKSlist_nordvpn(){
  log('ENTER randomSOCKSlist_nordvpn()')



           let obj = proxylistARRAY_nordvpn[Math.floor(Math.random()*proxylistARRAY_nordvpn.length)];
           log( 'NordVPN SOCKS - Current SOCKS Informations: ' + JSON.stringify(obj, null, 4) );

           if( obj.features.socks == false ){
           log( 'NordVPN SOCKS - Current server does not support SOCKS.. we choose a new SOCKS now!' );
             process.nextTick( randomSOCKSlist_nordvpn );
             return;
           } // if( obj.features.SOCKS == false ){


           let proxy = 'socks5://' + vpn_username + ':' + vpn_password + '@' + obj.domain + ':1080'
           log( 'NordVPN SOCKS - Final SOCKS: ' + obj.domain );

           proxyorsocksChoosed(proxy);


  } // randomSOCKSlist_nordvpn()









  function randomproxylist_nordvpn(){
  log('ENTER randomproxylist_nordvpn()')



           let obj = proxylistARRAY_nordvpn[Math.floor(Math.random()*proxylistARRAY_nordvpn.length)];
           log( 'NordVPN PROXY - Current Proxy Informations: ' + JSON.stringify(obj, null, 4) );

           if( obj.features.proxy_ssl == false && obj.features.proxy == false ){
           log( 'NordVPN SOCKS - Current server does not support PROXY.. we choose a new PROXY now!' );
             process.nextTick( randomproxylist_nordvpn );
             return;
           } // if( obj.features.SOCKS == false ){


           let proxy = 'https://' + vpn_username + ':' + vpn_password + '@' + obj.domain + ':89'
           log( 'NordVPN PROXY - Final PROXY: ' + obj.domain );

           proxyorsocksChoosed(proxy);


  } // randomSOCKSlist_nordvpn()
































async function proxyorsocksChoosed(proxy){
log( 'ENTER proxyorsocksChoosed()' );



                                     //let proxy = 'socks5://192.186.154.202:1080'
                                     //vpn_username = 'wpeejmlo-4'
                                     //vpn_password = 'y2e001ppobvx'



                                     // #current IP: 193.8.94.225
                                     // current Country of IP: Israel (IL)
                                     //proxy = 'socks5://wpeejmlo-dest:y2e001ppobvx@193.8.94.225:1080'



         if( changeIP_NEWACC == true ){
         log( 'changeIP_NEWACC == true - this means we will change now the ip and after create new acc..' );

                    await useProxy(page, null);
                    await useProxy(page, proxy);
                    process.nextTick(checkSocksSpeed);

          } // if( changeIP_NEWACC == true ){
          else {

                if ( changeIP == true ){
                log( '#123123 - changeIP == true' );

                  await useProxy(page, null);
                  await useProxy(page, proxy);
                  process.nextTick(checkSocksSpeed);

                } // if ( changeIP == true ){
                else {
                  log( '#123123 - changeIP !== true' );


                            await useProxy(page, null);
                            await useProxy(page, proxy);
                            process.nextTick(checkSocksSpeed);

                } // else from if ( changeIP == true ){


        } // else from if( changeIP_NEWACC == true ){


} // function proxyorsocksChoosed(){



















































function checkSocksSpeed(){
(async () => {
log( 'ENTER checkSocksSpeed()' );



  try {
      await page.goto('https://browserleaks.com/ip', {waitUntil: 'networkidle0', timeout: 35000});
  } catch(e) {
  log('#2 - Error while try to check proxy speed - error :' + e);

    if( e.toString().match("timeout") ) {
      log( 'Proxy Speed Test - Timeout error found.. We change proxy now again..' );
      if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
      if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);

    } // if( e.match("timeout") ) {

      if( e.toString().match("net::ERR_FAILED") ) {
        log( 'Proxy Speed Test - net::ERR_FAILED error found.. We change proxy now again..' );
        if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
        if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);

      } // if( e.match("timeout") ) {



      return;
  } // catch(e) {
  log( 'Proxy Speed Test - website was loaded as it seems..' );




              let css = await page.evaluate(() => document.querySelector('table').outerHTML);
              //log( 'upload status html:' + css );
              let $ = cheerio.load(css);






              $( 'table > tbody > tr' ).each(function(){

                          /////////  ####### IP address ###### /////////
                          let cssSELECTOR = $(this).find('td');
                          //log('#897a current cssSELECTOR: ' + cssSELECTOR);

                          if(cssSELECTOR){
                          //log( 'cssSELECTOR was found..' );

                            $(cssSELECTOR).each(function(){
                            //log( '#123123 - $(this): ' + $(this) );

                              if( $(this).text() == 'IP address' ){

                                     let currentIP = $(this).next().text().trim();
                                     log( '#current IP: ' + currentIP );

                              } // if( $(this).text() == 'IP address' ){

                                if( $(this).text() == 'Country' ){

                                       let country = $(this).next().text().trim();
                                       log( '#current Country of IP: ' + country );

                                } // if( $(this).text() == 'Country' ){


                          }) // $( 'table > tbody > tr' ).each(function(){
                          } // if(cssSELECTOR){


               }) // $( 'table > tbody > tr' ).each(function(){
               log( '#34lö2lk - for each loop done for table..' );




          if( changeIP_NEWACC == true ){
           changeIP_NEWACC = false;
           process.nextTick(createnewACC);
           } // if( changeIP_NEWACC == true ){
           else {

             if( changeIP == true ){
              log( '#234234 changeIP == true' );
               changeIP = false;
               process.nextTick(scrapSingleItemURL);
             } //  if( changeIP == true ){
             else process.nextTick(connectMongoDB);


           } // else from if( changeIP_NEWACC == true ){




 })().catch((e) => {

   console.error('#2333 - Error while try to check proxy speed - error :' + e);


 }); //  })().catch((e) => {
} // function checkSocksSpeed(){


























































































  const downloadIMAGE = function(uri, filename){

  log('#89234890248 uri: ' + uri)
  log('#89234890248 filename: ' + filename)


  if( uri.match( /;base64,/gmi ) ){
    log('#78greerhhrrheb478')

                         var buffer = Buffer.from(uri, 'utf8')
                         fs.writeFileSync(filename, buffer)

                         log('#735435353458 image should be saved..')

                         IMAGE_BASE64_ARRAY.push( uri )
                         t33n.INTERVAL_PROOFER = 'yes'
  }
  else process.nextTick( downloadIMAGE_LOOPER )


  function downloadIMAGE_LOOPER(){
  log('ENTER downloadIMAGE_LOOPER()')





                 // log('\ncontent-type:', r.headers['content-type'])
                  //log('\ncontent-length:', r.headers['content-length'])


                  var options = {
                     url: uri,
                     proxy: randomproxylist(),
                     encoding: null,
                     resolveWithFullResponse: true,
                      headers: {
                        'User-Agent': randomUSERAGENT(),
                        'Pragma': 'no-cache'
                      }
                    }




                    request(options, function (e, r, b) {

                        if(e){
                            log('\n\n#erbeberb4234 ERROR - We get an error while try to download your image.. we wait 5s and retry.. error: ' + e)
                            setTimeout(() => {  process.nextTick(downloadIMAGE_LOOPER) }, 5000)
                        }
                        else{

                         log('#78trbrtbrtb478')

                         var buffer = Buffer.from(r.body, 'utf8')
                         fs.writeFileSync(filename, buffer)

                         log('#7892348972478 image should be saved..')

                         var base64 = "data:" + r.headers["content-type"] + ";base64," + new Buffer(b).toString('base64')
                         //log('#87234890248989234 base64: ' + base64)
                         IMAGE_BASE64_ARRAY.push( base64.toString() )

                         t33n.INTERVAL_PROOFER = 'yes'

                        }

                    }) //  request(options, function (e, r, b) {










      }// function downloadIMAGE_LOOPER(){

  } // const downloadIMAGE = function(uri, filename, callback){






  /*
  image download short..
  request(t33n.MAIN_IMAGE_URL).pipe(fs.createWriteStream(t33n.MAIN_IMAGE_DOWNLOAD_PATH))


  */










































































































































// this is for the GUI
async function screenlooper(){


let screenshot = await page.screenshot({path: 'var/www/html/GUI/website/img/browser.png'});



/*var execline = "sudo chown -R t33n '/home/t33n/Desktop/project'"
log('#42 execline: ' + execline)


       exec(execline, function(e, stdo, stde) {

              if ( stde || e ) {
                log( chalk.red.bold('❌ ERROR ') + "#rrtnrtntn45 - There was an error while try to exec: " + chalk.white.bold(execline) + "\nError:\n" + chalk.white.bold( e ) + "\nstderr:\n" + chalk.white.bold( stde ) );
                return;
              } //  if ( stderr || err ) {

                log( "#3rtnrtnn5 - We successfully exec: " + chalk.white.bold(execline) + "\nstde:\n" + chalk.white.bold( stde ) );


        }); // exec(execline, function(e, stdo, stde) {
*/
setTimeout(() => { process.nextTick(screenlooper) }, 1000);


} //function screenlooper(){




















































































































































































































                      /*
                       ████████████████████████████████████████████████████████████████████████████████
                       */


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







                                              startBROWSER();
                                     function startBROWSER(){
                                     (async () => {
                                     log( 'We will start now your Browser please wait..' );
                                     browserStarted = true;


                                     if( enable_screenImage == 'yes' ) process.nextTick( screenlooper );



                                                          client = await puppeteer.launch({
                                                           //executablePath: puppeteerBinaryPATH,
                                                           //executablePath: '/snap/bin/chromium',
                                                           //executablePath: '/usr/bin/google-chrome',
                                                           //executablePath: '/home/t33n/Downloads/Linux_x64_749751_chrome-linux/chrome-linux/chrome',
                                                          // executablePath: '/home/t33n/Downloads/firefox-78.0a1.en-US.linux-x86_64/firefox/firefox',


                                                           headless: headlessVALUE, // true or false
                                                           userDataDir: '../../../../../lib/browserProfiles/' + config_browser_profile,
                                                           args: [
                                                           windowSizeComplete,

                                                           //'--proxy-server=' + proxySERVER,

                                                           //serbia
                                                         //'--proxy-server=socks5://us3229.nordvpn.com:1080',
                                                         //'--host-resolver-rules="MAP * ~NOTFOUND , EXCLUDE us3229.nordvpn.com"',

                                                             //random proxy
                                                          //  '--proxy-server=' + proxy,


                                                            //random proxy
                                                          // '--proxy-server=http://localhost:8000',

                                                            //random proxy
                                                          // '--proxy-server=https://' + vpn_username + ':' + vpn_password + '@us3229.nordvpn.com:89',


                                                         //'--proxy-server=https://rs7.nordvpn.com:89',


                                                         // vietnam
                                                         //'--proxy-server=https://vn9.nordvpn.com:89',






                                                         '--disable-extensions-except=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0,../../../../../lib/chromeextension/ipfuck/bjgmbpodpcgmnpfjmigcckcjfldcicnd/1.3_0,../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0,../../../../../lib/chromeextension/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/3.0.7_0,../../../../../lib/chromeextension/policycontrol/eekommagmgepaafaaegimeldlnnnolgn/0.3.5_0,../../../../../lib/chromeextension/alertblocker/ofjjanaennfbgpccfpbghnmblpdblbef/1.3_0,../../../../../lib/chromeextension/letmeout/hnfdibcbmlppjlkefinedeffoiomlecc/1.3_0,../../../../../lib/chromeextension/showmyip/pdnildedfbigagjbaigbalnfdfpijhaf/1.2.1_0,../../../../../lib/chromeextension/violentmonkey/jinjaccalgkegednnccohejagnlnfdag/2.12.7_0,../../../../../lib/chromeextension/touchvpn/bihmplhobchoageeokmgbdihknkjbknd/3.1.5_0',
                                                     '--load-extension=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0',
                                                     '--load-extension=../../../../../lib/chromeextension/ipfuck/bjgmbpodpcgmnpfjmigcckcjfldcicnd/1.3_0',
                                                     '--load-extension=../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0',
                                                     '--load-extension=../../../../../lib/chromeextension/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/3.0.7_0',
                                                     '--load-extension=../../../../../lib/chromeextension/policycontrol/eekommagmgepaafaaegimeldlnnnolgn/0.3.5_0',
                                                     '--load-extension=../../../../../lib/chromeextension/alertblocker/ofjjanaennfbgpccfpbghnmblpdblbef/1.3_0',
                                                     '--load-extension=../../../../../lib/chromeextension/letmeout/hnfdibcbmlppjlkefinedeffoiomlecc/1.3_0',
                                                     '--load-extension=../../../../../lib/chromeextension/showmyip/pdnildedfbigagjbaigbalnfdfpijhaf/1.2.1_0',
                                                     '--load-extension=../../../../../lib/chromeextension/violentmonkey/jinjaccalgkegednnccohejagnlnfdag/2.12.7_0',
                                                      '--load-extension=../../../../../lib/chromeextension/touchvpn/bihmplhobchoageeokmgbdihknkjbknd/3.1.5_0',





                                                           '--disable-flash-3d',



                                                           // HEADLESS SCRAP ARGS
                                                           disableGPU,
                                                           //'--user-agent=' + randomUSERAGENT(),

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
                                                           '--disable-reading-from-canvas',
                                                           '--lang=en']

                                                         });



                                                         page = await client.newPage();
                                                         await page.waitFor(5000);
                                                         await page.bringToFront();
                                                         log( 'Browser should be started now..' );



                                                         // auth with proxy
                                                         //await page.authenticate({'username': vpn_username, 'password': vpn_password});

/*
                                                         page.goto('https://browserleaks.com/ip', {waitUntil: 'networkidle0', timeout: 0});

*/




                                                         if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
                                                         log('You choosed that proxies are enabled! We will choose now a random proxy..The proxy list can be found at ./lib/nordvpn_all_server.json\nIf you don´t want to use proxies please open ./admin/config.json and change it to: "enable_proxy_request":"no"');

                                                                if( enable_proxy_request == 'yes' && enable_socks_request == 'yes' ) {
                                                                  log('WARNING -  you cant enable proxy and socks at the same time.. please choose one..');
                                                                  return;
                                                                } // if( enable_proxy_request == 'yes' && enable_socks_request == 'yes' ) {
                                                                  if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
                                                                  if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);


                                                         } // if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
                                                         else {

                                                                 log( 'you didnt choosed proxy or socks for this sessions.. so we directly start with the bot..' );
                                                                 process.nextTick(connectMongoDB);

                                                         } // else from if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){










                                              })().catch((e) => {



                                                    if(typeof e == 'string'){
                                                        if( e == 'Error: connect ECONNREFUSED 0.0.0.0:4444' ) log( 'error #12332' );
                                                    }//   if(typeof e == 'string'){
                                                    else{
                                                        log('Error while try to start browser - error :' + JSON.stringify( e, null, 4) )

                                                        if ( e.length == undefined ) {
                                                          log( 'e.length == 0' );
                                                          //process.nextTick(checkSocksSpeed);
                                                        }

                                                    } // else from if(typeof e == 'string'){


                                              }); //   })().catch((e) => {
                                            } //        async function startBROWSER(){























































































function connectMongoDB(){
log( 'ENTER connectMongoDB();' );


// Use connect method to connect to the server
MongoClient.connect(MongoDB_DB_URL, { useNewUrlParser: true }, function(e, clienter) {

if(e){
log( chalk.red.bold('❌ ERROR') + ' Error while try to connect to MongoDB Database - ' + chalk.white.bold('error:\n') + e );
//assert.equal(null, e);
return;
} //   if(e){

log( 'MongoDB - Connected successfully to server..' );

MongoDB = clienter.db( MongoDB_DB_NAME );

process.nextTick( getimport );

//clienter.close();

}); // MongoClient.connect(url, function(err, client) {

} // function connectMongoDB(){









    /*
    -----------------------------------------------------------------------------

    ███████╗████████╗ █████╗ ██████╗ ████████╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
    ███████╗   ██║   ███████║██████╔╝   ██║       ███████╗██║     ██████╔╝██║██████╔╝   ██║
    ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║
    ███████║   ██║   ██║  ██║██║  ██║   ██║       ███████║╚██████╗██║  ██║██║██║        ██║
    ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝
    */































    function getimport() {
    log( 'ENTER getimport()' );

    t33n.layer = 1; // tells the bot at which layer we are for the hardware usage check

    var collection = MongoDB.collection('import');

      // Find random document
      //collection.aggregate([ { $match: { used: 0 } }, { $sample: { size: 1 } } ]).toArray(function(e, docs) {


        // find next alphabetic document with used = 0
        collection.find( {"used": 0} ).limit( 1 ).toArray(function(e, docs) {


        if(e){
        log( chalk.red.bold('❌ ERROR') + ' There was an error while try to get the current page - ' + chalk.white.bold('error:\n') + e );
        //assert.equal(null, e);
        return;
      } //   if(e){





        if( docs[0] ){
        log( 'Found the following records:\n' + JSON.stringify(docs, null, 4) );
        log( chalk.green.bold('✔ SUCCESS') + ' LISTING AREA - We successfully get the current import from MongoDB:\n' + chalk.white.bold( docs[0].url ) );


        t33n.url = docs[0].url;
        t33n.url_original  = docs[0].url;
          log( 'current import url:' + t33n.url );



          process.nextTick( scrapSingleItemURL );



        } //     if( docs[0] ){
        else{


          log(`It seems that we used now all data from the DB. Everything was marked as used..

          ############ FINISH ##############

          We will start now the single item link part of the script..`);

          process.nextTick( singleItemAREA );


        } // else from if( docs[0] ){



}); // collection.find( {"used": 0} ).toArray(function(e, docs) {





} // function getimport() {
































































































































































        let paginationNumb = 0;
        let banchecker = 1;
        let scrapSingleItemURL_active = true;
        function scrapSingleItemURL() {
          (async () => {
          log( 'ENTER scrapSingleItemURL()' +  '\n\nbanchecker: ' + banchecker  + '\n\nt33n.url: ' + t33n.url );

          t33n.layer = 1; // tells the bot at which layer we are for the hardware usage check



                         let paginationNumbOld = paginationNumb;
                         paginationNumb = paginationNumb + 1; // + 1 BACKUP
                         log('\npaginationNumbOld: ' + paginationNumbOld);
                         log('\npaginationNumb: ' + paginationNumb);



                         let urlEdit = t33n.url.match(/[&][_]pgn[=](\d+)/gmi);
                         log('\n#312 urlEdit: ' + urlEdit);



                         // 200 items via page &_ipg=200
                         // change url here for pagination url methode ebay: &_pgn=2&_ipg=50
                         if ( urlEdit !== null ){
                          log('#2 - urlEdit !== null');


                                        if( paginationNumb >= 1 ) {
                                          t33n.url = t33n.url.replace( urlEdit, '&_pgn=' + paginationNumb );
                                          log('\nCURRENT URL #1: ' + urlEdit);
                                       } //     if( paginationNumb >= 1 ) {

                         } // if ( matcher !== null ){
                         else{

                                          t33n.url = t33n.url + '&_ipg=200' + '&_pgn=1';
                                          log( '\nCURRENT URL #0: ' + urlEdit );

                         } // else from if ( matcher !== null ){






          try {
              await page.goto(t33n.url, {waitUntil: 'networkidle0', timeout: 35000});
          } catch(e) {
              log('#32411 error: ' + e.message + '\n\nWe will wait now');

                 paginationNumb = paginationNumbOld;


              if( e.toString().match('Navigation timeout of') ){
              log( '#32411 - timeout error found.. we change proxy now..' );



                        if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ) {
                        log( "#32411 - if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ) {" );

                                  changeIP = true;

                                  log( '#32411 - We delete now all cookies..' );
                                  const client = await page.target().createCDPSession();
                                  await client.send('Network.clearBrowserCookies');
                                  await client.send('Network.clearBrowserCache');


                                  if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
                                  if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);

                        } // if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ) {
                        else {

                                  log( "#32424aa -  we wait some time and restart upload.." );
                                  setTimeout(() => { process.nextTick(scrapSingleItemURL) }, 15000);

                        } // else from  if( e.match('Navigation timeout of') ){




              } //   if( e.match('Navigation timeout of') ){
              else {
              log( "#32424 -  we wait some time and restart upload.." );
                setTimeout(() => { process.nextTick(scrapSingleItemURL) }, 15000);
              } // else from  if( e.match('Navigation timeout of') ){



              return;
          }
          log( 'Successfully loaded: ' + t33n.url );









          let css = await page.evaluate(() => document.querySelector('body').outerHTML);
          //log( 'upload status html:' + css );
          let $ = cheerio.load(css);








                     let checkIfItemsFound = $( '.srp-controls__count-heading' ).text();
                     log( 'checkIfItemsFound: ' + checkIfItemsFound );


                    if (  checkIfItemsFound == '0' ){

                       log('\n#0 It seems that we cant find any items on this page.. current page url: ' + t33n.url + '\n We will go now to the next import page..');
                       process.nextTick( markimportasued );
                       return;

                    } // else from if (visible){






/*
          await page.waitForNavigation({
            waitUntil: 'networkidle0',
          });
*/


/*


          checkforBAN = $(css).find('.title_form').text();
          log( 'checkforBAN:' + checkforBAN + '\n\n' );

          if( checkforBAN == 'Uploading has been disabled' ){

             log( 'warning ban text was found.. we create now new acc' );
             changeIP_NEWACC = true;



             if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
             log('#234243 - if proxy too');

                      if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
                      if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);


             } // if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
             else {

                     log( '#234243 - if proxy false' );
                     process.nextTick(createnewACC);

             } // else from if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){



          return;
          } //   if( checkforBAN == 'Uploading has been disabled' ){
          log( 'As it seems we are not banned yet.. lets go :)' );






          checkforSIGNIN = $(css).find('input[type="file"]').html();
          log( 'checkforSIGNIN:' + checkforSIGNIN + '\n\n' );

          if(checkforSIGNIN == null){

              log( 'as it seems we are not sign-in.. this means we create now new account..' );
              changeIP_NEWACC = true;




              if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
              log('#234243aa - if proxy too');



                        if( firstRUN == true ) {

                          log( 'firstRUN == true' );
                          process.nextTick( createnewACC );

                        } //   if( firstRUN = true ) {
                        else {

                          log( 'firstRUN == false' );
                          if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
                          if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);


                        } // else from   if( firstRUN = true ) {

              } // if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
              else {
              firstRUN = false;

                      log( '#234243aa - if proxy false .. we cant find input button..' );
                      return;
                      process.nextTick( createnewACC );

              } // else from if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){




          return;
          } // if(!checkforSIGNIN){
          firstRUN = false;


          */












/*
https://www.ebay.de/itm/Bettgestell-Dunkelbraun-Massivholz-Kiefer-90-200-cm/174201282669?_trkparms=ispr%3D1&hash=item288f34a06d:g:mm8AAOSwM7VeVC-n&enc=AQAEAAACcIQvEcHUrT7nmUC3yY5qbPyaBN1nJEDYW8MyypsJPgXKo0mqHRozhbuScFNjCL0zkoVrXkkYjv8f13T9M3H0hiKi2IK20TFqAUr6xzD72R9fHOCwAjA6QE7m1M4zAdrYQV8vOEJy%2B0KR8%2BMtxo%2FOaJY7rz%2BBZwACbAnFXO4aOJoRfZr4IDJ4WGgoTzJcotdgKtcuC5eXmhqVQ5hY2pILOSTD%2FYDlQTb6r0NZHa86c8yiy0EOFllvghCG20tBte%2BIKPTuMD29ePZP9W1hCfB7ljBZH0WYoQAkThYaAFTa3Bz076BP%2B2chEZKVp0yi4jR8zCE23x1wZx0ibGvcsOdhBiCdxxsPHlx1T6atMZr2VOfjTr9WssteyPU6vWvD%2FV06VAC5MVF0uDsyMTNSS8QVty9XC8XlXrvMpM7m9AcBg7Rtddo5ImnTVL5R3VXsFpVRU89%2FWO7GVfE10809qChriDiKv9rsUnalIf4Z3slMlQGkp8G0aRT7o%2FYb0OzaLuMCQeb7EPshHPp2wxXnjFfFDkkJHRRs2pMUm%2BxkrJpEQ%2BGxuDEKiVYO1qq%2BpQtQoo7DasO0a%2FqPgt6EXxmxzrhyZclLfY937IP8iZDEp4lLX3vGH4Dmc1xytHQzmHkXDMtjC6xvOxruMzcm0yY%2B8miQpMb8PNe%2BkNWlh2JTc4ZqWlV8TcM0%2FtlFj1pE038Dnr%2Bb6yoZ5b9WvMs1iqJLR6huHtuC7EEtRpUscQDfR6Eye4fNnMMsViN4I%2F7JzfD%2BuCRbn4npmb9zwF%2BX%2B29ghpYCcbBekXnLD5E%2FlO0lhW8xsEMCVzgxCLIN%2FWpkRCaHlDalQg%3D%3D&checksum=1742012826694ab791118c134c718e2ae5572b5983ed
*/


                               $( 'li.s-item' ).each(function(){

                                    let url = $( this ).find( '.s-item__link' ).attr( 'href' );
                                    if(url){
                                                          url = url.replace( /\?_trkparms=(.*)/gmi, '' );
                                                          log( 'Current single item url we found: ' + url );
                                                          scrappedSingleItemURLs_AR.push( url );
                                    } //   if(url){


                               }) //  $( 'li.s-item' ).each(function(){
                              log( 'li.s-item each loop done..' );






                                                   let checkPaginationNext = $( '.pagination__next' ).attr('aria-disabled');
                                                   log( 'checkPaginationNext: ' + checkPaginationNext );


                                                  if (  checkPaginationNext == 'true' ){

                                                                       scrapSingleItemURL_active = false;
                                                                       log('\n#0 It seems that this was the last page.. current page url: ' + t33n.url + '\n We will go now to the next import page..');
                                                                       MongoDB_EXPORT_single_item_url( scrappedSingleItemURLs_AR );


                                                  } //     if (  checkPaginationNext == 'true' ){
                                                  else {

                                                                      log( 'We done with this current page and switch now to the next.. current page url: ' + t33n.url );
                                                                      MongoDB_EXPORT_single_item_url( scrappedSingleItemURLs_AR );

                                                  } // else from     if (  checkPaginationNext == 'true' ){




















})().catch((e) => error2(e));
} // function scrapSingleItemURL(){





  function error2(e){
    console.log('#35 - Error:' + e);

    if ( e.toString().match( 'net::ERR_EMPTY_RESPONSE' ) ){
        log( '#35 - net::ERR_EMPTY_RESPONSE was found we reload page..' );
        process.nextTick( scrapSingleItemURL );
    } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){

      if ( e.toString().match( 'net::ERR_NAME_NOT_RESOLVED' ) ){
          log( '#35 - net::ERR_NAME_NOT_RESOLVED was found we reload page..' );
          process.nextTick( scrapSingleItemURL );
      } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


        if ( e.toString().match( 'net::ERR_CONNECTION_CLOSED' ) ){
            log( '#35 - net::ERR_CONNECTION_CLOSED was found we reload page..' );
            process.nextTick( scrapSingleItemURL );
        } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){



        if ( e.toString().match( "TypeError: Cannot read property 'outerHTML' of null" ) ){
            log( '#35 - TypeError: Cannot read property outerHTML of null was found we reload page..' );
            process.nextTick( scrapSingleItemURL );
        } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


          if ( e.toString().match( "TypeError: Cannot read property 'uploadFile' of null" ) ){
              log( '#35 - TypeError: Cannot read property uploadFile of null was found we reload page..' );
              process.nextTick( scrapSingleItemURL );
          } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


            if ( e.toString().match( 'Error: failed to find element matching selector "#titleTmplField_0"' ) ){
                log( '#35 - Error: failed to find element matching selector "#titleTmplField_0" was found we reload page..' );
                process.nextTick( scrapSingleItemURL );
            } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){






  } // function error2(){



















































































































































































































































function singleItemAREA(){
log( 'singleItemAREA()' );


  var collection = MongoDB.collection('single_item_url');

    // Find random document
    //collection.aggregate([ { $match: { used: 0 } }, { $sample: { size: 1 } } ]).toArray(function(e, docs) {


      // find next alphabetic document with used = 0
      collection.find( {"used": 0} ).limit( 1 ).toArray(function(e, docs) {


      if(e){
      log( chalk.red.bold('❌ ERROR') + ' There was an error while try to get the current single item url page - ' + chalk.white.bold('error:\n') + e );
      //assert.equal(null, e);
      return;
    } //   if(e){





      if( docs[0] ){
      log( 'Found the following records:\n' + JSON.stringify(docs, null, 4) );
      log( chalk.green.bold('✔ SUCCESS') + ' LISTING AREA - We successfully get the current single item url from MongoDB:\n' + chalk.white.bold( docs[0].url ) );


      t33n.url = docs[0].url;
      t33n.url_original  = docs[0].url;
      log( 'current single_item_url:' + t33n.url );



        process.nextTick( exportData_singleItemURLS );



      } //     if( docs[0] ){
      else{


          log( `############ FINISH ##############
          Please wait we will close your browser now..`);



                                  (async () => {

                                       await client.close();
                                       setTimeout(() => { process.exit() }, 10000);

                                     })().catch((e) => console.error('#4224aa - Error while try to end the current session' + e));



      } // else from if( docs[0] ){



  }); // collection.find( {"used": 0} ).toArray(function(e, docs) {






} // function singleItemAREA(){









































function exportData_singleItemURLS(){
(async () => {
log( 'exportData_singleItemURLS()' );


t33n.layer = 2; // tells the bot at which layer we are for the hardware usage check





try {
    await page.goto(t33n.url, {waitUntil: 'networkidle0', timeout: 35000});
} catch(e) {
    log('#324aa error: ' + e.message + '\n\nWe will wait now');

    if( e.toString().match('Navigation timeout of') ){
    log( '#324few - timeout error found.. we change proxy now..' );



              if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ) {
              log( "#32weff - if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ) {" );

                        changeIP = true;

                        log( '#3regerg1 - We delete now all cookies..' );
                        const client = await page.target().createCDPSession();
                        await client.send('Network.clearBrowserCookies');
                        await client.send('Network.clearBrowserCache');


                        if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
                        if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);

              } // if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ) {
              else {

                        log( "#3wfewfwf4aa -  we wait some time and restart upload.." );
                        setTimeout(() => { process.nextTick( exportData_singleItemURLS ) }, 15000);

              } // else from  if( e.match('Navigation timeout of') ){




    } //   if( e.match('Navigation timeout of') ){
    else {
    log( "#5225 -  we wait some time and restart upload.." );
      setTimeout(() => { process.nextTick( exportData_singleItemURLS ) }, 15000);
    } // else from  if( e.match('Navigation timeout of') ){



    return;
}
log( 'Successfully loaded single item url: ' + t33n.url );









let css = await page.evaluate(() => document.querySelector('body').outerHTML);
//log( 'upload status html:' + css );
let $ = cheerio.load(css);
let singleItemURL_JSON = {};







           let checkIfItemsFound = $( '#itemTitle' ).text();
           log( '#2 - checkIfItemsFound: ' + checkIfItemsFound );


          if (  checkIfItemsFound == '0' ){

             log('\n#2 It seems that we cant find any items on this page.. current page url: ' + t33n.url + '\n We will go now to the next single item url page..');
             process.nextTick( markSingleItemURLasued );
             return;

          } // else from if (visible){





















            let title = $( '#itemTitle' ).text();
            if(  $( '#itemTitle > span' )  ) {
            log( '#itemTitle > span was found..' );

                 $( '#itemTitle > span' ).remove();
                 title = $( '#itemTitle' ).text();

            } // if(  $( '#itemTitle > span' ).text()  ) {
            log( '#single item url - title: ' + title );
            if( title ) singleItemURL_JSON.title = entities.decode(title).trim();









            let price = $( '#prcIsum' ).text();
            log( '#single item url - price: ' + price );
            if( price ) singleItemURL_JSON.price = entities.decode(price).trim();









            let seller_name = $( '.bdg-90 > .mbg.vi-VR-margBtm3 > a > span' ).text();
            log( '#single item url - seller_name: ' + seller_name );
            if( seller_name ) singleItemURL_JSON.seller_name = entities.decode(seller_name).trim();

            let seller_url = $( '.bdg-90 > .mbg.vi-VR-margBtm3 > a' ).attr('href');
            log( '#single item url - seller_url: ' + seller_url );
            if( seller_url ) singleItemURL_JSON.seller_url = entities.decode(seller_url).trim();

            let seller_feedback_url = $( '.bdg-90 > .mbg.vi-VR-margBtm3 > .mbg-l > a' ).attr('href');
            log( '#single item url - seller_feedback_url: ' + seller_feedback_url );
            if( seller_feedback_url ) singleItemURL_JSON.seller_feedback_url = entities.decode(seller_feedback_url).trim();

            let seller_feedback_amount = $( '.bdg-90 > .mbg.vi-VR-margBtm3 > .mbg-l > a' ).text();
            log( '#single item url - seller_feedback_amount: ' + seller_feedback_amount );
            if( seller_feedback_amount ) singleItemURL_JSON.seller_feedback_amount = entities.decode(seller_feedback_amount).trim();

            let seller_feedback_percent = $( '#si-fb' ).text();
            log( '#single item url - seller_feedback_percent: ' + seller_feedback_percent );
            if( seller_feedback_percent ) singleItemURL_JSON.seller_feedback_percent = entities.decode(seller_feedback_percent).trim();


            let seller_status = $( '.si-pd-newFix' ).text();
            log( '#single item url - seller_status: ' + seller_status );
            if( seller_status ) singleItemURL_JSON.seller_status = entities.decode(seller_status).trim();




















            let instock = $( '#qtySubTxt' ).text();
            log( '#single item url - instock: ' + instock );
            if( instock ) singleItemURL_JSON.instock = entities.decode(instock).trim();
































             log( 'FINAL singleItemURL_JSON.data: ' + JSON.stringify(singleItemURL_JSON, null, 4) );



})().catch((e) => error3(e));
} // function exportData_singleItemURLS(){





  function error3(e){
    console.log('#353 - Error:' + e);

    if ( e.toString().match( 'net::ERR_EMPTY_RESPONSE' ) ){
        log( '#353 - net::ERR_EMPTY_RESPONSE was found we reload page..' );
        process.nextTick( exportData_singleItemURLS );
    } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){

      if ( e.toString().match( 'net::ERR_NAME_NOT_RESOLVED' ) ){
          log( '#353 - net::ERR_NAME_NOT_RESOLVED was found we reload page..' );
          process.nextTick( exportData_singleItemURLS );
      } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


        if ( e.toString().match( 'net::ERR_CONNECTION_CLOSED' ) ){
            log( '#353 - net::ERR_CONNECTION_CLOSED was found we reload page..' );
            process.nextTick( exportData_singleItemURLS );
        } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){



        if ( e.toString().match( "TypeError: Cannot read property 'outerHTML' of null" ) ){
            log( '#353 - TypeError: Cannot read property outerHTML of null was found we reload page..' );
            process.nextTick( exportData_singleItemURLS );
        } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


          if ( e.toString().match( "TypeError: Cannot read property 'uploadFile' of null" ) ){
              log( '#353 - TypeError: Cannot read property uploadFile of null was found we reload page..' );
              process.nextTick( exportData_singleItemURLS );
          } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


            if ( e.toString().match( 'Error: failed to find element matching selector "#titleTmplField_0"' ) ){
                log( '#353 - Error: failed to find element matching selector "#titleTmplField_0" was found we reload page..' );
                process.nextTick( exportData_singleItemURLS );
            } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){




  } // function error3(){




































































































































































/*

function createnewACC(){
(async () => {
log('createnewACC()');





if( firstRUN == false ) {
log( '#2 - firstRUN == false' );


    log( 'We delete now all cookies..' );
    const client = await page.target().createCDPSession();
    await client.send('Network.clearBrowserCookies');
    await client.send('Network.clearBrowserCache');





    try {
        await page.goto(t33n.url, {waitUntil: 'load'});
    } catch(e) {
        log('#32411 error: ' + e.message);
      //  setTimeout(() => { process.nextTick(createnewACC) }, 60000);
        return;
    }



} //   if( firstRUN = true ) {
firstRUN = false;





await page.waitFor(10000);


    let css = await page.evaluate(() => document.querySelector('body').outerHTML);
    //log( 'upload status html:' + css );
    let $ = cheerio.load(css);

    let checkforSIGNUP = $(css).find('#username');
    log( 'checkforSIGNUP:' + checkforSIGNUP + '\n\n' );


    if ( checkforSIGNUP ){
    log( "checkforSIGNUP was found.." );


           let username = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey
           log( 'acc creator - username: ' + username );
           let email = username + '@gmail.com';
           log( 'acc creator - email: ' + email );
           let password = generatePassword(12, false);
           log( 'acc creator - password: ' + password );


           await page.waitFor(2000);
           await page.$eval( '#username', (el, value ) => el.value = value, username );

           await page.waitFor(2000);
           await page.$eval( '#password', (el, value ) => el.value = value, password );

           await page.waitFor(2000);
           await page.$eval( '#email', (el, value ) => el.value = value, email );









           await page.waitFor(3000);
           // click submit button
           log( '#3 - We click now on the save button..' );
           let item = '#auth_reg';
           await page.evaluate((item) => {
                 document.querySelector(item).click();
           }, item);

           await page.waitFor(10000);
           await page.waitForNavigation({
                waitUntil: 'networkidle0',
           }),





           css = await page.evaluate(() => document.querySelector('body').outerHTML);
           //log( 'upload status html:' + css );
           $ = cheerio.load(css);

           let userpanel = $(css).find('#user-panel');
           //log( '#2 - userpanel:' + userpanel + '\n\n' );



           if( userpanel ){
           log( 'userpanel was found.. as it seems acc creation was successfully' );
















           // save credits in json
           let credits = {"username": username, "password": password, "email": email}


           let jsonpath = '/home/t33n/Desktop/scrap/accs.json';
           fs.readFile(jsonpath, 'utf8', async function (e, data) {

               if(e) {
                 log('error while reading credits json..', e);
                 return;
               } // if(e) {

               let obj = JSON.parse(data);
               obj.credits.push(credits); //add some data
               let json = JSON.stringify(obj, null, 4); //convert it back to json


                fs.writeFile(jsonpath, json, async function(e, result) {

                  if(e) {
                    log('error while append data credits json..', e);
                    return;
                  } // if(e) {



                               process.nextTick( scrapSingleItemURL );


                 }); //  fs.writeFile(jsonpath, json, function(e, result) {

           }); // fs.readFile(jsonpath, 'utf8', function (err, data) {






       } // if( userpanel ){
       else {
       log( "userpanel was not found.. as it seems the acc creation was not succefully.. lets try again" );
       changeIP_NEWACC = true;



                           if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
                           log('#234243dd - if proxy too');

                                    if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
                                    if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);


                           } // if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
                           else {

                                   log( '#234243dd - if proxy false' );
                                   process.nextTick(createnewACC);

                           } // else from if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){









     } // else from if( userpanel ){



  } //   if ( checkforSIGNUP ){
  else {
  log( "checkforSIGNUP was NOT found.. something went wrong fix the script" );

  } // else from if ( checkforSIGNUP ){









})().catch((e) => error4(e));
} // function scrapSingleItemURL(){





    function error4(e){
      log('#3544 - Error:' + e);

    } // function error4(e){

*/










































































































































function markimportasued(){

log('\n\nWe will mark now the following import url as used:' + t33n.url_original);



var query = { url: t33n.url_original };
var newvalues = { $set: { used: 1 } };


var collection = MongoDB.collection('import');
collection.updateOne(query, newvalues, function(e, res) {
 if(e){
      log(chalk.red.bold('❌ ERROR') + ' #1 There was an error while try to mark the current page as used' + chalk.white.bold('error:\n') + e);
      return;
  } // if(e){
//  assert.equal(err, null);
//  assert.equal(1, result.result.n);
 log("Updated the current page and marked it as used=1..");
 //callback(result);
 process.nextTick( usagechecker );

}); // collection.updateOne(query, newvalues, function(e, res) {




} // function markimportasued(){

































  function markSingleItemURLasued(){

  log('\n\nWe will mark now the following single_item_url url as used:' + t33n.url_original);



  var query = { url: t33n.url_original };
  var newvalues = { $set: { used: 1 } };


  var collection = MongoDB.collection('single_item_url');
  collection.updateOne(query, newvalues, function(e, res) {
   if(e){
        log(chalk.red.bold('❌ ERROR') + ' #1 There was an error while try to mark the current page as used' + chalk.white.bold('error:\n') + e);
        return;
    } // if(e){
  //  assert.equal(err, null);
  //  assert.equal(1, result.result.n);
   log("Updated the current single item url and marked it as used=1..");
   //callback(result);
   process.nextTick( usagechecker );

  }); // collection.updateOne(query, newvalues, function(e, res) {



  } // function markSingleItemURLasued(){










































































































































    function MongoDB_EXPORT_single_item_url(single_item_ARRAY){
    log( 'ENTER MongoDB_EXPORT_single_item_url()' );
    //log( '\n\n#009 current single_item_ARRAY: ' + JSON.stringify(single_item_ARRAY, null, 4) );

    var collection = MongoDB.collection('single_item_url');



    var tempAR = ['t33n temp rng..'];
    var tempAR2 = [];

    for( var d of single_item_ARRAY ){
    tempAR.push(d);
    }











    process.nextTick( looper1 );
    function looper1(){
    log( 'ENTER looper1()' );

    tempAR.shift();
    log( 'tempAR.length: ' + tempAR.length );


      if( !tempAR[0] ){
      log( '!tempAR[0]' );




             if( !tempAR2[0] ){

                    scrappedSingleItemURLs_AR = [];
                    log( '!tempAR2[0]' );
                    if ( scrapSingleItemURL_active == false ) process.nextTick( markimportasued );
                    else process.nextTick( scrapSingleItemURL );

             } //  if(!tempAR2[0] ){
            else{

                  log( '#232kl43kj34 -  loop done..' );
                  process.nextTick( insertdocument );

            } // else from   if(!tempAR2[0] ){





      } //    if( !tempAR[0] ){
      else{
      log( '#424 tempAR[0]: ' + tempAR[0] );

       // CHECK IF ENTRY ALREADY EXIST IN DATABASE
      collection.find( {"url": tempAR[0]} ).toArray(function(e, docs) {
        log( '#902349023490 done..docs:' + JSON.stringify(docs, null, 4) );
         if(!docs[0]){
           log( 'MongoDB - Search value was not found..' );
            tempAR2.push(  {"url": tempAR[0], "used":0, "description": ""}  );
          } else log( 'Current item was already found in collection.. item: ' + tempAR[0] );

         process.nextTick(looper1);
      }); //   collection.find( {"profileurl": d.profileurl, "eventname": d.eventname} ).toArray(function(e, docs) {


      } // else from   if( iterations == 0 ){

    } // function looper1(){















    function insertdocument(){
    log( 'ENTER insertdocument()' );


    //log( '#902349023490 done.. tempAR2:' + JSON.stringify(tempAR2, null, 4) );


    // Insert some documents
    collection.insertMany(tempAR2, function(e, result) {
    if (e) {
      //assert.equal(e, null);
      log( chalk.red.bold('❌ ERROR') + '#234234234 - There was an error while write data to MongoDB.. Error:\n' + chalk.white.bold(e) );
      return;
    } // if (e) {

      scrappedSingleItemURLs_AR = [];
      log( 'Inserted documents into the collection..' );
      if ( scrapSingleItemURL_active == false ) process.nextTick( markimportasued );
      else process.nextTick( scrapSingleItemURL );

    }); // collection.insertMany(tempAR, function(e, result) {



  } // function insertdocument(){












    } // function MongoDB_EXPORT_single_item_url(){



















































































































   function usagechecker(){
   log( 'ENTER usagechecker()' );

   var osu = require('node-os-utils');
   var mem = osu.mem;

   mem.info().then(info => {
       log( '#75643 - Hardware Usage Info - Memory: ' + info );


       if( Number(info.freeMemPercentage) <= 5 ){
       log( '\n##INFO## #43gegegerg42 - WE WILL RESTART NOW THE SCRIPT BECAUSE WE REACHED RAM LIMITS! Number(info.freeMemPercentage): ' + Number(info.freeMemPercentage) );



       (async () => {

            await client.close();
            if( osPLATFORM == 'darwin' ) process.nextTick( killcurrentSESSION_MAC );
            if( osPLATFORM == 'linux' ) process.nextTick( killcurrentSESSION_LINUX );
            if( osPLATFORM == 'win32' ) process.nextTick( killcurrentSESSION_Windows );


          })().catch((e) => console.error('#434636436g - Error while try to end the current session' + e));







































        function killcurrentSESSION_LINUX(){
        log('ENTER killcurrentSESSION_LINUX()');






                              setTimeout(() => {
                              log('#l2jerberbeberbebkl4');


                                            var execline = 'gnome-terminal -e ./BOT - Start.command'
                                            log('#9rtrntrtnrntnt4 execline: ' + execline)


                                              exec(execline, function(e, stdo, stde) {

                                                          if ( stde || e ) {
                                                            log( chalk.red.bold('❌ ERROR ') + "#rrtnrtntn45 - There was an error while try to exec: " + chalk.white.bold(execline) + "\nError:\n" + chalk.white.bold( e ) + "\nstderr:\n" + chalk.white.bold( stde ) );
                                                            return;
                                                          } //  if ( stderr || err ) {

                                                            log( "#3rtnrtnn5 - We successfully exec: " + chalk.white.bold(execline) + "\nstde:\n" + chalk.white.bold( stde ) );


                                                    }); // exec(execline, function(e, stdo, stde) {



                              }, 10000);
                              setTimeout(() => {   process.exit();   }, 15000);











        } // function killcurrentSESSION_LINUX(){































   function killcurrentSESSION_MAC(){
   log('ENTER killcurrentSESSION_MAC()')







                         setTimeout(() => {
                         log('#l2jkrtrthrhrhrh3jkl4')





                                       var execline = 'open BOT - Start.command'
                                       log('#97rthrthrh94 execline: ' + execline)



                                         exec(execline, function(e, stdo, stde) {

                                                     if ( stde || e ) {
                                                     log( chalk.red.bold('❌ ERROR ') + "#3rrthrhrthrn45 - There was an error while try to exec: " + chalk.white.bold(execline) + "\nError:\n" + chalk.white.bold( e ) + "\nstderr:\n" + chalk.white.bold( stde ) );
                                                     return;
                                                     } //  if ( stderr || err ) {


                                                       log('#36rtnrnrnrnt03');

                                               }); // exec(execline, function(e, stdo, stde) {


                         }, 10000);
                         setTimeout(() => {   process.exit();   }, 15000);










   } // function killcurrentSESSION_MAC(){













                       function killcurrentSESSION_Windows(){
                       log('ENTER killcurrentSESSION_Windows()')



                                                  setTimeout(() => {
                                                  log('#l2jkrtrthrhrhrh3jkl4')


                                                                var execline = 'start cmd /k call BOT - Start.bat'
                                                                log('#97rthrthrh94 execline: ' + execline)

                                                                  exec(execline, function(e, stdo, stde) {

                                                                              if ( stde || e ) {
                                                                                log( chalk.red.bold('❌ ERROR ') + "#3rrthrhrthrn45 - There was an error while try to exec: " + chalk.white.bold(execline) + "\nError:\n" + chalk.white.bold( e ) + "\nstderr:\n" + chalk.white.bold( stde ) );
                                                                                return;
                                                                              } //  if ( stderr || err ) {

                                                                                log('#36rtnrnrnrnt03');


                                                                      }); // exec(execline, function(e, stdo, stde) {

                                                      }, 10000);
                                                      setTimeout(() => {   process.exit();   }, 15000);




                       } // function killcurrentSESSION_Windows(){




















     } //       if( Number(info.freeMemPercentage) < 5 ){
     else {
                 log( '#ß02342424234234bb  - we go now back to getimport() - Number(info.freeMemPercentage): ' + Number(info.freeMemPercentage) );
                 log( '#4234 - t33n.layer: ' + t33n.layer );

                 if( t33n.layer == 1 ) process.nextTick( getimport );
                 if( t33n.layer == 2 ) process.nextTick( getsingle_item_url );

   } // else from       if( Number(info.freeMemPercentage) < 5 ){

















   }); // mem.info().then(info => {
   } // function usagechecker(){
