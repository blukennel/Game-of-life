var arr = [];
var resX = 1200;
var resY = 720;
var color = "yellow";
var size = 10;
var canvas;
var ctx;

class node
{
	constructor()
	{
		this.state = false;
		this.born = false;
		this.die = false;
		this.n = 0;
	}
}
function print(arg)
{
	document.getElementById("console").innerHTML = ">> " + arg;
}
function add(x,y)
{
	arr[x][y].state=true;
	ctx.fillStyle = color;
	ctx.fillRect(size*x, size*y, size, size);
}
function remove(x,y)
{
	arr[x][y].state=false;
	ctx.fillStyle = "black";
	ctx.fillRect(size*x, size*y, size, size);
}
function go()
{
	setInterval(act, 50);
}
function act()
{
	get_n();
	for(x=1; x<resX/size; x++)
		for(y=1; y<resY/size; y++)
		{
			arr[x][y].born=false;
			arr[x][y].die=false;

			if(arr[x][y].n==3 && arr[x][y].state==false)
				arr[x][y].born=true;
			if((arr[x][y].n>3 || arr[x][y].n<2) && arr[x][y].state==true)
				arr[x][y].die=true;
		}
	for(x=1; x<resX/size; x++)
		for(y=1; y<resY/size; y++)
		{
			if(arr[x][y].born)
				add(x,y);
			if(arr[x][y].die)
				remove(x,y);
		}
}
function start()
{
	canvas = document.getElementById("root");
	ctx = canvas.getContext("2d");

	for(i=0; i<resX/size+1; i++)
		arr[i] = [];

	for(x=0; x<resX/size+1; x++)
		for(y=0; y<resY/size+1; y++)
			arr[x][y] = new node();
	render();
}
function getPosition(event)
{
	var x = event.clientX-canvas.offsetLeft;
	var y = event.clientY-canvas.offsetTop;
	var output = "x = " + String(x) + " y = " + String(y);
	print(output);
	x = Math.floor(x/size);
	y = Math.floor(y/size);
	if(arr[x][y].state==true)
		remove(x,y);
	else
		add(x,y);
	render();
}
function render()
{
	for(x=0; x<resX/size+1; x++)
		for(y=0; y<resY/size+1; y++)
			if(arr[x][y].state==true)
				add(x,y);
			else
				remove(x,y);
}
function get_n()
{
	var n = 0;
	for(x=1; x<resX/size; x++)
		for(y=1; y<resY/size; y++)
		{
			n=0;
			if(arr[x+1][y].state==true) n++;
			if(arr[x-1][y].state==true) n++;
			if(arr[x][y+1].state==true) n++;
			if(arr[x][y-1].state==true) n++;
			if(arr[x+1][y+1].state==true) n++;
			if(arr[x-1][y-1].state==true) n++;
			if(arr[x+1][y-1].state==true) n++;
			if(arr[x-1][y+1].state==true) n++;
			arr[x][y].n = n;
		}
}



