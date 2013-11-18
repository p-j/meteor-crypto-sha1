Package.describe({
  summary: "SHA1 algo for CryptoJS, standard secure crypto algorithms"
});

Package.on_use(function (api) {
  api.use('crypto-base',    ['client', 'server']);
  api.imply('crypto-base',  ['client', 'server']);
  api.add_files(['sha1.js'], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['crypto-base', 'crypto-sha1', 'tinytest']);

  api.add_files('crypto-sha1_tests.js', ['client', 'server']);
});
