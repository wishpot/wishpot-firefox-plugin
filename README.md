This is the Wishpot Firefox plugin.

The "build" process is two steps: 

1. Signing the install.rdf file with the [McCoy tool](https://developer.mozilla.org/en/McCoy)
  NOTE: make sure you adjust the path to the update.rdf file, which is specified inside install.rdf.  The update.rdf file should be signed with the mccoy tool and your certificate as well.
2. Zipping all of the files in this folder into a file with a ".xpi" extension. 
  `zip -r ../wishpot-button.xpi *`


