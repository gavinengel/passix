#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

var fs = require('fs')
var tld = require('tldjs')
var crypto = require('crypto')
var home = process.env['HOME']
var saltPath = home + '/.ssh/id_rsa'
var salt = ''
var rawSalt = fs.readFileSync(saltPath,'utf8')
var hash = ''
var out = console.log
var domain = ''
require('copy-paste').global() 
var pash = require('pash')
var date = new Date()
var year = date.getFullYear()
var maxes = [{"name":"lower", "max":26}, {"name":"upper", "max":26}, {"name":"digit", "max":10}] // we need to get for 'random' int, for lowercase, uppercase, digit, and special-char (shift+digit on std keyboard)  
var rands = []
var lowers = 'abcde'
var uppers = ''
var specials = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' // using the ordering of ascii table
maxes.push({"name":"special", "max":specials.length})

// get private key (the salt)
salts = rawSalt.split(/\n/)
salts.forEach(function(each) {
  if (each.indexOf('-----') === -1) {
    salt = salt + each
  }
})
salt = salt + year

// get passed string
input = process.argv.pop()
var rawDomain = tld.getDomain(input)
domain = (rawDomain)? rawDomain : input;

// create hash
pash(domain, salt, function(raw) {
  
  // loops grabs a 'random' into rands
  var starts = []
  var i = 0
  var size = 4
  maxes.forEach(function(pair) {
    dec = getDec(i, size, raw)
    starts.push(i * size)
    max = pair.max
    newPair = {"val":dec % max, "name":pair.name, "dec":dec}
    rands.push(newPair)
    i++
  })

  rands.sort(objSorter)

  // save hash to clipboard

  simple = complex2simple(rands)

  hash = ''
  simple.forEach(function(each) {
    hash = hash + each
  })

  copy(hash)
  out('copied ' + year + '\'s hash for `' + domain + '`: ' + hash)
  process.exit()
});


///
function getDec(i, size, raw) {
  start = i * size
  hex = raw.toString('hex').slice(start, start + size)
  Dec  = parseInt(hex, 16);
  return Dec;  
}

function objSorter(a,b) {
  return parseInt(a.dec, 10) - parseInt(b.dec, 10);
}

function complex2simple(complex) {
  simple = []
  complex.forEach(function(each) {
    if (each.name == 'lower') {
      simple.push(String.fromCharCode(97 + each.val))
    }
    else if (each.name == 'upper') {
      simple.push(String.fromCharCode(65 + each.val))

    }
    else if (each.name == 'digit') {
      simple.push(each.val)

    }
    else if (each.name == 'special') {
      simple.push(specials.slice(each.val, each.val+1))

    }
    else {
      out('Error: unknown type: '+each.name)
    }
  })

  return simple
}