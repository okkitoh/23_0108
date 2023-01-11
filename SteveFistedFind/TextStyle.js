(function(env){
	function Colour() {};
	function RGBA(r, g, b, a) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
	RGBA.prototype = Object.create(Colour.prototype);
	RGBA.prototype.constructor = RGBA;
	RGBA.prototype.toHEX = function() {
		return new HEX( "#"+((this.r << 16) | (this.g << 8) | this.b).toString(16) );
	}
	function HEX(v) {
		this.v = v; 
	}
	HEX.prototype = Object.create(Colour.prototype);
	HEX.prototype.constructor = HEX;
	HEX.prototype.toRGB = function(alpha) {
		this.v = parseInt(this.v.slice(1), 16);
		return new RGBA(
			(this.v >> 16),
			(this.v >> 8 & 0xff),
			(this.v & 0x00ff),
			(alpha || 255)
		);		
	}

	function TextStyle(fontSize, textColour, borderColour, bgColour) {
		console.assert( (function(colorArgs){
			return ((colorArgs.filter(o => (o === void 0 || o === null || o instanceof HEX || o instanceof RGBA)).length) == colorArgs.length);
		})(Array.prototype.slice.call(arguments).slice(1)), "!! Colour args must be null, HEX, or RGBA type");
		this.fontSize = fontSize;
		this.textColour = textColour instanceof HEX ? textColour.toRGB() : textColour;
		this.borderColour = borderColour instanceof HEX ? borderColour.toRGB() : borderColour;
		this.bgColour = bgColour instanceof HEX ? bgColour.toRGB() : bgColour;
		//SetFontSize 30
		//SetTextColor 0 0 0
		//SetBorderColor 255 0 0
		//SetBackgroundColor 255 255 255 255
	}
	TextStyle.prototype.setIcon = function(size, colour, shape) {
		this.icon = {
			size: size,
			colour: colour,
			shape: shape
		};
		/*
		 Size: 0 - Large
		 	   1 - Medium
		 	   2 - Small
		 Colour: Red, Green, Blue, Brown, White, Yellow, Cyan, Grey, Orange, Pink, Purple
		 Shape: Circle, Diamond, Hexagon, Square, Star, Triangle, Cross, Moon, Raindrop, Kite, Pentagon, UpsideDownHouse 
		*/
		// OUTPUT EXAMPLE: MinimapIcon 2 Cyan Diamond
		return this;
	}
	TextStyle.prototype.setBeam = function(colour, isTemp) {
		this.beam = {
			colour: colour
		};
		if(isTemp !== void 0) this.beam.temp = isTemp;
		/*
		  Colour: Red, Green, Blue, Brown, White, Yellow, Cyan, Grey, Orange, Pink, Purple 
		 */
		// OUTPUT EXAMPLE: PlayEffect Red [Temp]
		return this;
	}
	TextStyle.prototype.setSound = function(soundFxId, volume) {
		this.sound = {
			Id: soundFxId
		};
		if(volume !== void 0) this.sound["volume"] = Math.max(0, Math.min(volume, 300));
		/*
		 Id 1-16
		 Volume 0-300 Default 50
		 */
		// OUTPUT EXAMPLE: PlayAlertSoundPositional 16 50
		return this;
	}
	TextStyle.prototype.toString = function() {
		var lines = [];
		if(!!this.fontSize) lines.push("SetFontSize " +this.fontSize);
		if(!!this.textColour) lines.push("SetTextColor "+this.textColour.r + " " + this.textColour.g + " " + this.textColour.b + " " + this.textColour.a);
		if(!!this.borderColour) lines.push("SetBorderColor "+this.borderColour.r + " " + this.borderColour.g + " " + this.borderColour.b + " " + this.borderColour.a);
		if(!!this.bgColour) lines.push("SetBackgroundColor "+this.bgColour.r + " " + this.bgColour.g + " " + this.bgColour.b + " " + this.bgColour.a);
		if(this.icon) lines.push("MinimapIcon " + this.icon.size + " " + this.icon.colour + " " + this.icon.shape);
		if(this.beam) lines.push("PlayEffect " + this.beam.colour + (this.beam.temp? " Temp" : ""));
		if(this.sound) lines.push("PlayAlertSoundPositional " + this.sound.Id + (this.sound.volume? " " + this.sound.volume : ""));

		return lines.join("\n\t");
	}

	TextStyle.PRESETS = {
		QUEST:     function() { return new TextStyle(45, new RGBA(74,230,58,255), new RGBA(74,230,58,255), new RGBA(0,0,0,255)); },
	}



	// register as module
	env = Object.assign(env, {
		Colour: Colour,
		RGBA: RGBA,
		HEX: HEX,
		TextStyle: TextStyle
	});
	// END
}).call(window.$$23_0108 = window.$$23_0108 || {}, window.$$23_0108);
