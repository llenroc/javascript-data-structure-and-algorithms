(function(){

/* output := 
                     #
                    ##
                   ###
                  ####
                 #####
                ######

*/

	function StairCase(n){
		var str = "";
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < n; j++) {
				if(j >= (n-(i+1))){
					str = str +  "#";
				}else {
					str += " ";
				}			
			}		
			str = str + "\n";
		}
		console.log(str);
	}

	StairCase(6);

/** ********** JS sort ************** */
// ascending order
const products = [1,3,5,7,9,11,2,4,6,8,10];
products.sort((a,b) => a -b );
console.log(products); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


//descending orderconst products = [1,3,5,7,9,11,2,4,6,8,10];
const products1 = [1,3,5,7,9,11,2,4,6,8,10];
products1.sort((a,b) => a -b );
console.log(products1); // [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	var products = [
		{id : 4, name : "Pen", cost : 20, units : 50, category : 1},
		{id : 8, name : "Hen", cost : 80, units : 70, category : 2},
		{id : 6, name : "Den", cost : 50, units : 30, category : 1},
		{id : 3, name : "Ten", cost : 70, units : 60, category : 2},
		{id : 2, name : "Len", cost : 30, units : 80, category : 1}
	];

	function print(title, action){
		console.group(title);
		action();
		console.groupEnd();
	}

	print("The default product list", function(){
		console.table(products);
	});

	print("sort", function(){
		print("sort by id", function(){
			function sort(){
				for (var i = 0; i < products.length - 1 ; i++) {
					for (var j = i+1; j < products.length; j++) {
						var left = products[i];
						var right = products[j];
						if(left.id > right.id){
							products[i] = products[j];
							products[j] = left;
						}
					};
				};
			}
			sort();
			console.table(products);
		});

		function sortA(list, attr){
			for (var i = 0; i < list.length - 1 ; i++) {
				for (var j = i+1; j < list.length; j++) {
					var left = list[i];
					var right = list[j];
					if(left[attr] > right[attr]){
						list[i] = list[j];
						list[j] = left;
					}
				};
			};
			return list;
		}

		print("sort by cost", function(){
				var results = sortA(products,"cost");
				console.table(results);
		});

		function sortByComparisonFn(list, fn){
			for (var i = 0; i < list.length - 1 ; i++) {
				for (var j = i+1; j < list.length; j++) {
					var left = list[i];
					var right = list[j];
					if(fn(left, right) > 0){
						list[i] = list[j];
						list[j] = left;
					}
				};
			};
			return list;
		}

		print("sort by comparision function", function(){
			var compareById = function(a, b){
				if(a.id > b.id) return 1;
				if(a.id < b.id) return -1;
				return 0;
			}

			var compareByTotalCost = function(a,b){
				var priceA = a.cost * a.units;
				var priceB = b.cost * b.units;
				if(priceA > priceB) return 1;
				if(priceA < priceB) return -1;
				return 0;
			}

			print("sort by comparision id function", function(){
				var results = sortByComparisonFn(products, compareById);
				console.table(results);
			});

			print("sort by comparision total cost[cost * units ] function", function(){
				var results = sortByComparisonFn(products, compareByTotalCost);
				console.table(results);
			});
		})
	});

	print("filter", function(){
		function getFilterData(list, filterFn){
			var results = [];
			for (var i = 0; i < list.length; i++) {
					if(filterFn(list[i]))
						results.push(list[i]);						
			};
			return results;
	 	}

	 	var costlyProducts = function(getProduct){
	 			return getProduct.cost > 50
	 	}

	 	print("Costly products [costs > 50]", function(){
	 		console.table(getFilterData(products, costlyProducts));
	 	})

	 	var cheapProducts = function(getProduct){
	 		return getProduct.cost <= 50;
	 	}

	 	var negate = function(fn){
	 		return function(){
	 			return !fn.apply(this,arguments);
	 		}
	 	}

	 	print("Cheap products [cost <= 50]", function(){
	 		console.table(getFilterData(products, negate(costlyProducts)));	
	 	});
	});

	print("GroupBy", function(){
		function getGroupByData(list, attr){
			var results = {};
			for (var i = 0; i < list.length; i++) {
				var key = list[i][attr]
				if(typeof results[key] === 'undefined')
					results[key] = [];
				results[key].push(list[i]);
			}
			return results;
		}

		print("groupBy by category", function(){
			var results = getGroupByData(products, "category");
			for(var key in results){
				print("category value  = "+key, function(){
					console.table(results[key]);
				})
			}
			
		});
	})

	print("Map", function(){
		function map(list, getMapfn){
			var results = [];
			for (var i = 0; i < list.length; i++) {
				results.push(getMapfn(list[i]));
			}
			return results;
		}
		var createOwnMap = function(item){
			return {name: item.name, cost: item.cost};
		}
		console.table(map(products, createOwnMap));
	});


	print("reduce", function(){
		function getCost(item){
			return item.cost * item.units;
		}

		function reduce(list){
			var maxValue = 0;
			for (var i = 0; i < list.length; i++) {
				if(getCost(list[i]) > maxValue)
					maxValue = getCost(list[i]);
			};
			return maxValue;
		}

		console.log("Max value = "+ reduce(products));
	})	

	print("Underscore ", function(){
		var maxProductCost = _.reduce(products,function(result, product){
			return result < product.cost*product.units ? product.cost*product.units : result;
		},0);
		console.log("Max Product cost =  "+ maxProductCost);
	});



	

})();

