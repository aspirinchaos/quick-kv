Package.describe({
  name: 'core',
  version: '0.1.6',
  summary: 'Расширенный класс для коллекций',
  documentation: 'README.md',
  git: 'https://bitbucket.org/aspirinchaos/core.git',
});

Package.onUse(function (api) {
  api.versionsFrom('1.7');
  api.use([
    'ecmascript',
    'mongo',
    'tmeasday:check-npm-versions',
  ]);
  api.mainModule('core.js');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('core');
  api.mainModule('core-tests.js');
});
