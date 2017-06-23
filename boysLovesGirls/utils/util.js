function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var types;

function queryDB(caller, pathStr, reqData) {

  var respData, error, identity, searchType, index,
    params = pathStr.split("/");
  if (reqData) {
    index = reqData.index;
    delete reqData.index
  }


  wx.request({
    url: getApp().globalData.serverBaseUrl + pathStr,
    data: reqData ? reqData : {},
    header: {},
    method: 'post',
    dataType: '',
    success: function (res) {
      respData = types = res.data
    },
    fail: function (res) {
      error = res
    },
    complete: function (res) {

      if (params.length == 2) {
        caller.setData({ identityResult: respData, identityStatue: error ? error : "ok" })
      }
      if (params.length == 3) {
        var searchTypeResult = params[2];
        if (reqData) {
          caller.data.identityResult.data[index].top = respData.data
        } else {
          getApp().globalData.seachTypeResult = respData;
        }
      }


    }
  })

}

function queryTop(caller, pathStr, reqData) {

  var length = types.data.length, i;
  for (i = 0; i < length; i++) {
    reqData.index = i
    queryDB(caller, pathStr + types.data[i].type, reqData)
  }

}


module.exports = {
  formatTime: formatTime,
  queryDB: queryDB,
  queryTop: queryTop
}
