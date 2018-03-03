
fetch( "svgs/xx.svg" )
	.then(response => response.text())
	.then(svg => {
		var parser = new DOMParser();
		var doc = parser.parseFromString( svg, "image/svg+xml" );
		console.log( doc.documentElement.childNodes[3].childNodes[1] )
		// document.body.appendChild( doc.documentElement )

		// document.createElement( "svg" )

		var draw = SVG( "drawing" ).size( 300, 300 )
		// var rect = draw.rect(100, 100).attr({ fill: '#f06' })
		// var path = draw.path()

		// var polyline = draw.polyline('0,0 100,50 50,100').fill('none').stroke({ width: 1 })
		var polyline = draw.polyline('0,0').fill('none').stroke({ width: 1 })
		// polyline.plot([[0,0], [100,50], [50,100], [150,50], [200,50]])
		// polyline.animate(3000).plot([[0,0], [100,50], [50,100], [150,50], [200,50], [250,100], [300,50], [350,50]]).loop()
		polyline.plot([[0, 0], [50, 50]])
		console.log( polyline.array() )
		// polyline.animate(3000).plot([[0,0], [100,50
		setTimeout( function () {
			polyline.array().push([100, 100])
			// polyline.plot([[100, 100], [50, 50]])
		}, 3000)

		// path.plot('M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80')
		// // path.plot( "M10 20 L 40 50 L 20 20" )
		// path.animate(200).plot( "M10 20 L 40 50 L 20 20" ).loop()
		// // path.plot( "L100 100")
		// path.attr({
		//   fill: '#f06',
		// 	'fill-opacity': 0.5,
		// 	stroke: '#000',
		// 	'stroke-width': 10,
		// })
		// path.animate(1000).plot('M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80').loop(true, true)
		// var path = draw.path('M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z')
		// path.animate(2000).plot('M10 80 C 40 150, 65 150, 95 80 S 150 10, 180 80').loop(true, true)
		// document.body.insertAdjacentHTML("afterbegin", svg)
	} )


// fetch( "svgs/us.svg" )
// 	.then(response => response.text())
// 	.then(svg => document.body.insertAdjacentHTML("afterbegin", svg));
