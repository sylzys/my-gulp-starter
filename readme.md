My Gulp starter
============

This is a Gulp starter repository, to be used as a boilerplate for web projects.
This have been greatly inspired by [Dan Tello Gulp starter](https://github.com/greypants/gulp-starter)

It includes the follwing tasks:

- Sass
- JSLint
- JS Minification
- Mocha integration
- LiveReload
- Static Server
- Image optimization
- Error Notifications in Notification Center

You'll need to install Node if you haven't done so already
Use Homebrew:
```
brew install node
```
Or ownload and install from [Nodejs.org](http://nodejs.org/download/).

### Install Gulp Globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp
```

### Install all npm dependencies
```
npm install
```

### Run gulp
```
gulp
```
or
```
gulp watch
```
or
```
gulp build
```

If you run "gulp" and if you're on OS X with Chrome installed, a window will open displaying the index.html page. You can easily replace it with "firefox" in gulp/tasks/open.js file.
If not, open your favorite browser and open http://localhost:8080 to view the index page.

### Live Relaod
In order to get LiveReload working, you'll need to download and install the plugin for the browser of your choice. Have a look at [LiveReload.com browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)

### TODO

<del>Configure browserify</del>

- Concatenate JS files
- Add error in notification center for JS Lint