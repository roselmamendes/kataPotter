//One copy of any of the five books costs 8 EUR. 
//If, however, you buy two different books from the series,
// you get a 5% discount on those two books. 
//If you buy 3 different books, you get a 10% discount. 
//With 4 different books, you get a 20% discount. 
//If you go the whole hog, and buy all 5, you get a huge 25% discount.

//2 books = 16 EUR with discount of 5% = 15.20 EUR
//3 books = 24 EUR with discount of 10% = 21.60 EUR
describe("receiving a item from a basket of books",function(){
	app = new App();
	it("should return 15.20 EUR for two books",function(){
		expect(app.readBasketOfBooks([2])).toBe("15.20 EUR")
	})

	it("should return 21.60 EUR for three books",function(){
		expect(app.readBasketOfBooks([3])).toBe("21.60 EUR")
	})

	it("should return 25.60 EUR for four books",function(){
		expect(app.readBasketOfBooks([4])).toBe("25.60 EUR")
	})

	it("should return 30 EUR for five books",function(){
		expect(app.readBasketOfBooks([5])).toBe("30.00 EUR")
	})
})