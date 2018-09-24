var ssearch, mainpage, editb, msg;
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function(){
    ssearch = document.getElementById("ssearch");
    mainpage = document.getElementById("mainpage");
    editb = document.getElementById("editb");
    msg = {url : ""};

    ssearch.addEventListener("click", function(){
        if(editb.value=="")
            return;
        msg.url = 'https://nhentai.net/g/' + editb.value + '/';
        sendMsg();
    });
    mainpage.addEventListener("click", function(){
        msg.url = 'https://nhentai.net/';
        sendMsg();
    });
    function sendMsg()
    {
        chrome.tabs.create({ url: msg.url });
    }
});