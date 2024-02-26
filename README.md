<img width="60px" height="60px" src="https://github.com/itzilly/mdview/src-tauri/icons/mdview_original.png" align="right" />

# MDView

An **EXTREMLY** simple tool for viewing markdown files (in html) 

## About
I disliked needing to open [VS Code](https://code.visualstudio.com/) or [PhPStorm](https://www.jetbrains.com/phpstorm/)
just view a README.md (not just in plain text). I personally use the terminal a decent amount, especially when just 
browsing folders/files, and I love tools like [Sublime Text](https://www.sublimetext.com/)'s `SUBL` and
[VS Code](https://code.visualstudio.com/)'s `CODE` command line tools for opening files to edit. 

That's how I got the idea for `MDView`. 

It's a stupidly simple tool, but even while building it I've used it time and time again. Sometimes I don't want to edit
a file, somtimes I just want to view the contents in a readable way.

## Usage
`MDView` is very simple to use, just make sure you've added the application path to your environment variables `->`
[Add EXE to PATH](https://gist.github.com/ScribbleGhost/752ec213b57eef5f232053e04f9d0d54)!
```bash
mdview README.md
```

## Current Limitations
Oh boy... where do I start :[
- Windows ONLY
- Command line interface ONLY
- NO file integrity checking
- NO prettifying (white background)
- NO automatic adding to PATH
- NO installer 
- Read a single file ONLY

### Support
I just made this as a tool for myself, however if you find any more issues, feel free to create a ticket in the
[Issues](https://github.com/itzilly/mdview/issues) tab and I'll see if I can get around to fixing it.

### Contributing
You're more then welcome to try to contribute, however I reserve the right to deny any and all pull requests at will.

To start working on this project, clone this repo using GIT... and then pull some magic to get the code to compile.
In all honesty, I have no idea how to install all the dependencies (aside from NPM) since I'm not familiar with rust yet.
Will update this when I learn how :)

## License

Copyright (c) 2024, illyum. (MIT License)