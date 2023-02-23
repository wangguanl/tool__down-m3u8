const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg'),
  ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
module.exports = function goFfmpeg(url, output) {
  return new Promise((resolve, reject) => {
    ffmpeg(url)
      .on('progress', function (progress) {
        if (progress) {
          console.log('Processing: ' + progress.percent + '% done');
          if (progress.percent >= 100) {
            resolve();
          }
        }
      })
      .on('error', function (err) {
        if (err) {
          console.log(err);
          console.log('Error transcoding file');
        }
        reject(err);
      })
      .on('end', function () {
        console.log('Finished processing');
        resolve();
      })
      .outputOptions('-c copy')
      .outputOptions('-bsf:a aac_adtstoasc')
      .output(output)
      .run();
  });
};
