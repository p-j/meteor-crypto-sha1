var C = CryptoJS;

Tinytest.add('MeteorCryptoSHA1 - Vector 1', function (t) {
	t.equal(
    C.SHA1('').toString(),
    'da39a3ee5e6b4b0d3255bfef95601890afd80709'
  );
});

Tinytest.add('MeteorCryptoSHA1 - Vector 2', function (t) {
	t.equal(
    C.SHA1('a').toString(),
    '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8'
  );
});

Tinytest.add('MeteorCryptoSHA1 - Vector 3', function (t) {
	t.equal(
    C.SHA1('abc').toString(),
    'a9993e364706816aba3e25717850c26c9cd0d89d'
  );
});

Tinytest.add('MeteorCryptoSHA1 - Vector 4', function (t) {
	t.equal(
    C.SHA1('message digest').toString(),
    'c12252ceda8be8994d5fa0290a47231c1d16aae3'
  );
});

Tinytest.add('MeteorCryptoSHA1 - Vector 5', function (t) {
	t.equal(
    C.SHA1('abcdefghijklmnopqrstuvwxyz').toString(),
    '32d10c7b8cf96570ca04ce37f2a19d84240d3a89'
  );
});

Tinytest.add('MeteorCryptoSHA1 - Vector 6', function (t) {
	t.equal(
    C.SHA1('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789').toString(),
    '761c457bf73b14d27e9e9265c46f4b4dda11f940'
  );
});

Tinytest.add('MeteorCryptoSHA1 - Vector 7', function (t) {
	t.equal(
    C.SHA1('12345678901234567890123456789012345678901234567890123456789012345678901234567890').toString(),
    '50abf5706a150990a08b2c5ea40fa0e585554732'
  );
});

Tinytest.add('MeteorCryptoSHA1 - Update And Long Message', function (t) {
	var sha1 = C.algo.SHA1.create();
	for (var i = 0; i < 100; i++) {
		sha1.update('12345678901234567890123456789012345678901234567890');
	}

	t.equal(
    sha1.finalize().toString(),
    '85e4c4b3933d5553ebf82090409a9d90226d845c'
  );
});

Tinytest.add('MeteorCryptoSHA1 - Clone', function (t) {
	var sha1 = C.algo.SHA1.create();

	t.equal(
    sha1.update('a').clone().finalize().toString(),
    C.SHA1('a').toString()
  );
	t.equal(
    sha1.update('b').clone().finalize().toString(),
    C.SHA1('ab').toString()
  );
	t.equal(
    sha1.update('c').clone().finalize().toString(),
    C.SHA1('abc').toString()
  );
});

Tinytest.add('MeteorCryptoSHA1 - Input Integrity', function (t) {
	var message = C.lib.WordArray.create([0x12345678]);

	var expected = message.toString();

	C.SHA1(message);

	t.equal(
    message.toString(),
    expected
  );
});

Tinytest.add('MeteorCryptoSHA1 - Helper', function (t) {
	t.equal(
    C.SHA1('').toString(),
    C.algo.SHA1.create().finalize('').toString()
  );
});

Tinytest.add('MeteorCryptoSHA1 - HmacHelper', function (t) {
	t.equal(
    C.HmacSHA1('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString(),
    C.algo.HMAC.create(C.algo.SHA1, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString()
  );
});