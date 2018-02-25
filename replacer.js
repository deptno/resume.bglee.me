require('replace-in-file').sync({
  files: './out/index.html',
  from: 'http://',
  to: '//'
})
console.log('[done] http > https')
