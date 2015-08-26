# passix

[![npm version](https://badge.fury.io/js/passix.svg)](http://badge.fury.io/js/passix)
 
Hash a string into 6-char base64 for appending to a password.  Uses pbkdf2 as hash algorithm, and your ssh private key as a salt.

## What problem does `passix` solve?
Using secure passwords for various websites can be tricky.  Instead of writing down passwords, which is insecure, you could instead commit to memory a single baseword and use this module to generate a suffix for every website.

* example: your password baseword is `foobarbaz`, and this year's gmail.com append is: tU68/+, final password is: `foobarbaztU68/+`,

this means you can use a single `base password`

64^6 = 68,719,476,736 so it makes each password very difficult to "guess"

## Installing 
The lazy approach to installing this requires sudo (root) access:
```
  sudo npm install -g passix
```

Of course, I do not recommend installing npm packages with sudo unless it's required.

This is how I install CLI tools from npm (like passix) without sudo:

1. perform these steps: [https://gist.github.com/gavinengel/1842179837823dc25730](https://gist.github.com/gavinengel/1842179837823dc25730)
2. $ nodebin
3. $ npm install --save passix

## Usage
```
$ passix gmail.com
copied hash for `gmail.com`: tU68/+
```

## Credits
TODO

## Alternatives
These are alternative projects which can yield achieve a similar result:

TODO

## License

([The MIT License](http://opensource.org/licenses/MIT))
Copyright (c) 2015 Gavin Engel <<gavin@engel.com>>

