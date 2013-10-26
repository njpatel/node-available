'use strict';

var difflib = require('difflib')
  , request = require('request')
  , URI = require('URIjs')
  ;

var Available = module.exports;

/**
 * Set the modules default settings
 *
 * @param  {object}      settings              An object with settings
 * @param  {float}       settings.minRatio     Minimum match ratio
 * @return {undefined}
 */
Available.configure = function(settings) {

}

/**
 * Check if a webpage is available. This will check if the URL 404s, has a soft-404 page
 * or if requesting the URL redirects to a parent page.
 *
 * @param  {string}       url                   The url of the webpage to check availability
 * @param  {function(err,isAvailable,isSoft)}   A function to receive the result, or an error
 * @return {undefined}
 */
Available.check = function(url, done) {

}

/**
 * Compare two html sources for likelyness
 *
 * @param  {string}     html1       The first html
 * @param  {string}     html2       The second html
 * @return {float}                  The value of likelyness on a scale of 0 to 1.0, whether the latter is a perfect match
 */
Available.compare = function(html1, html2) {

}


//
// Private
//
function getSource(uri, done) {

}

function getHeaders(uri, done) {
  
}