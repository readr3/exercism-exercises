'use strict';

function Triangle(a, b, c) {
  if (sidesCantMakeTriangle(a, b, c)) {
    throw new Error('Illegal triangle');
  }
  this.sideA = a;
  this.sideB = b;
  this.sideC = c;
}

Triangle.prototype.kind = function () {
  if (isEquilateral(this)) {
    return 'equilateral';
  } else if (isIsoceles(this)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

function isEquilateral(triangle) {
  return (triangle.sideA === triangle.sideB
       && triangle.sideB === triangle.sideC);
}

function isIsoceles(triangle) {
  return (triangle.sideA == triangle.sideB
       || triangle.sideB == triangle.sideC
       || triangle.sideC == triangle.sideA);
}

function sidesCantMakeTriangle(a, b, c) {
  return (a + b + c === 0
       || a < 0
       || b < 0
       || c < 0
       || a + b <= c
       || b + c <= a
       || c + a <= b);
}

module.exports = Triangle;