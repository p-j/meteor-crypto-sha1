Tinytest.add('MeteorCryptoSHA1 - Simple Test', function (test) {
  test.equal(
    CryptoJS.SHA1("Message").toString(),
    '68f4145fee7dde76afceb910165924ad14cf0d00',
    'SHA1 digest'
  );
/* TODO run only if crypto-hmac is installed
    test.equal(
    CryptoJS.HmacSHA1("Message", "Secret Passphrase").toString(),
    'e90f713295ea4cc06c92c9248696ffafc5d01faf',
    'SHA1 HMAC of a string, given a passphrase'

  );
*/
});
