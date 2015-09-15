# halfpass.js

[![npm version](https://badge.fury.io/js/halfpass.svg)](http://badge.fury.io/js/halfpass)
 
Create a 4+ char string for appending to a password.  Uses pbkdf2 as hash algorithm, and your ssh private key *and* the current year as a salt.  Can also display last years hash as well, in case you need to recover an old password.

## What problem does `halfpass` solve?
Using secure passwords for various websites can be tricky.  Instead of writing down passwords, which is insecure, you could instead commit to memory a single baseword and use this module to generate a yearly suffix for every website.

* example: your password baseword is `foobarbaz`, and this year's gmail.com append is: `tU6+`, final password is: `foobarbaztU6+`,

## Installing 
The lazy approach to installing this requires sudo (root) access:
```
  sudo npm install -g halfpass
```

Of course, I do not recommend installing npm packages with sudo unless it's required.

This is how I install CLI tools from npm (like halfpass) without sudo:

1. perform these steps: [https://gist.github.com/gavinengel/1842179837823dc25730](https://gist.github.com/gavinengel/1842179837823dc25730)
2. $ nodebin
3. $ npm install --save halfpass

## Usage
```
$ halfpass gmail.com
copied 2015's hash for `gmail.com`: tU6+
```

or if you want a few extra base64 chars appended for security:
```
$ halfpass gmail.com -a=3
copied 2015's hash for `gmail.com`: tU6+h*a
```

or if you want a previous year's hash:
```
$ halfpass gmail.com -y=2014
copied 201y's hash for `gmail.com`: H2s*
```

## Credits
TODO

## Alternatives
These are alternative projects which can yield achieve a similar result:

TODO

## License

([The MIT License](http://opensource.org/licenses/MIT))
Copyright (c) 2015 Gavin Engel <<gavin@engel.com>>

