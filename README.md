[SHA1](https://en.wikipedia.org/wiki/SHA-1) algorithm from [CryptoJS](https://code.google.com/p/crypto-js/), packaged for Meteor.

Dependency
----------
- [`jparker:crypto-core`](https://github.com/p-j/meteor-crypto-core).

Install
-------

Inside your project folder run
```
$ meteor add jparker:crypto-sha1
```
The following method under the `CryptoJS` namespace will now be available
on **both the client and server**:

`CryptoJS.SHA1(message)`

If [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac) is also installed, the following method will also be available:

`CryptoJS.HmacSHA1(message, key)`


Usage
-----
SHA1 digest of a string:
```javascript
CryptoJS.SHA1("Message").toString()
// "68f4145fee7dde76afceb910165924ad14cf0d00"
```

SHA1 HMAC of a string, given a passphrase:
```javascript
CryptoJS.HmacSHA1("Message", "Secret Passphrase").toString()
// "e90f713295ea4cc06c92c9248696ffafc5d01faf"
```

See also
--------
The CryptoJS project lives at <https://code.google.com/p/crypto-js/> and the documentation for SHA-1 is at <https://code.google.com/p/crypto-js/#SHA-1>.

Related packages
----------------

- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)
- [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac)
- [`jparker:crypto-sha256`](https://github.com/p-j/meteor-crypto-sha256)
- [`jparker:crypto-base64`](https://github.com/p-j/meteor-crypto-base64)
- [`jparker:crypto-aes`](https://github.com/p-j/meteor-crypto-aes)

Credits
-------

Based on [Dan Dascalescu's work](https://github.com/dandv/meteor-crypto-sha1)