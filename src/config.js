// 获取m3u8视频的 url
// $('.dplayer-info-panel-item-url .dplayer-info-panel-item-data').text()
const Path = require('path');
module.exports = {
  url: `https://api.neutv.cn/v1/media/adaptiveAsset.m3u8?mediaId=adb7008eddf647bf928b68fbb43b49e0&appOwnerId=1680017396&apiKey=53dc8fa9ae554a6e9ad43cd8fbc29f3e&deviceId=4a10a27758234ad99100d0308b7e61c7&deviceToken=edb1df49021344c2a4c4dee6d00b4b31&watchCode=&preview=&checksum=68723ca2f77cf469025870aec5aa7ff0`,
  name: 'nvm-windows安装和配置',
  output: Path.resolve(process.cwd(), 'dist'),
};
