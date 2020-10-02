'use strict'
console.log( 'controller.js - Current working directory: ' + __dirname );

const checkRAM = require('../services/checkram');
const bot = require('../services/bot');

      const controller = {

         startBROWSER: async function() { return await bot.startBROWSER(); },
         getPage: async function(result) { return await bot.getPage(result); },
         scrapSingleItemURL: async function(page) { return await bot.scrapSingleItemURL(page); },
         exportData_singleItemURLS: async function(page, result) { return await bot.exportData_singleItemURLS(page, result); },
         openLink: async function(ytLinks_AR, page) { return await bot.openLink(ytLinks_AR, page); },
         checkRAM: async function() { return await checkRAM.status(); }

      }; // let controllers = {


module.exports = controller;
