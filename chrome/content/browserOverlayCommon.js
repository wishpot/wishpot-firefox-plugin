

var wlPreferences = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.wishpot.");
window.addEventListener("load", wlInitialize, false);

var wlObserver = {
	register: function() {
		var prefService = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
		this._branch = prefService.getBranch("extensions.wishpot.");
		this._branch.QueryInterface(Components.interfaces.nsIPrefBranch2);
		this._branch.addObserver("", this, false);
	},

	unregister: function() {
		if(!this._branch) return;
		this._branch.removeObserver("", this);
	},

	observe: function(subject, topic, data) {
		if (topic == "nsPref:changed") {
			setDisplay(wlDisplayObjects[data], wlPreferences.getBoolPref(data));
		}
	}
}

var wlDisplayObjects = new Array();
{
	wlDisplayObjects["menu.enabled"] = "wlMenuItem";
	wlDisplayObjects["toolbar.enabled"] = "wlToolbarButton";
	wlDisplayObjects["statusbar.enabled"] = "wlStatusbarPanel";
}


function wlInitialize() {
	if (!wlPreferences.getBoolPref("install.complete")) {
		//This function is defined in the different browserOverlay.js files, it differs slightly between FF releases
		wlPostInstallConfiguration();
	}

	wlOptionsUpdate();
	wlObserver.register();
}


function wlOptionsUpdate() {
	setDisplay("wlMenuItem", wlPreferences.getBoolPref("menu.enabled"));
	setDisplay("wlToolbarButton", wlPreferences.getBoolPref("toolbar.enabled"));
	setDisplay("wlStatusbarPanel", wlPreferences.getBoolPref("statusbar.enabled"));
}

function setDisplay(objectName, state) {
	document.getElementById(objectName).style.display = state ? "" : "none";
}

function wlAddToMyWishlist() {
    if (content.document.getElementById)
    {
        var x=content.document.getElementsByTagName('head').item(0);
        var o=content.document.createElement('script');
        if(typeof(o)!='object')
            o=content.document.standardCreateElement('script');
        
        o.setAttribute('src','http://www.wishpot.com/scripts/bm.js?v=100');
        o.setAttribute('type','text/javascript');x.appendChild(o);
    }
}

