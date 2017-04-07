export default (props) => {
    
   let links = document.querySelector('.js-tab-links');
   let content = document.querySelector('.js-tab-content');
    
    $(links)
        .find('a[href*="' + props.defaultHash + '"]')
        .addClass('is-active');
    
    checkDefaultHash();
    
    
   $(links).on('click', function(e) {
       e.preventDefault();
       let url = e.target.getAttribute('href');
       
       $(content).load(url + '.html' + ' .tab-content');
       
       location.hash = '#' + url;
   });
    
    let hashEvents = ['hashchange', 'load'];
    
    checkCurrentHash(hashEvents);
    
    function checkCurrentHash(events) {
        for (let i = 0; i < events.length; i++) {
            $(window).bind(events[i], function() {
                if (location.hash) {
                    let stateHash = location.hash.substring(1);
                    
                    $(links)
                        .find('a[href*="' + stateHash + '"]')
                        .addClass('is-active')
                        .siblings()
                        .removeClass('is-active');
                    
                    $(content).load(stateHash + '.html' + ' .tab-content'); 
                }
                checkDefaultHash();
                content.innerHTML = '';
            });
        }
        
    }
    
    function checkDefaultHash() {
        if(!location.hash) {
            $(content).load(props.defaultHash + '.html' + ' .tab-content');
        }
    }
    
}