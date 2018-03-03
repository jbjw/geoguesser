//

"use strict"

const fs = require( "fs" )

var paths = fs.readdirSync( "." )

for ( let path of paths ) {
	if ( fs.lstatSync( path ).isDirectory() ) {
		fs.copyFileSync( path + "/vector.svg", "../tmp/" + path + ".svg" )
	}
}
