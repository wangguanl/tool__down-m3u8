const Path = require('path'),
  goFfmpeg = require('./utils/down-m3u8'),
  { to } = require('await-to-js'),
  { accessAsync, statAsync, mkdirAsync } = require('./utils/node-utils'),
  config = require('./config');

(async () => {
  // 检查输出目录是否存在
  const [statOutputErr] = await to(statAsync(config.output));
  // 创建输出目录
  if (statOutputErr) {
    await mkdirAsync(config.output);
  }

  const output = Path.resolve(config.output, config.name + '.mp4');
  // 检查文件是否存在
  const [accessPathErr] = await to(accessAsync(output));
  if (!accessPathErr) {
    console.log('文件已存在');
    return;
  }

  await goFfmpeg(config.url, output);
})();
