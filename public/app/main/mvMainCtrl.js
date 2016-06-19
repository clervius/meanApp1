angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.courses = [
    	{ name: 'C# for sociopaths', featured: true, published: new Date('1/12/2013') },
    	{ name: 'Second course', featured: false, published: new Date('1/12/2013') },
    	{ name: 'This is yet another course', featured: true, published: new Date('1/12/2013') },
    	{ name: 'This is another one', featured: true, published: new Date('1/12/2013') },
    	{ name: 'LIPSUM will work', featured: true, published: new Date('1/12/2013') },
    	{ name: 'But not for everything', featured: false, published: new Date('1/12/2013') },
    	{ name: 'Say hello to my little friend', featured: false, published: new Date('1/12/2013') },
    	{ name: 'hello little frtiend', featured: false, published: new Date('1/12/2013') },
    	{ name: 'The speakers at work doesnt work', featured: true, published: new Date('1/12/2013') },
    	{ name: 'I wish this was easier', featured: false, published: new Date('1/12/2013') },
    	{ name: 'It will be since it will come from a database', featured: true, published: new Date('1/12/2013') },
    	{ name: 'lol hello little friend', featured: true, published: new Date('1/12/2013') },
    	{ name: 'The app will collect information and save in db', featured: true, published: new Date('1/12/2013') },
    	{ name: 'hi good guys', featured: true, published: new Date('1/12/2013') },
    	{ name: 'hi bad guys', featured: true, published: new Date('1/12/2013') },

    ]
});