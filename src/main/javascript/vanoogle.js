/*
 *  (C) Copyright 2012, canofsleep.com
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
$(function () {
	$("form").each(function(){
		 if (/search$/.test(this.getAttribute('action'))) {
			 var parent = (this.parentElement || this.parentNode);
			 parent.insertBefore($('#VanoogleSearch')[0], this);
			 parent.removeChild(this);
			 return false;  // do not continue
		 }
	});
});

//Load the Search API
google.load('search', '1');

//Set a callback to load the Custom Search Element when you page loads
google.setOnLoadCallback(function(){
	$("script").each(function(){
    	if (/^https:\/\/www\.google\.com\/jsapi/.test(this.getAttribute('src'))) {
    		if (this.id) {
    			var csc = new google.search.CustomSearchControl(this.id);
    			csc.setResultSetSize(8);  // TODO: make this a Vanoogle preference.

    		    var results = document.createElement('ul');
    		    results.id = 'VanoogleResults';
    		    results.className = 'DataList MessageList';
    		    $('#Body').append(results);
    		    
    		    var options = new google.search.DrawOptions();
    		    options.setSearchFormRoot('VanoogleSearch');
    		    csc.draw(results, options);
    		    
    		    // Use "vanoogle_" as a unique ID to override the default rendering.
    		    google.search.Csedr.addOverride("vanoogle_");
    		}
    		
    		return false;  // do not continue
    	}
    });
}, true);