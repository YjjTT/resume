window.Model = function(options) {
  let resourceName = options.resourceName;
  return {
    init: function() {
      var APP_ID = "F3UOvz2tclcfjJasNqv6efzK-gzGzoHsz";
      var APP_KEY = "P8a9ROPzmGFBVTQwAqilctVe";
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function() {
      var query = new AV.Query(resourceName);
      return query.find(); // Promise 对象
    },
    save: function(object) {
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object);
    }
  };
};
