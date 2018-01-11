/*
* @Author: huyajie
* @Date:   2017-11-07 15:33:08
* @Last Modified by:   huyajie
* @Last Modified time: 2017-11-07 15:35:35
*/
(function(){
    var meta = document.createElement('meta')
    meta.setAttribute('name','viewport')
    var devicePixelRatio = window.devicePixelRatio
    var dpr = devicePixelRatio ? (1 / devicePixelRatio) : 1
    if(window.screen.availWidth == document.documentElement.offsetWidth && !document.querySelector('meta[name="viewport"]')){
        dpr = 1
        devicePixelRatio = 1
    }
    if(document.querySelector('meta[name="viewport"]')){
        meta = document.querySelector('meta[name="viewport"]')
    }
    document.documentElement.setAttribute('data-dpr', devicePixelRatio || 1)
    if(window.navigator.userAgent.match(/android/i)){
        meta.setAttribute('content', 'width=device-width, initial-scale='+ dpr +', maximum-scale='+ dpr +', minimum-scale=' + dpr + ', user-scalable=no')
    }else{
        meta.setAttribute('content', 'initial-scale='+ dpr +', maximum-scale='+ dpr +', minimum-scale=' + dpr + ', user-scalable=no')
    }
    document.head.appendChild(meta)
    
    var recalc = function (){
        var width = document.documentElement.offsetWidth
        var fontSize = 20/750 * width;
        document.querySelector('html').style.fontSize = (fontSize)+'px';

    }
   
    window.addEventListener('resize', recalc ,false)
    document.addEventListener('DOMContentLoaded', recalc ,false)
    recalc()
})()