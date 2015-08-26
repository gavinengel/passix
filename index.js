#!/usr/bin/env node

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
var date = new Date()
var year = date.getFullYear()

// get private key (the salt)
salts = rawSalt.split(/\n/)
salts.forEach(function(each) {
  if (each.indexOf('-----') === -1) {
    salt = salt + each
  }
})
salt = salt + year

// gather passed string to hash
target = process.argv.pop()

// create hash
pash(target, salt, function(raw) {
  hash = raw.toString('base64').slice(0, 6)

  // save hash to clipboard
  copy(hash)
  out('copied ' + year + '\'s hash for `' + target + '`: ' + hash)
  process.exit()
});



