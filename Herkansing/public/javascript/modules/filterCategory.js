module.exports = {	
	filter: function() {

		let categorySelection = {}
		console.log(categorySelection)
		let filterCategory = document.querySelectorAll('input[name="filterCategory"]')
		console.log(filterCategory)
		filterCategory.forEach( function (filter) {
			
			// if (filter.checked == true) {
			// 	let checkboxValue = filter.id
			// 	categorySelection.push(checkboxValue)
			// } else if (filter.checked != true) {
			// 	let checkboxValue = filter.id
			// 	categorySelection.pop(checkboxValue)
			// }

		})

	}
}