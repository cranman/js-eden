include("models/parpar/car.jse");
include("models/parpar/parkedcars.jse");
include("models/parpar/parking.jse");

## Draw everything to screen from here
picture is [
	circ,s,throttle,steeringlabel,throttlelabel,circlabel,engine,	## Properties of moving car

	faxle,raxle,flwheel,frwheel,rlwheel,rrwheel,centrerod,		## Moving car

	tierod,rrod,lrod,						## Steering of moving car

	flwheelline,frwheelline,rwheelline,				## Centre of turn of moving car

	p1faxle, p1raxle, p1centrerod,					## Parked Car 1

	p1flwheel, p1frwheel, p1rlwheel, p1rrwheel,

	p2faxle, p2raxle, p2centrerod, 					## Parked Car 2

	p2flwheel, p2frwheel, p2rlwheel, p2rrwheel,

	dist,								## Slider for distance between cars

	winarea								## Area to park into for win
];
