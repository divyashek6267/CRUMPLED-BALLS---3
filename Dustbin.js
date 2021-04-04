class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.DustbinWidth=200;
		this.DustbinHeight=230;
		this.wallThickness=20;
		
		this.image=loadImage("d1.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.DustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.DustbinWidth/2, this.y-this.DustbinHeight/2, this.wallThickness, this.DustbinHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.DustbinWidth/2, this.y-this.DustbinHeight/2, this.wallThickness, this.DustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.DustbinHeight/2,this.DustbinWidth, this.DustbinHeight)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}
