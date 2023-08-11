module.exports = {
  apps: [
    {
      name: 'swc-app',
      script: './dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false
    }
  ]
};
