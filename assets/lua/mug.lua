h = 20
w = h/2
t = 1

shell   = cone(w-1,w,h)
inner   = cone(w-1-t,w-t,h)
bottom  = scale(1,1,2/3) * sphere(w-1-t)
vase    = translate(0,0,w-1-t) * 
          union( inner, bottom )
cup     = difference(shell, vase)

ring    = difference( sphere(1), sphere(2/3) )
cuts    = union( translate(0,-1-t/4,0) * ccube(2),
                 translate(0, 1+t/4,0) * ccube(2) )
handle  =  rotate(-30,Y) * 
		   scale(w/3,w/2,w/2) *
           difference( ring, cuts )
		   
handle  = difference( 
          translate(-w,0,2*h/3) * handle, vase )

emit( cup, 0 )
emit( handle,1 )