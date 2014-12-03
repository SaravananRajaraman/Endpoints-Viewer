Endpoints-Viewer
================

A simple application to view all endpoints of restapi at one place

##How to Use It
###Download

You can use the Endpoints-Viewer code, No need to build or recompile--just clone this repo and use the files.

###Build

You can rebuild Endpoints-Viewer on your own to tweak it or just so you can say you did. To do so, follow these steps:

1. Create a json file 
2. Your json Structure must be like 
          
        {
		  "projectName": "String",
		  "projectDesc": "String",
		  "baseUrl": "String",
		  "data": [
		    {
		      "url": "String",
		      "smallDesc": "String",
		      "detailedDesc": "String",
		      "method": "String",
		      "requestParam": {
		        "Parameters": "Descriptions"
		      },
		      "response": {
		        "Success_Title1": {},
		        "Success_Title2": {},
		        "Fail_Title1": {},
		        "Fail_Title2": {}
		      }
		    }
		  ]
		}
  
3. Load the JSON path in script.js file by default it locating  `trackit.json`
4. Finally run the index.html file.

###How to Improve It

Create your own fork of [Endpoints-Viewer](https://github.com/SaravananRajaraman/Endpoints-Viewer)

To share your changes, [submit a pull request](https://github.com/SaravananRajaraman/Endpoints-Viewer/compare?expand=1).

