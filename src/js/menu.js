
var ARTICLES="<!-- ARTICLES -->";
var ACCUEIL="Accueil";
var menu;


function afficherSousMenu(sousMenu){
    var styleSousMenu;
    var menuParent;

    if(sousMenu==ACCUEIL){
        this.document.location.href="./htm/accueil.htm";
    }
    else{
        var position;

        position=sousMenu.indexOf(".");
        menuParent="";
        if(position!=-1) menuParent=sousMenu.substr(0, position);

        for(var i=0; i<this.menu.length; i++){
            styleSousMenu=this.document.getElementById(this.menu[i].nomSousMenu).style;
            if(this.menu[i].nomSousMenu==sousMenu){
                if(styleSousMenu.visibility=="hidden" || styleSousMenu.visibility=="")
                    styleSousMenu.visibility="visible";
                else
                    styleSousMenu.visibility="hidden";
            }
            else
                if(this.menu[i].nomSousMenu!=menuParent)
                    styleSousMenu.visibility="hidden";
        }
    }
}


function coloriserArticle(article){
    var styleArticle;

    styleArticle=this.document.getElementById(article).style;
    styleArticle.background="#ff0000";
}


function decoloriserArticle(article){
    var styleArticle;

    styleArticle=this.document.getElementById(article).style;
    styleArticle.background="#0080ff";
}


function Menu(nomSousMenu, positionHauteSousMenu, postionGaucheSousMenu, largeurSousMenu){
    this.nomSousMenu=nomSousMenu;
    this.positionHauteSousMenu=positionHauteSousMenu;
    this.postionGaucheSousMenu=postionGaucheSousMenu;
    this.largeurSousMenu=largeurSousMenu;
    this.formatHTMLMenus="<a class=\"article\" href=\"./\" onclick=\"afficherSousMenu('"+this.nomSousMenu+"'); return(false)\">&nbsp;"+this.nomSousMenu+"&nbsp;</a>";
    this.formatHTMLSousMenus="<table id=\""+this.nomSousMenu+"\" class=\"sousMenu\" style=\"top: "+this.positionHauteSousMenu+"; left: "+this.postionGaucheSousMenu+"; width: "+this.largeurSousMenu+";\">"+ARTICLES+"</table>";

    this.ajouterArticle=ajouterArticle;
}


function ajouterArticle(article, lien){
    var nouvelArticle;

    nouvelArticle="<tr><td id=\""+article+"\" onmouseover=\"coloriserArticle('"+article+"')\" onmouseout=\"decoloriserArticle('"+article+"')\"><a class=\"article\" href=\""+lien+"\">"+article+"</a></td></tr>"+ARTICLES
    this.formatHTMLSousMenus=this.formatHTMLSousMenus.replace(ARTICLES, nouvelArticle);
}


function ajouterMenu(menu){
    var nouveauxMenus;

    nouveauxMenus="<table id=\"Menu\"><tr><td>";
    for(var i=0; i<menu.length; i++)
        if(menu[i].nomSousMenu.indexOf(".")==-1)
            nouveauxMenus+=menu[i].formatHTMLMenus;
    nouveauxMenus+="</td></tr></table>";
    this.document.write(nouveauxMenus);
    for(var i=0; i<menu.length; i++) this.document.write(menu[i].formatHTMLSousMenus);
}


function recadreSousMenu(sousMenu){
	var sousMenu=document.getElementById(sousMenu);
	sousMenu.style.top = parseInt(sousMenu.style.top, 10) + 1 + "px";
}


function afficherMenu(){
    var indiceMenu;

    this.menu=new Array(2);

    indiceMenu=0;
    this.menu[indiceMenu]=new Menu(ACCUEIL, "", "", "");

    indiceMenu++;
    this.menu[indiceMenu]=new Menu("Aide", "94px", "74px", "83px");
    this.menu[indiceMenu].ajouterArticle("Optimisé", "./htm/aide/optimise.htm");
    this.menu[indiceMenu].ajouterArticle("Mise à jour", "./htm/aide/miseajour.htm");
    this.menu[indiceMenu].ajouterArticle("A propos", "./htm/aide/apropos.htm");

    this.ajouterMenu(menu);

    loadScript("./js/browser.js",
    	function(){
    		switch(get_browser().name) {
    			case 'Edge':
    			case 'Opera':
    			case 'Chrome':
    				recadreSousMenu("Aide");
    				break;
    		}
    	}
    );
}


function loadScript(url, callback){
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.body.appendChild(script);
}
