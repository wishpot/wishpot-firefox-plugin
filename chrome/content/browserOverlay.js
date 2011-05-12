//NOTE: This file requires browserOverlayCommon.js, and expects to be called from it
function wlPostInstallConfiguration() {
	var navBar = document.getElementById("nav-bar");
	var wlToolbarButtonId = "wlToolbarButton";

	if (navBar.currentSet.indexOf(wlToolbarButtonId) == -1) {
		var itemAfterWlToolbarButton = "urlbar-container";

		if (navBar.currentSet.indexOf(itemAfterWlToolbarButton) != -1) {
			navBar.currentSet = navBar.currentSet.replace(itemAfterWlToolbarButton, wlToolbarButtonId + "," + itemAfterWlToolbarButton);
		}
		else {
			navBar.currentSet = navBar.currentSet + "," + wlToolbarButtonId;
		}

		navBar.setAttribute("currentset", navBar.currentSet);
		document.persist("nav-bar", "currentset");
		try {
			BrowserToolboxCustomizeDone(true);
		}
		catch (e) { }
	}
	
	wlPreferences.setBoolPref("install.complete", true)
}
