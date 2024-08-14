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
        },
        refreshMs: {
            "value": 3600000
        },
        filePath: {
            "value": ""
        },
        fileContent: {
            "value": ""
        },
    },

    //override dom generator.
    getDom: function () {
        var dom = document.createElement("div");

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

        var getFilePath = () => {
            var filePath = this.config.filePath["value"];
            return filePath;
        };
        
		iInstanceID=this.data.index;
		
		Log.log("MMM-SimpleText Instance ID:" + iInstanceID );
		var uniqueID="MMM-SimpleText-"+iInstanceID
		this.uniqueID=uniqueID; 

        var contentDiv = document.createElement("div");

		contentDiv.id = uniqueID;
        contentDiv.innerHTML = getText();

        dom.style.fontFamily = getFont();
        dom.style.fontSize = getFontSize();
        dom.style.fontStyle = getFontStyle();
        dom.style.color = getColor();

        dom.appendChild(contentDiv);

		

        //Read file content if path has been given
        if (getFilePath() !== "") {
            var self = this;
            this.readFileContent(function (response) {
                self.config.fileContent["value"] = response.replace(/(?:\r\n|\r|\n)/g, '<br>');
				document.getElementById(self.uniqueID).innerHTML = self.config.fileContent["value"];
            });
        }

        return dom;
    },


    refresh: function () {
        if (this.config.filePath["value"] !== "") {
            var self = this;
            this.readFileContent(function (response) {
                self.config.fileContent["value"] = response.replace(/(?:\r\n|\r|\n)/g, '<br>');
				document.getElementById(self.uniqueID).innerHTML = self.config.fileContent["value"];
            });
        }

        setTimeout(() => {
            this.refresh();
        }, this.config.refreshMs["value"]);
    },

    //Read content from local file
    readFileContent: function (callback) {
        var xobj = new XMLHttpRequest(),
            path = this.file(this.config.filePath["value"]);
        xobj.overrideMimeType("application/text");
        xobj.open("GET", path, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState === 4 && xobj.status === 200) {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    },

    notificationReceived: function (notification, payload) {
        if (notification == "DOM_OBJECTS_CREATED") {
            this.refresh();
        }
    }
});
