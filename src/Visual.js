function Visual(domElement, width, height) {
  return new Visual.Scene(domElement, width, height);
}

Visual.export = function(moduleNames) {
  // get all module names
  var allNames = [];
  for (var k in Visual) {
    if (Object.hasOwnProperty.call(Visual, k)) {
      allNames.append(k);
    }
  }
  // if no argument is given, then export all modules
  if (typeof moduleNames === 'undefined') {
    moduleNames = allNames;
  }
  // export modules
  moduleNames.forEach(function(name) {
    window[name] = Visual[name];
  });
}