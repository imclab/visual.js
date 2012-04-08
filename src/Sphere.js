Visual.Sphere = function(scene, opts) {
  opts = opts || {};
  Visual.Primitive.call(this, scene, opts);

  this._radius = opts.radius || 1;

  this._buildMesh();
};

Visual.Sphere.prototype = new Visual.Primitive();
Visual.Sphere.prototype.constructor = Visual.Sphere;

Visual.Sphere.prototype._buildMesh = function() {
  var geometry = new THREE.SphereGeometry(this.radius, 24, 24);
  var material = new THREE.MeshLambertMaterial({ color: this.color });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position = this.pos;
  if (this.mesh) {
    this.scene.remove(this);
    this.mesh = mesh;
    this.scene.add(this);
  } else {
    this.mesh = mesh;
  }
};

Object.defineProperties(Visual.Sphere.prototype, {
  radius: {
    get: function() { 
      return this._radius; 
    },
    set: function(v) { 
      this._radius = v;
      this._buildMesh();
    }
  }
});

Visual.Scene.registerObject('sphere', Visual.Sphere);