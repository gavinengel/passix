#!/usr/bin/env node
/** 
 * hash a string into 6-char base64 for appending to a password, perhaps yearly
 * example:  base password is `foobarbaz`, and this year's append is: tU68/+, final password is: `foobarbaztU68/+`,
 * this means you can use a single `base password`
 * 64^6 = 68,719,476,736 so it makes each password very difficult to "guess"
 */
var fs = require('fs')
var crypto = require('crypto')
var home = process.env['HOME']
var saltPath = home + '/.ssh/id_rsa'
var salt = ''
var rawSalt = fs.readFileSync(saltPath,'utf8')
var hash = ''
var out = console.log
var target = ''
require('copy-paste').global() 
var pash = require('pash')
 
// get private key (the salt)
salts = rawSalt.split(/\n/)
salts.forEach(function(each) {
  if (each.indexOf('-----') === -1) {
    salt = salt + each
  }
})

// gather passed string to hash
target = process.argv.pop()

// create hash
pash(target, salt, function(raw) {
  hash = raw.toString('base64').slice(0, 6)

  // save hash to clipboard
  copy(hash)
  out('copied hash for `' + target + '`: ' + hash)
  process.exit()
});



