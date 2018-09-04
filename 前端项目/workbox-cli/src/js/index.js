/**
 * Created by hugo on 2018/8/29.
 */
require('../css/index.css')
require('../js/index1')
require('../js/index2')
importScripts('http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js');
importScripts('http://cdn.bootcss.com/jquery/2.1.1/jquery.min.js');
importScripts('http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css');
importScripts('http://cdn.bootcss.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2');

$(document).ready(function () {


  if (!!localStorage.getItem('user')) {
    showHeaderInfo('user')
  } else {
    showHeaderInfo()
  }


  $('#img1').attr('src', require('../image/img1.jpg'))
  $('#img2').attr('src', require('../image/img2.jpg'))
  $('#img3').attr('src', require('../image/img3.jpg'))

  $('#root').click(function () {
    alert('手动更新')
  })

  $("#btLogin").click(function () {
    //登录
    if ($("#email").val() === 'user1') {
      showHeaderInfo('user')
      //添加缓存
      localStorage.setItem('user', JSON.stringify({
        name: 'user1',
        hasSign: 'false',
        info: 'user1'
      }))
    }

    if ($("#email").val() === 'user2') {
      showHeaderInfo('user')
      //添加缓存
      localStorage.setItem('user', JSON.stringify({
        name: 'user2',
        hasSign: 'true',
        info: 'user1'
      }))
    }


  })


  $("#btLogout").click(function () {
    showHeaderInfo()

    //清除缓存
    localStorage.removeItem("user");

  })


  $("#btSign").click(function () {
    $.get("http://172.20.183.62:3344/sign.capi", function (result) {
      if(result.code===200){
        console.log('签到成功')
      }
    });
  })
})


function showHeaderInfo(type) {
  if (type === 'user') {
    $("#loginForm").addClass('hidden')
    $("#user_info").removeClass('hidden')
  } else {
    $("#loginForm").removeClass('hidden')
    $("#user_info").addClass('hidden')
  }

}