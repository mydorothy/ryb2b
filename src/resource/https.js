/**
 * Created by 呵呵哒 on 2018/3/22.
 */

function Ajax() {
}

Ajax.prototype.getIndexBanner = function(that) {
  return that.$http.jsonp('http://datainfo.duapp.com/shopdata/getBanner.php')
}


export var https = new Ajax()
