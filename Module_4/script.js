var names=new Array();
names[0]="Harry";
names[1]="John";
names[2]="Jimin";
names[3]="jenny";
names[4]="ron";
names[5]="Fred";
names[6]="larry";
names[7]="Moana";
names[8]="laura";
names[9]="jungkook";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}