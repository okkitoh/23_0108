(function(env){
	// Dependencies
	const BaseFilter = (env.BaseFilter || void 0);


	// Exports
	env = Object.assign(env, { 
		AbstractEquipFilter: AbstractEquipFilter
	});
	

	// Abstract Class :: AbstractEquipFilter
	// Common Operations to perform on sets
	function AbstractEquipFilter(isShow, mods, baseTypes) {
		console.assert(Object.getPrototypeOf(this) !== AbstractEquipFilter.prototype, 
			"!! AbstractEquipFilter should not be instantiated directly.\nApplying set algebra methods on nonexistant reference doesn't mean anything");
		BaseFilter.call(this, isShow, mods);
		this.baseTypes = (baseTypes || []);
		
	}
	AbstractEquipFilter.prototype = Object.create(BaseFilter.prototype);
	AbstractEquipFilter.prototype.constructor = BaseFilter;
	AbstractEquipFilter.prototype.negateBases = function(referenceList) {
		console.log.assert(referenceList instanceof Array, "!! fn negateBases requires object of [Array] type");
		this.baseTypes = referenceList.diff(this.baseTypes);
		return this;
	}


})(window.$$23_0108 = window.$$23_0108 || {}, window.$$23_0108);