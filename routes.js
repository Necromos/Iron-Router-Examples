Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loadingTemplate'
});

Router.map(function(){
	this.route('hello'//, {
		//path: '/',
		//template: 'hello',
		//layoutTemplate: 'layout'
	//}
	);

	this.route('regionsExample', {
		path: '/regions',
		template: 'regionTemplate',
		layoutTemplate: 'regionLayout',
		yieldTemplates: {
			'myLeftTemplate': {to: 'left'},
			'myRightTemplate': {to: 'right'}
		}
	});

	this.route('dataExample', {
		path: '/data',
		template: 'dataTemplate',

		data: {
			what: 'Cookiez'
		}

		/*
		data: function(){
			var params = this.params;
			return {
				what: params.what
			}
		}
		*/
	});

	this.route('waitRoute', {
		path: '/wait',
		template: 'waitTemplate',
		waitOn: function(){
			return null;
		},

		action: function(){
			this.render();
		}
	})

	this.route('articles', {
		path: '/articles',

		waitOn: function(){
			return Meteor.subscribe('allArticles');
		},

		action: function(){
			if (this.ready())
				this.render();
			else
				this.render('loadingTemplate');
		},

		data: function(){
			return { articles: Articles.find()};
		}

		// before: function(){

		// },
		// after: function(){
			
		// }
	});
});