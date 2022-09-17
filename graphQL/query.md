```graphQL
query calculateRoute {
		calculateRoute (
			stops : [
				{Start Point Coordinates},
				{End Point Coordinates}
			]
			RouteOptions: {
				// arguments here...
			}
		) {
				// Specify output fields
		}
}

mutation saveTemporaryRoute {
	// save the target route
	saveTemporaryRoute ()
}

query listRoutes {
		listRoutes (
			routeId
		)
			// Specify Output Fields
}

query listWays {
		ListWays (
			wayIds
		){
			// Specify Output Fields
			// call LGA Object Type
			segments (segmentTypes: [LGA]) {
			// Specify Output Fields
			}
		}
}
```

