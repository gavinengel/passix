# passix
 
Hash a string into 6-char base64 for appending to a password.  Uses your ssh private key as a salt.

example:  base password is `foobarbaz`, and this year's append is: tU68/+, final password is: `foobarbaztU68/+`,

this means you can use a single `base password`

64^6 = 68,719,476,736 so it makes each password very difficult to "guess"

```
$ passix gmail.com                                                                                                               
copied hash for `gmail.com`: O1gfzL
```