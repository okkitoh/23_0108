(function(env){
	const BaseFilter = (env.BaseFilter || void 0); // unpack dependency
	const AMULETS = [
		"Onyx Amulet", 
		"Amber Amulet", 
		"Jade Amulet", 
		"Lapis Amulet",
		"Agate Amulet", 
		"Citrine Amulet", 
		"Turquoise Amulet",
		"Coral Amulet",
		"Paua Amulet",
		"Astrolabe Amulet",
		"Blue Pearl Amulet",
		"Gold Amulet", 
		"Marble Amulet",
		"Seaglass Amulet",
		"Simplex Amulet"
	];
	const TALISMANS = [
		"Ashscale Talisman",
		"Avian Twins Talisman",
		"Fangjaw Talisman",
		"Rotfeather Talisman",
		"Greatwolf Talisman",
		"Breakrib Talisman",
		"Deadhand Talisman",
		"Deep One Talisman",
		"Hexclaw Talisman",
		"Lone Antler Talisman",
		"Longtooth Talisman",
		"Mandible Talisman",
		"Spinefuse Talisman",
		"Three Rat Talisman",
		"Wereclaw Talisman",
		"Writhing Talisman",
		"Bonespire Talisman",
		"Chrysalis Talisman",
		"Clutching Talisman",
		"Undying Flesh Talisman",
		"Horned Talisman",
		"Monkey Paw Talisman",
		"Monkey Twins Talisman",
		"Primal Skull Talisman",
		"Splitnewt Talisman",
		"Three Hands Talisman"
	];
	function Amulet(isShow, mods, baseTypes) {
		BaseFilter.call(this, isShow, mods);
		this.baseTypes = baseTypes; // arr type
		this.isTalisman = false;
		if(this.baseTypes[0].indexOf("Talisman") >= 0) {
			this.isTalisman = true;
		}
	}

	Amulet.prototype = Object.create(BaseFilter.prototype);
	Amulet.prototype.constructor = Amulet;
	Amulet.prototype.toString = function() {
		var lines = [BaseFilter.prototype.toString.call(this)]
		if(!!this.baseTypes) {
			lines.push('BaseTypes "' + this.baseTypes.join('" "') + '"');
		}
		return lines.join("\n\t");
	};
	Amulet.prototype.negateBases = function() {
		this.baseTypes = (this.isTalisman ? TALISMANS : AMULETS).diff(this.baseTypes);
		return this;
	};



	// register as module
	env = Object.assign(env, { Amulet: Amulet });
	// END
}).call(window.$$23_0108 = window.$$23_0108 || {}, window.$$23_0108);

// Easier to use blacklist for extensibiity when dealing with reasonably finite set.
// Although the list of "unknown unknowns" is always growing as the game changes,
// blacklists reveal "unknown unknowns" and allow for decisions to be made on them.
// Also how the game parses the filter naturally.
// Show everything (default) => Filter out trash at cost of tedium
console.log("# ================== Amulets & Talisman FILTER =================")
console.log(
	new $$23_0108.Amulet(false, NORMAL | MAGIC | RARE, [
		"Onyx Amulet", 
		"Jade Amulet",
		"Citrine Amulet",
		"Turquoise Amulet",
		"Simplex Amulet"
	])
	.negateBases()
	.toString()
);
console.log(
	new $$23_0108.Amulet(false, NORMAL, [
		"Onyx Amulet", 
		"Jade Amulet",
		"Citrine Amulet",
		"Turquoise Amulet",
		"Simplex Amulet"
	])
	.toString()
);
console.log(
	new $$23_0108.Amulet(false, MAGIC | IDENTIFIED, [
		"Onyx Amulet", 
		"Jade Amulet",
		"Citrine Amulet",
		"Turquoise Amulet",
		"Simplex Amulet"
	])
	.toString()
);
console.log(
	new $$23_0108.Amulet(false, NORMAL | MAGIC | RARE, [
		"Ashscale Talisman",
		"Avian Twins Talisman",
		"Fangjaw Talisman",
		"Rotfeather Talisman",
		"Greatwolf Talisman"
	])
	.negateBases()
	.toString()
);