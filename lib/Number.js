(function(){
	"use strict";
	if (typeof(module) != "undefined")
	{
		var ideal = module.parent.exports;
	}
	
	ideal.Object_shallowCopyTo({
		milliseconds: function()
		{
			return this;
		},

		seconds: function()
		{
			return Number(this) * 1000;
		},

		minutes: function()
		{
			return this.seconds() * 60;
		},

		hours: function()
		{
			return this.minutes() * 60;
		},

		days: function()
		{
			return this.hours() * 24;
		},

		years: function()
		{
			return this.days() * 365;
		},

		repeat: function(callback)
		{
			for (var i = 0; i < this; i++)
			{
				callback(i);
			}
			return this;
		},

		map: function()
		{
			var a = [];
			for (var i = 0; i < this; i ++)
			{
				a.push(i);
			}
			return Array.prototype.map.apply(a, arguments);
		},

		isEven: function()
		{
			return this % 2 == 0;
		}
	}, Number.prototype);
})();