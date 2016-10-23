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