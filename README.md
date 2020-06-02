# MMM-SimpleText
Simple and plain text module for the [MagicMirror²](https://github.com/MichMich/MagicMirror) project.
You can use a sentence of choice and use some minor formatting options.

# Installation
1. Navigate into the modules directory and clone the repo:
```
  cd MagicMirror/modules
  git clone https://github.com/SaltyRiver/MMM-SimpleText.git
```

2. Insert the following part into your config file and choose your settings
../MagicMirror/config/config.js

```
{
 	module: 'MMM-SimpleText',
 	position: 'top_center',
 	config: {
			text: {
			  'value': 'Hello World!'
			},
			fontURL: {
			  'value': 'Tahoma, Geneva, sans-serif'
			},
			fontSize: {
			  'value': 'xx-large'
			},
			fontStyle: {
			  'value': 'italic'
			},
			color: {
			  'value': '#FFFFFF'
			}
		}
},

```
