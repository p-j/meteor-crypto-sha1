Package.describe({
	summary: 'SHA1 algo for CryptoJS, standard secure crypto algorithms',
	version: '0.1.0',
	git: 'https://github.com/p-j/meteor-crypto-sha1.git'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@0.9.1.1');

	api.use('jparker:crypto-core@0.1.0', ['client', 'server']);

	api.imply('jparker:crypto-core', ['client', 'server']);

	api.addFiles('lib/sha1.js', ['client', 'server']);
});

Package.onTest(function (api) {
	api.use([
    'jparker:crypto-core@0.1.0',
    'jparker:crypto-sha1@0.1.0',
    'tinytest'
  ], ['client', 'server']);

	api.addFiles('tests/tests.js', ['client', 'server']);
});