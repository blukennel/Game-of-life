var arr = [];
var resX = 1200;
var resY = 720;
var color = "lightblue";
var size = 5;
var canvas;
var ctx;
var timer;

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
function stop()
{
	timer = clearInterval(timer);
	document.getElementById("start/stop").value="start";
	document.getElementById("start/stop").setAttribute( "onClick", "javascript: start();");
}
function start()
{
	timer = clearInterval(timer);
	setInterval(xter2,700); // =======================================
	timer = setInterval(act,10);
	document.getElementById("start/stop").value="stop";
	document.getElementById("start/stop").setAttribute( "onClick", "javascript: stop();");
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
function create()
{
	canvas = document.getElementById("root");
	ctx = canvas.getContext("2d");

	for(i=0; i<resX/size+1; i++)
		arr[i] = [];

	for(x=0; x<resX/size+1; x++)
		for(y=0; y<resY/size+1; y++)
			arr[x][y] = new node();
	reset();
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
}
function reset()
{
	stop();
	for(x=0; x<resX/size; x++)
		for(y=0; y<resY/size; y++)
			remove(x,y);
}
function get_n()
{
	var n = 0;
	for(x=1; x<resX/size; x++)
		for(y=1; y<resY/size; y++)
		{
			n=0;
			if(x == 0 || y == 0)
				arr[x][y].n=0;
			else if(x >= Math.floor(resX/size)-1 ||
					y >= Math.floor(resY/size)-1)
				arr[x][y].n=0;
			else
			{
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
}
function step2()
{
	stop();
	act();
}