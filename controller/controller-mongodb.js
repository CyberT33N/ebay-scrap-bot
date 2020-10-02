'use strict'

const mongodb = require('../services/mongodb');

const controller = {

   MongoDB_EXPORT_single_item_url: async function(scrappedSingleItemURLs_AR) { return await mongodb.MongoDB_EXPORT_single_item_url(scrappedSingleItemURLs_AR); },
   MongoDB_EXPORT_single_item_url_scrappedData: async function(singleItemURL_JSON) { return await mongodb.MongoDB_EXPORT_single_item_url_scrappedData(singleItemURL_JSON); },
   getimport: async function() { return await mongodb.getimport(); },
   getSingleItemURL: async function() { return await mongodb.getSingleItemURL(); },
   markimportasued: async function(result) { return await mongodb.markimportasued(result); },
   markSingleItemURLasued: async function(result) { return await mongodb.markSingleItemURLasued(result); },
   importDB: async function(json) { return await mongodb.importDB(json); },
   getExport: async function(searchURL) { return await mongodb.getExport(searchURL); }

};

module.exports = controller;
