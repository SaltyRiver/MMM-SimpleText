# MMM-SimpleText
Simple and plain text module for the [MagicMirror²](https://github.com/MichMich/MagicMirror) project.
You can use a sentence of choice and use some minor formatting options.

![Screenshot](demo_screenshot.png)

# Installation
1. Navigate into the modules directory and clone the repo:
```
  cd <MagicMirror>/modules # replace <MagicMirror> with your path of your magic mirror
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


# Customization example
![Screenshot](screenshot_green.png)


```
{
 	module: 'MMM-SimpleText',
 	position: 'top_center',
 	config: {
			text: {
			  'value': 'I am green!'
			},
			fontURL: {
			  'value': 'Tahoma, Geneva, sans-serif'
			},
			fontSize: {
			  'value': 'xx-large'
			},
			fontStyle: {
			  'value': 'normal'
			},
			color: {
			  'value': '#008000'
			}
		}
},
```


# Further settings
The following properties can also be used to add more functionality:

1. refreshMs - Refresh this module every x milliseconds (default: 3600000)
```
refreshMs: {
  'value': '10000'
},
```


2. **filePath** - Read and display the content from a local **.txt** file. 
**The file has to exist within the MMM-SimpleText directory!** 
Note that when filePath is being used the text property will be ignored.
```
filePath: {
  'value': 'test.txt'
},
```


**Linebreaks** - When reading text from a file, line breaks will be included
![Screenshot](screenshot_rows.png)


Below you can find a complete example with those two properties beeing used:
```
{
 	module: 'MMM-SimpleText',
 	position: 'top_center',
 	config: {
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
			},
			refreshMs: {
			  'value': '10000'
			},
			filePath: {
			  'value': 'test.txt'
			},
		}
},
```
