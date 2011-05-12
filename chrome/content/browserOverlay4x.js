//NOTE: this file requires browserOverlayCommon.js, and expects to be called from it

function wlPostInstallConfiguration() {
	var navBar = document.getElementById("nav-bar");
	var wlToolbarButtonId = "wlToolbarButton";

	if (navBar.currentSet.indexOf(wlToolbarButtonId) == -1) {i
		//put the button before the bookmark dropdown, after the home button
		//http://mxr.mozilla.org/mozilla-central/source/browser/base/content/browser.xul
		var itemAfterWlToolbarButtonId = "home-button";
		
		
		//insertItem: https://developer.mozilla.org/en/XUL/toolbar#m-insertItem
		navBar.insertItem(wlToolbarButtonId, document.getElementById(itemAfterWlToolbarButtonId), null, false);
		
		document.persist("nav-bar", "currentset");
		
		try {
			BrowserToolboxCustomizeDone(true);
		}
		catch (e) { }
	}
	
	wlPreferences.setBoolPref("install.complete", true)
}


