(function(env){
	const BaseFilter = (env.BaseFilter || void 0);
	const TextStyle =  (env.TextStyle || void 0);
	const RGBA =  (env.RGBA || void 0);

	Currency.STYLES = {
		DIVINE: new TextStyle(45, new RGBA(255,0,0,255), new RGBA(255,0,0,255), new RGBA(255,255,255,255))
			.setIcon(0, "Red", "Star")
			.setSound(6, 300)
			.setBeam("Red"),
		EXALT: new TextStyle(45, new RGBA(255,255,255,255), new RGBA(255,255,255,255), new RGBA(240,90,35,255))
			.setIcon(0, "Red", "Circle")
			.setSound(1, 300)
			.setBeam("Red"),
		ANNUL: new TextStyle(45, new RGBA(0,0,0,255), new RGBA(0,0,0,255), new RGBA(240,90,35,255))
			.setIcon(1, "Yellow", "Circle")
			.setSound(2, 300)
			.setBeam("Yellow"),
		CHAOS: new TextStyle(40, new RGBA(0,0,0,255), new RGBA(0,0,0,255), new RGBA(249,150,25,255))
			.setIcon(2, "White", "Circle")
			.setSound(2, 300)
			.setBeam("White"),
		ALCHEMY: new TextStyle(40, new RGBA(0,0,0,255), new RGBA(0,0,0,255), new RGBA(213,159,0,255))
			.setIcon(2, "White", "Circle")
			.setSound(2, 300)
			.setBeam("White"),
		CHANCE: new TextStyle(35, new RGBA(0,0,0,255), new RGBA(0,0,0,255), new RGBA(210,178,135,255))
			.setIcon(2, "Grey", "Circle")
			.setSound(2, 300)
			.setBeam("Grey"),
		TRANSMUTE: new TextStyle(35, new RGBA(190,178,135,255), new RGBA(190,178,135,255), new RGBA(0,0,0,255)),
		WISDOM: new TextStyle(35, null, new RGBA(100,50,30,255), new RGBA(0,0,0,255)),
		PORTAL: new TextStyle(35, null, new RGBA(30,50,100,255), new RGBA(0,0,0,255))
	};

	// START WebSCP FilterBlade.xyz
	Currency.GROUPS = {
		// $('#VisualSortableList12975 .SortableListElementLabel')
		DIVINE: [
			"Albino Rhoa Feather",
			"Awakener's Orb",
			"Divine Orb",
			"Eternal Orb",
			"Fracturing Orb",
			"Fracturing Shard",
			"Hunter's Exalted Orb",
			"Crusader's Exalted Orb",
			"Warlord's Exalted Orb",
			"Redeemer's Exalted Orb",
			"Mirror of Kalandra",
			"Mirror Shard",
			"Orb of Dominance",
			"Prime Regrading Lens",
			"Secondary Regrading Lens",
			"Tailoring Orb",
			"Tainted Divine Teardrop",
			"Tempering Orb",
			"Sacred Crystallised Lifeforce",
		],
		// $('#VisualSortableList12979 .SortableListElementLabel')
		EXALT: [
			"Exalted Orb",
			"Crescent Splinter",
			"Elevated Sextant",
			"Orb of Conflict",
			"Sacred Orb",
			"Tainted Exalted Orb",
			"Tainted Orb of Fusing",
		],
		// $('#VisualSortableList12983 .SortableListElementLabel')
		ANNUL: [
			"Orb of Annulment",
			"Ancient Orb",
			"Annulment Shard",
			"Ancient Shard",
			"Blessing of Chayula",
			"Blessing of Esh",
			"Blessing of Tul",
			"Blessing of Uul-Netol",
			"Blessing of Xoph",
			"Comprehensive Scouting Report",
			"Influenced Scouting Report",
			"Otherworldly Scouting Report",
			"Eldritch Orb of Annulment",
			"Lesser Eldritch Ember",
			"Lesser Eldritch Ichor",
			"Greater Eldritch Ember",
			"Greater Eldritch Ichor",
			"Grand Eldritch Ember",
			"Grand Eldritch Ichor",
			"Exceptional Eldritch Ember",
			"Exceptional Eldritch Ichor",
			"Harbinger's Orb",
			"Harbinger's Shard",
			"Eldritch Chaos Orb",
			"Eldritch Exalted Orb",
			"Infused Engineer's Orb",
			"Veiled Chaos Orb"
		],
		// $('#VisualSortableList12987 .SortableListElementLabel')
		CHAOS: [
			"Burial Medallion",
			"Exotic Coinage",
			"Astragali",
			"Scrap Metal",
			"Abrasive Catalyst",
			"Accelerating Catalyst",
			"Fertile Catalyst",
			"Prismatic Catalyst",
			"Unstable Catalyst",
			"Turbulent Catalyst",
			"Intrinsic Catalyst",
			"Imbued Catalyst",
			"Noxious Catalyst",
			"Tempering Catalyst",
			"Awakened Sextant",
			"Blighted Scouting Report",
			"Delirious Scouting Report",
			"Operative's Scouting Report",
			"Singular Scouting Report",
			"Vaal Scouting Report",
			"Explorer's Scouting Report",
			"Chaos Orb",
			"Regal Orb",
			"Exalted Shard",
			"Gemcutter's Prism",
			"Orb of Unmaking",
			"Surveyor's Compass",
			"Charged Compass",
			
			"Oil Extractor",
			"Ritual Vessel",
			"Ritual Splinter",
			
			"Primal Crystallised Lifeforce",
			"Vivid Crystallised Lifeforce",
			"Wild Crystallised Lifeforce"
		],
		// $('#VisualSortableList12991 .SortableListElementLabel')
		ALCHEMY: [
			"Orb of Alchemy",
			"Orb of Fusing",
			"Orb of Horizons",
			"Orb of Regret",
			"Orb of Scouring",
			"Orb of Alteration",
			"Blessed Orb",
			"Vaal Orb",
			"Cartographer's Chisel",
			"Bestiary Orb",
			"Facetor's Lens",
			"Stacked Deck",
			"Tainted Blessing",
			"Tainted Chaos Orb",
			"Tainted Mythic Orb",
			"Tainted Armourer's Scrap",
			"Tainted Blacksmith's Whetstone",
			"Tainted Chromatic Orb",
			"Tainted Jeweller's Orb",
		],
		// $('#VisualSortableList12999 .SortableListElementLabel')
		CHANCE: [
			"Engineer's Orb",
			"Jeweller's Orb",
			"Orb of Binding",
			"Orb of Chance",
			"Chromatic Orb",
			"Glassblower's Bauble"
		],
		// $('#VisualSortableList13003 .SortableListElementLabel')
		TRANSMUTE: [
			"Alchemy Shard",
			"Alteration Shard",
			"Binding Shard",
			"Blacksmith's Whetstone",
			"Chaos Shard",
			"Horizon Shard",
			"Orb of Augmentation",
			"Orb of Transmutation",
			"Regal Shard",
			"Instilling Orb",
			"Enkindling Orb"
		],
		// $('#VisualSortableList13011 .SortableListElementLabel')
		PORTAL: [
			"Portal Scroll"
		],
		// $('#VisualSortableList13015 .SortableListElementLabel')
		WISDOM: [
			"Scroll of Wisdom"
		]
	};
	// END WebSCP

	function Currency(isShow, baseTypes) {
		BaseFilter.call(this, isShow);
		this.baseTypes = baseTypes;
	}
	Currency.prototype = Object.create(BaseFilter.prototype);
	Currency.prototype.constructor = Currency;
	Currency.prototype.toString = function() {
		var lines = [BaseFilter.prototype.toString.call(this)]
		lines.push('Class "Currency"');
		lines.push('BaseType == "' + this.baseTypes.join('" "') + '"');
		return lines.join("\n\t");
	}



	// register as module
	env = Object.assign(env, { Currency: Currency });
	// END
}).call(window.$$23_0108 = window.$$23_0108 || {}, window.$$23_0108);
