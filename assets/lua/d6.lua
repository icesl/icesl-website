dwidth = 10
dcube = ccube(dwidth)

iradius = 1
inscription = sphere(iradius)

side1 = translate( 0, 0, dwidth/2 ) * inscription

side2 = union( 
  translate( dwidth/4, dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4, dwidth/2 )
  * inscription )

side3 = union{
  translate(        0,        0, dwidth/2 )
  * inscription,
  translate( dwidth/4, dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4, dwidth/2 )
  * inscription }

side4 = union{
  translate( dwidth/4, dwidth/4, dwidth/2 )
  * inscription,
  translate( dwidth/4,-dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4, dwidth/4, dwidth/2 )
  * inscription  }

side5 = union{
  translate(        0,        0, dwidth/2 )
  * inscription,
  translate( dwidth/4, dwidth/4, dwidth/2 )
  * inscription,
  translate( dwidth/4,-dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4, dwidth/4, dwidth/2 )
  * inscription }

side6 = union{
  translate( dwidth/4,        0,-dwidth/2 )
  * inscription,
  translate(-dwidth/4,        0,-dwidth/2 )
  * inscription,
  translate( dwidth/4, dwidth/4,-dwidth/2 )
  * inscription,
  translate( dwidth/4,-dwidth/4,-dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4,-dwidth/2 )
  * inscription,
  translate(-dwidth/4, dwidth/4,-dwidth/2 )
  * inscription }

sides = union{       side1,
  rotate( 90.0, Y) * side2,
  rotate(-90.0, X) * side3,
  rotate( 90.0, X) * side4,
  rotate(-90.0, Y) * side5,
                     side6 }

die = difference( dcube, sides )

round_shape = sphere( dwidth / 1.4 )
round_die = intersection( die, round_shape )

dscale = 2.0
emit( scale( dscale ) * round_die )