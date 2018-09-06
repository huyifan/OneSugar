/**
 * Created by hugo on 2018/8/29.
 */
require('../css/index.css')
require('./index1')
require('./index2')

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
    //登录模拟服务器请求POST

    //登录成功
    showHeaderInfo('user')
    var respData = {
      id: 1,
      name: $("#email").val(),
      hasSign: 'false',
      info: 'user1'
    }
    //添加缓存
    localStorage.setItem('user', JSON.stringify(respData))


  })


  $("#btLogout").click(function () {
    showHeaderInfo()
    //清除缓存
    localStorage.removeItem("user");

  })


  $("#btSign").click(function () {
    var user = JSON.parse(localStorage.getItem('user'))
    $.get("http://172.20.183.62:3344/CAPI/sign?uid=" + user.id, function (result) {
      if (result.code === 200) {
        console.log('签到成功')
      }
    });
  })


  $("#btgetData1").click(function () {
    $.get("http://172.20.183.62:3344/CAPI/getData?page=1", function (result) {
      if (result.code === 200) {
        console.log('获取数据成功!')
        $('#serviceData').text(JSON.stringify(result.data))

      }
    });
  })

  $("#btgetData2").click(function () {
    $.get("http://172.20.183.62:3344/CAPI/getData?page=2", function (result) {
      if (result.code === 200) {
        console.log('获取数据成功!')
        $('#serviceData').text(JSON.stringify(result.data))

      }
    });
  })

  $("#btUpdateCache").click(function () {
    var user = JSON.parse(localStorage.getItem('user'))
    $.get("http://172.20.183.62:3344/CAPI/sign?uid=" + user.id, function (result) {
      if (result.code === 200) {
        console.log('签到成功')
      }
    });
  })


  const updatesChannel = new BroadcastChannel('api-updates');
  updatesChannel.addEventListener('message', async (event) => {
    console.log("==================get message")
    const {cacheName, updatedUrl} = event.data.payload;

    // Do something with cacheName and updatedUrl.
    // For example, get the cached content and update
    // the content on the page.
    const cache = await caches.open(cacheName);
    const updatedResponse = await cache.match(updatedUrl);
    const updatedText = await updatedResponse.text();
  });

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