
#!/usr/bin/env node
"use strict";
let util = require('util');
let Shape = require('../index.js');

console.log("Calculando área");

try {

  let arg = process.argv[2] || '{"width":9, "height":5}';
  let obj = JSON.parse(arg);
  let type = process.argv[3] || 'Triangle';
  let type2 = type.toLowerCase();
  let req = require('@alu0100897975/ull-shape-' + type2 + '-fernando-jimmy');
  let t = new Shape(obj, type);
  let s = t.getArea();
  console.log('El área es: ' + s);
}
catch (e) {
  console.log(e.message);
}
