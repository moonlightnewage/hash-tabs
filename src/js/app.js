import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import sayHello from './lib/sayHello.js';
import hashTabs from './hashTabs.js';

sayHello();

$(document).ready(function() {
    
    hashTabs({
        defaultHash: 'block-1'
    });
    
});