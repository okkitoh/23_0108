(function(env){
	// Depedencies
	const BaseFilter = (env.BaseFilter || void 0); // unpack dependency
	const AbstractEquipFilter = (env.AbstractEquipFilter || void 0);


	// Exports
	env = Object.assign(env, {
		Jewelry: Jewelry
	});


	Jewelry.GROUPS = {
		AMULET: [
			"Jet Amulet",
			"Unset Amulet",
			"Ruby Amulet",
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
		],
		TALISMAN: [
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
		],
		BELT: [
			"Stygian Vise",
			"Chain Belt",
			"Rustic Sash",
			"Heavy Belt",
			"Leather Belt",
			"Golden Obi",
			"Cloth Belt",
			"Studded Belt",
			"Crystal Belt",
			"Vanguard Belt",
			"Micro-Distillery Belt",
			"Mechalarm Belt"
		],
		RING: [
			"Iron Ring",
			"Coral Ring",
			"Paua Ring",
			"Sapphire Ring",
			"Topaz Ring",
			"Ruby Ring",
			"Gold Ring",
			"Two-Stone Ring",
			"Dusk Ring",
			"Gloam Ring",
			"Penumbra Ring",
			"Shadowed Ring",
			"Tenebrous Ring",
			"Diamond Ring",
			"Moonstone Ring",
			"Prismatic Ring",
			"Amethyst Ring",
			"Iolite Ring",
			"Opal Ring",
			"Steel Ring",
			"Cerulean Ring",
			"Vermillion Ring",
			"Cogwork Ring",
			"Geodesic Ring",
			"Bone Ring"
		],
		JEWEL: [
			"Cobalt Jewel",
			"Crimson Jewel",
			"Viridian Jewel",
			"Ghastly Eye Jewel",
			"Hypnotic Eye Jewel",
			"Murderous Eye Jewel",
			"Searching Eye Jewel",
			"Prismatic Jewel",
			"Timeless Jewel"
		],

	};


	function Jewelry(isShow, mods, referenceList) {
		AbstractEquipFilter.call(this, isShow, mods, referenceList);
	}
	Jewelry.prototype = Object.create(AbstractEquipFilter.prototype);
	Jewelry.prototype.constructor = Jewelry;
	Jewelry.prototype.toString = function() {
		if(!this.referenceList) {
			return "";
		}
		var lines = [BaseFilter.prototype.toString.call(this)]
		lines.push('BaseType == "' + this.referenceList.join('" "') + '"');
		return lines.join("\n\t");
	};

	// END
}).call(window.$$23_0108 = window.$$23_0108 || {}, window.$$23_0108);

