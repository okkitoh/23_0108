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

	function TextStyle(fontSize, textColour, borderColour) {
		this.fontSize = fontSize;
		this.textColour = textColour;
		this.borderColour = borderColour;
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







