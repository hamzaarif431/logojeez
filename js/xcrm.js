/*
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?4ZxvZPfkncjEjIpFJNMDWLnRd5KKTQ2i";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

  
//$zopim(function() {
//	$zopim.livechat.theme.setColor('#640164');
//	$zopim.livechat.theme.setColor('#640164', 'badge');
//});


function setButtonURL(){
    $zopim.livechat.window.show();
}
*/

// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/5d1b569f7a48df6da2429085/default';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();


// function setButtonURL(){
// javascript:void(Tawk_API.toggle();
// }



 


function setButtonURL() {
XLPHelper.wantToLiveChat();
}
 
 
var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{};jaaulde.utils.cookies=(function(){var resolveOptions,assembleOptionsString,parseCookies,constructor,defaultOptions={expiresAt:null,path:'/',domain:null,secure:false};resolveOptions=function(options){var returnValue,expireDate;if(typeof options!=='object'||options===null){returnValue=defaultOptions;}else
{returnValue={expiresAt:defaultOptions.expiresAt,path:defaultOptions.path,domain:defaultOptions.domain,secure:defaultOptions.secure};if(typeof options.expiresAt==='object'&&options.expiresAt instanceof Date){returnValue.expiresAt=options.expiresAt;}else if(typeof options.hoursToLive==='number'&&options.hoursToLive!==0){expireDate=new Date();expireDate.setTime(expireDate.getTime()+(options.hoursToLive*60*60*1000));returnValue.expiresAt=expireDate;}if(typeof options.path==='string'&&options.path!==''){returnValue.path=options.path;}if(typeof options.domain==='string'&&options.domain!==''){returnValue.domain=options.domain;}if(options.secure===true){returnValue.secure=options.secure;}}return returnValue;};assembleOptionsString=function(options){options=resolveOptions(options);return((typeof options.expiresAt==='object'&&options.expiresAt instanceof Date?'; expires='+options.expiresAt.toGMTString():'')+'; path='+options.path+(typeof options.domain==='string'?'; domain='+options.domain:'')+(options.secure===true?'; secure':''));};parseCookies=function(){var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1){pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try
{value=decodeURIComponent(pair[1]);}catch(e1){value=pair[1];}if(typeof JSON==='object'&&JSON!==null&&typeof JSON.parse==='function'){try
{unparsedValue=value;value=JSON.parse(value);}catch(e2){value=unparsedValue;}}cookies[name]=value;}return cookies;};constructor=function(){};constructor.prototype.get=function(cookieName){var returnValue,item,cookies=parseCookies();if(typeof cookieName==='string'){returnValue=(typeof cookies[cookieName]!=='undefined')?cookies[cookieName]:null;}else if(typeof cookieName==='object'&&cookieName!==null){returnValue={};for(item in cookieName){if(typeof cookies[cookieName[item]]!=='undefined'){returnValue[cookieName[item]]=cookies[cookieName[item]];}else
{returnValue[cookieName[item]]=null;}}}else
{returnValue=cookies;}return returnValue;};constructor.prototype.filter=function(cookieNameRegExp){var cookieName,returnValue={},cookies=parseCookies();if(typeof cookieNameRegExp==='string'){cookieNameRegExp=new RegExp(cookieNameRegExp);}for(cookieName in cookies){if(cookieName.match(cookieNameRegExp)){returnValue[cookieName]=cookies[cookieName];}}return returnValue;};constructor.prototype.set=function(cookieName,value,options){if(typeof options!=='object'||options===null){options={};}if(typeof value==='undefined'||value===null){value='';options.hoursToLive=-8760;}else if(typeof value!=='string'){if(typeof JSON==='object'&&JSON!==null&&typeof JSON.stringify==='function'){value=JSON.stringify(value);}else
{throw new Error('cookies.set() received non-string value and could not serialize.');}}var optionsString=assembleOptionsString(options);document.cookie=cookieName+'='+encodeURIComponent(value)+optionsString;};constructor.prototype.del=function(cookieName,options){var allCookies={},name;if(typeof options!=='object'||options===null){options={};}if(typeof cookieName==='boolean'&&cookieName===true){allCookies=this.get();}else if(typeof cookieName==='string'){allCookies[cookieName]=true;}for(name in allCookies){if(typeof name==='string'&&name!==''){this.set(name,null,options);}}};constructor.prototype.test=function(){var returnValue=false,testName='cT',testValue='data';this.set(testName,testValue);if(this.get(testName)===testValue){this.del(testName);returnValue=true;}return returnValue;};constructor.prototype.setOptions=function(options){if(typeof options!=='object'){options=null;}defaultOptions=resolveOptions(options);};return new constructor();})();(function(){if(window.jQuery){(function($){$.cookies=jaaulde.utils.cookies;var extensions={cookify:function(options){return this.each(function(){var i,nameAttrs=['name','id'],name,$this=$(this),value;for(i in nameAttrs){if(!isNaN(i)){name=$this.attr(nameAttrs[i]);if(typeof name==='string'&&name!==''){if($this.is(':checkbox, :radio')){if($this.attr('checked')){value=$this.val();}}else if($this.is(':input')){value=$this.val();}else
{value=$this.html();}if(typeof value!=='string'||value===''){value=null;}$.cookies.set(name,value,options);break;}}}});},cookieFill:function(){return this.each(function(){var n,getN,nameAttrs=['name','id'],name,$this=$(this),value;getN=function(){n=nameAttrs.pop();return!!n;};while(getN()){name=$this.attr(n);if(typeof name==='string'&&name!==''){value=$.cookies.get(name);if(value!==null){if($this.is(':checkbox, :radio')){if($this.val()===value){$this.attr('checked','checked');}else
{$this.removeAttr('checked');}}else if($this.is(':input')){$this.val(value);}else
{$this.html(value);}}break;}}});},cookieBind:function(options){return this.each(function(){var $this=$(this);$this.cookieFill().change(function(){$this.cookify(options);});});}};$.each(extensions,function(i){$.fn[i]=this;});})(window.jQuery);}})();
// JavaScript Document
//jquery.cookies.2.2.0.min.js end
//Allocation
var agentname = "";
function popitup(url) {
    newwindow = window.open(url, 'name', 'height=475,width=478,resizable=no,status=no,toolbar=no,location=no,menubar=no,top=120,left=140');
    return false;
}

