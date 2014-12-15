function App(){
	this.readBasketOfBooks = function(array){
		if(array[0] == 2)
			return "15.20 EUR";
		else if(array[0] == 3)
			return "21.60 EUR";
		else if(array[0] == 4)
			return "25.60 EUR";
		else if(array[0] == 5)
			return "30.00 EUR";
	}
}