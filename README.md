# Resin.io -- Simple Digitizer Kiosk

## How it works

This demo uses a JSON endpoint and variable provided as environment variables to display digits on your screen. 

This work is based on the blogpost at http://blogs.wcode.org/2013/09/howto-boot-your-raspberry-pi-into-a-fullscreen-browser-kiosk/

## How to use

To use this demo project, first clone this repo on your local machine. Then go to your
Resin dashboard and create an application or use one that you've already created. You
have to add the resin remote to your local git repo in order to `git push resin master`.

To do that, copy the remote and issue the following command in the folder containing this
repo:

```bash
git remote add resin git@git.resin.io:username/projectname.git
```
Replace username and projectname above with your Username and Project name on Resin.

Add the following environment variables in your Resin.io dashboard

* DIGITISER_ENDPOINT - URL of the JSON endpoint like - Example: https://api.bitcoinaverage.com/ticker/global/GBP/
* DIGITISER_VALUE_FIELD - Value of the variable to display - Example: "last" in the JSON from URL above
* DIGITISER_INTERVAL - Refresh time in seconds - Example: 10
* DIGITISER_MESSAGE - Message to display on the screen below the digits - Example: Hello From Resin


You should be able to `git push resin master` to your devices!

**Note**: If you used an already existing application that you've previously pushed other code
to you will have to do `git push --force resin master` the first time to delete the previous
commits.

You can also log into your terminal by pointing your browser to http://RaspberryPiAddress:8000
with username and password as admin and admin.