function __probeA(value) { log(value); return value; }

class C { get value(){return this._v;} set value(v){this._v=v;} }

function __probeB(value) { log(value); return value; }
