(function(env){
	// Exports
	env = Object.assign(env, {
		BaseFilter: BaseFilter
	});


	function BaseFilter(isShow, mods) {
		this.visibility = isShow ? "Show" : "Hide";
		this.rarity = "Rarity";
		this.identified = null;
		this.corrupted = null;
		this.synthesis = null;
		this.fractured = null;
		this.style = null;

		if(mods & UNIQUE) {
			this.rarity += " Unique"
		} else if((mods & 7) > 0) {
			if(mods & NORMAL) this.rarity += " Normal";
			if(mods & MAGIC) this.rarity += " Magic";
			if(mods & RARE) this.rarity	+= " Rare";
		} else {
			this.rarity = null;
		}

		if(mods & IDENTIFIED) this.identified = "Identified True";
		if(mods & CORRUPTED) this.corrupted = "Corrupted True";
		if(mods & SYNTHESIS) this.synthesis = "SynthesisedItem True";
		if(mods & FRACTURED) this.fractured = "FracturedItem True";
	}
	BaseFilter.prototype.setStyle = function(stylo) {
		console.assert(stylo instanceof env.TextStyle, "!! stylo objekt should be TextStyle instance");
		this.style = stylo;
		return this;
	}
	BaseFilter.prototype.toString = function() {
		var lines = [this.visibility];
		if(this.style) lines.push(this.style.toString());
		if(this.identified) lines.push(this.identified);
		if(this.corrupted) lines.push(this.corrupted);
		if(this.synthesis) lines.push(this.synthesis);
		if(this.fractured) lines.push(this.fractured);
		if(this.rarity) lines.push(this.rarity);
		return lines.join("\n\t");
	}


}).call(window.$$23_0108 = window.$$23_0108 || {}, window.$$23_0108);
