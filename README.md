# Resin.io -- Clock

This demo, launches chromium and displays a digital clock powered by javascript. 

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

* CLOCK_TZ - your local timezone
* PORT - port you want you server to run on

You should be able to `git push resin master` to your devices!

**Note**: If you used an already existing application that you've previously pushed other code
to you will have to do `git push --force resin master` the first time to delete the previous
commits.

## Switching to HDMI
To switch the primary display from piTFT to HDMI all you need to do is change which framebuffer is used. This can be done by changing line 31 of the spawn_screen script from:
`- su - pi -c "env FRAMEBUFFER=/dev/fb1 startx &" `

`su - pi -c "env FRAMEBUFFER=/dev/fb0 startx &"`

fb0 is the framebuffer device for the raspberry pi's HDMI output. 

`TODO:` Allow fb to be set with an environment variable to have it configurable from the dashboard.
