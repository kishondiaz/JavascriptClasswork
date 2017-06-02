var doitonce = false;
var iteration = {"iter": -1};

function initCookie(){
  var date = new Date();
  
  if(!isNaN(parseInt(getCookie("visited")))){
    iteration.iter = parseInt(getCookie("visited"));
  }
  if(getCookie("doneitonce") ==";"){
    document.cookie +="doneitonce =" +false+";";
  }
  if(!getCookie("doneitonce")){
    
    document.cookie ="author = kishon ;";
    document.cookie ="doneitonce = "+true+";";
  }
  iteration.iter++;
  document.cookie = "visited = "+(parseInt(iteration.iter))+";";
  
}
function createCookie(cookieval, val){
  var date = new Date();

  if(getCookie("doneitonce")){
    document.cookie =cookieval+" = "+ val+";";
  }
  
}

function getCookie(cookieval){
  var usertemp,newstr;
  if(document.cookie.toString()!== undefined){
    if(document.cookie.toString().search(cookieval)){
      usertemp = document.cookie.toString()
                .substr(document.cookie.toString().lastIndexOf(cookieval));
      
      newstr = (usertemp.split(';')[0].split('=')[1]);
    }
  }
  return newstr;
}

function getcount(){
  return iter;
}
function returnAll(){
  return document.cookie;
}