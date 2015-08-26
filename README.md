# passix
 
Hash a string into 6-char base64 for appending to a password.  Uses your ssh private key as a salt.

The problem this module tries to solve: using secure passwords for various websites.  Instead of writing down passwords, which is insecure, you could instead commit to memory a single baseword and use this module to generate a suffix for every website.

example: your password baseword is `foobarbaz`, and this year's gmail.com append is: tU68/+, final password is: `foobarbaztU68/+`,

this means you can use a single `base password`

64^6 = 68,719,476,736 so it makes each password very difficult to "guess"

```
$ passix gmail.com                                                                                                               
copied hash for `gmail.com`: tU68/+
```