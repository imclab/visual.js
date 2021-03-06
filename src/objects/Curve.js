;(function() {

var toVector3 = Visual.Util.toVector3;

Visual.Curve = function(scene, opts) {
  opts = opts || {};

  this._points = opts.points || [];

  Visual.Primitive.call(this, scene, opts);

  this.linewidth = opts.linewidth || 1;
};

Visual.Curve.prototype = Object.create(Visual.Primitive.prototype, {
  constructor: {
    value: Visual.Curve
  },
  update: {
    value: function() {
      // the curve does not need to update its orientation.
    }
  },
  _buildMesh: {
    value: function() {
      var points = this._points;
      for (var i = 0; i < points.length; i++) {
        points[i] = toVector3(points[i]);
      }
      var geometry = new THREE.Geometry();
      geometry.vertices = points;
      var material = new THREE.LineBasicMaterial();
      var mesh = new THREE.Line(geometry, material);
      return mesh;
    }
  },
  append: {
    value: function(point) {
      point = toVector3(point);
      this.mesh.geometry.vertices.push(point)
    }
  },
  linewidth: {
    get: function() {
      return this.mesh.material.linewidth;
    },
    set: function(v) {
      this.mesh.material.linewidth = v;
    }
  },
});

Visual.registerObject('curve', Visual.Curve);

})();
