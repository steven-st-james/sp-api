var validator = require(__dirname + '/../validator');



module.exports = {
  options: {
    listId: {
      required: true,
      assert: validator.coercePositiveInteger
    },
    createdFrom: 1,
    columns: {
      required: false,
      assert: validator.assertScalarHash
    }
  },
  generator: function(options){
    var subnode, key;
    var params = {
      'LIST_ID': options.listId
    }
    if(typeof options.columns !== 'undefinded') {
      subnode = [];
      for (key in options.columns) {
        subnode.push({
          NAME: key,
          VALUE: options.columns[key]
        });
      }
      params["COLUMNS"] = subnode;
    }
    return params;
  },
  result: {}
};
