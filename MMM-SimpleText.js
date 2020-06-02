Module.register('MMM-SimpleText', {
	
	defaults: {
		text: {
			"value": ""
        },
        fontURL: {
            "value": ""
        },
        fontSize: {
            "value": ""
        },
        fontStyle: {
            "value": ""
		},
		color: {
			"value": ""
		}
    },

	//override dom generator.
	getDom: function () {
		var getText = () => {
			var txt = this.config.text["value"];
			return txt;
		};
        
        var getFont = () => {
            var font = this.config.fontURL["value"];
            return font;
        };
      
        var getFontSize = () => {
            var fontSize = this.config.fontSize["value"];
            return fontSize;
        };

        var getFontStyle = () => {
            var fontStyle = this.config.fontStyle["value"];
            return fontStyle;
		};
		
		var getColor = () => {
            var color = this.config.color["value"];
            return color;
        };

		
		var dom = document.createElement("div");
        dom.innerHTML = getText();


        dom.style.fontFamily = getFont();
        dom.style.fontSize = getFontSize();
		dom.style.fontStyle = getFontStyle();
		dom.style.color = getColor();

		return dom;
	},


	refresh: function() {
		this.updateDom();
		setTimeout( () => {
			this.refresh();
		}, 3600000);  // In millisecs, refresh every hour.
  },
  
  	notificationReceived: function(notification, payload) {
		if (notification == "DOM_OBJECTS_CREATED") {
			this.refresh();
		}
	}
});