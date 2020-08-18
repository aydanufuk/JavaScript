var number = parseInt(prompt("Enter any number"));

		for(var i = 1;i<=number;i++){
			if(i==4){
			break;
			//continue;
			}
			document.write("Number is: " + i + "<br/>");
		}
		document.write("after the loop");
	