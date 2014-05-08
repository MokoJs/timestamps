module.exports = function(createdAttr, updatedAttr) {
  createdAttr = createdAttr || 'createdAt';
  updatedAttr = updatedAttr || 'updatedAt';
  return function(Model) {
    Model.attr(createdAttr).attr(updatedAttr);
    Model.on('creating', function*(instance) {
      instance[createdAttr] = new Date();
    });
    Model.on('saving', function*(instance) {
      instance[updatedAttr] = new Date();
    });
  };
};
