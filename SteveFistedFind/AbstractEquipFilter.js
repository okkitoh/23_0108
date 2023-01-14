(function(env){
	// Dependencies
	const BaseFilter = (env.BaseFilter || void 0);


	// Exports
	env = Object.assign(env, { 
		AbstractEquipFilter: AbstractEquipFilter
	});


	// Abstract Class :: AbstractEquipFilter
	// Common Operations to perform on sets
	function AbstractEquipFilter(isShow, mods, referenceList) {
		console.assert(Object.getPrototypeOf(this) !== AbstractEquipFilter.prototype, 
			"!! AbstractEquipFilter should not be instantiated directly.\nApplying set algebra methods on nonexistant reference doesn't mean anything");
		BaseFilter.call(this, isShow, mods);
		this.referenceList = (referenceList || []);
		
	}
	AbstractEquipFilter.prototype = Object.create(BaseFilter.prototype);
	AbstractEquipFilter.prototype.constructor = BaseFilter;
	AbstractEquipFilter.prototype.subtractBases = function(baseTypes) {
		console.assert(baseTypes instanceof Array, "!! fn subtractBaseTypes requires argument of [Array] type");
		this.referenceList = this.referenceList.diff(baseTypes);
		return this;
	}


})(window.$$23_0108 = window.$$23_0108 || {}, window.$$23_0108);