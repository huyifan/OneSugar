/**
 * Created by hugo on 2018/8/29.
 */
$(document).ready(function () {
  $('#root').click(function () {
    alert('手动更新')
    navigator.serviceWorker.register('../sw.js').then(function (reg) {

      reg.update().then(function () {
        alert('更新成功')
      });

    });

  })
})