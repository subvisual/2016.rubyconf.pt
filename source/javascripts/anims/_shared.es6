const Anim = {
  reverseForEach: function(array, callback, scope) {
    for (var i = array.length - 1, x = 0; i >= 0; --i, ++x) {
      callback.call(scope, array[i], x);
    }
  },

  hideShapes: function(shapes, extraOptions = null) {
    Velocity(shapes, { scale: 0 }, { duration: 0 });
    if (extraOptions) {
      Velocity(shapes, extraOptions, { duration: 0 });
    }
  },

  hidePaths: function(paths) {
    Anim.reverseForEach(paths, (path, index) => {
      const length = path.getTotalLength();
      Velocity(path, {
        'stroke-dasharray': length + 1,
        'stroke-dashoffset': length + 2,
      }, { duration: 0 });
    });
  },

  revealPaths: function(paths, optionsOrCallback) {
    Anim.reverseForEach(paths, (path, index) => {
      let options = optionsOrCallback;
      if (typeof optionsOrCallback === 'function') {
        options = optionsOrCallback(path, index);
      }
      Velocity(
        path,
        { 'stroke-dashoffset': [0, path.getTotalLength() + 2] },
        options
      );
    })
  },

  revealShapes: function(shapes, optionsOrCallback) {
    Anim.reverseForEach(shapes, (shape, index) => {
      let options = optionsOrCallback;
      if (typeof optionsOrCallback === 'function') {
        options = optionsOrCallback(shape, index);
      }
      Velocity(
        shape,
        { scale: 1 },
        options
      );
    });
  },
};
