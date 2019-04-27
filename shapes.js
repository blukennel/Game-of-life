function glider(x,y)
{
	add(x+1,y);
	add(x-1,y);
	add(x,y-1);
	add(x+1,y-1);
	add(x+1,y+1);
}
function xter3()
{
	var x = 100;
	var y = 70;
	add(x,y);
	for(i=1; i<=30; i++)
	{
		add(x+i,y+i);
		add(x+i,y-i);
		add(x-i,y+i);
		add(x-i,y-i);
	}
}
function xter5()
{
	var x = 100;
	var y = 70;
	add(x,y);
	for(i=1; i<=29; i++)
	{
		add(x+i-15,y-15);
		add(x-i+15,y+15);
		add(x-15,y+i-15);
		add(x+15,y-i+15);
	}
}
function xter4()
{
	var x = 100;
	var y = 70;
	add(x,y);
	for(i=1; i<=30; i++)
	{
		add(x+i,y);
		add(x-i,y);
		add(x,y+i);
		add(x,y-i);
	}
}
function xter2()
{
	var x = 100;
	var y = 70;
	add(x,y);
	for(i=1; i<=30; i++)
	{
		add(x+i,y+i);
		add(x+i,y-i);
		add(x-i,y+i);
		add(x-i,y-i);
		add(x+i,y);
		add(x-i,y);
		add(x,y+i);
		add(x,y-i);
	}
}