//End Allocation





// BEGIN LivePerson Monitor
function xlpAddMonitorTag(e){if(typeof e=="undefined"||typeof e=="object"){e=xlpMTagConfig.xlpMTagSrc?xlpMTagConfig.xlpMTagSrc:"/bundles/tracking"}if(e.indexOf("https")!=0){e=xlpMTagConfig.xlpProtocol+"://"+xlpMTagConfig.xlpCode+"."+xlpMTagConfig.xlpServer+e}else{if(e.indexOf("site=")<0){if(e.indexOf("?")<0)e=e+"?";else e=e+"&";e=e+"site="+xlpMTagConfig.xlpNumber}}var t=document.createElement("script");t.setAttribute("type","text/javascript");t.setAttribute("charset","iso-8859-1");t.setAttribute("src",e);document.getElementsByTagName("head").item(0).appendChild(t)}xlpMTagConfig={xlpServer:"onlinechatpro.com",xlpCode:"od",xlpProtocol:"https"};xlpAddMonitorTag();
// End LivePerson Monitor






//Start CRM Chat Monitoring YQL
var cookieval = "";
var agentname = '';
var supportAgentName = "";
var LCStatus = "";

function GetCookie(cookiename) {
    cookieval = $.cookies.get(cookiename);
    return cookieval;
}
/* Monitoring Tag */
function MonitorTag() {
    
    agentname = GetCookie('salesAgentName');
    supportAgentName = GetCookie('supportAgentName');
    LCStatus = GetCookie('LCStatus');
	plsetSessionVar();
}
/* Setting Variables for Session of Skill and Operator */
function plsetSessionVar() {
    if (typeof (xlpMTagConfig.sessionVar) == "undefined") {
        xlpMTagConfig.sessionVar = new Array();
    }
    if (agentname != null && agentname != "") {
        xlpMTagConfig.sessionVar[xlpMTagConfig.sessionVar.length] = 'skill=' + agentname;
    }
    if (supportAgentName != null && supportAgentName != "") {
        xlpMTagConfig.sessionVar[xlpMTagConfig.sessionVar.length] = 'Support Agent=' + supportAgentName;
    }
    if (LCStatus != null && LCStatus != "") {
        xlpMTagConfig.sessionVar[xlpMTagConfig.sessionVar.length] = 'Life Cycle Status=' + LCStatus;
    }

}
MonitorTag();
//End CRM Chat Monitoring YQL
  