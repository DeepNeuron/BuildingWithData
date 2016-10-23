FlowRouter.route('/', {
	name:'Home',
	action(){
		BlazeLayout.render('LandingPage')
	}

});

FlowRouter.route('/SimulationsPage', {
    name:'Simulations',
    action(){
    	BlazeLayout.render('SimulationsPage')
    }


});

// 	//Add properties to this object
// 	//Tell meteor to render a specific template when / is called
// 	name:'LandingPage',
// 	//Action: what happens when we hit this route
// 	action () {
// 		//BlazeLayout.render('HomeLayouts', {content:'loanPortfolio', swag:'scheduleTable'});
// 		BlazeLayout.render('LandingPage');
// 	}


// });

// FlowRouter.route('/EnergyPortal', {
// 	//Add properties to this object
// 	//Tell meteor to render a specific template when / is called
// 	name:'EnergyPortal',
// 	//Action: what happens when we hit this route
// 	action () {
// 		//BlazeLayout.render('HomeLayouts', {content:'loanPortfolio', swag:'scheduleTable'});
// 		BlazeLayout.render('EnergyPortal');
// 	}


// });

