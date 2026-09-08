const __probeStart = 123;

function f(x:string):string;
function f(x:number):number;
function f(x:unknown){return x;}

const __probeEnd = 456;
