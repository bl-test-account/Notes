$(function () {
  var content = JSON.parse(BL.getContentForPreview().content[0].data);
  $('#text').append('' + content.body + '');
  $('#author').append('-' + content.author + '');
  BL.previewReady();
});