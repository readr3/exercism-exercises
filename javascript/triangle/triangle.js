'use strict';

function violatesTriangleInequality(triangle) {
  return triangle.sideA + triangle.sideB <= triangle.sideC ||
         triangle.sideB + triangle.sideC <= triangle.sideA ||
         triangle.sideC + triangle.sideA <= triangle.sideB;
}

function isEquilateral(triangle) {
  return triangle.sideA === triangle.sideB &&
         triangle.sideB === triangle.sideC;
}

function isIsosceles(triangle) {
  return triangle.sideA === triangle.sideB ||
         triangle.sideB === triangle.sideC ||
         triangle.sideC === triangle.sideA;
}

function Triangle(a, b, c) {
  this.sideA = a;
  this.sideB = b;
  this.sideC = c;
}

Triangle.prototype.kind = function () {
  if (violatesTriangleInequality(this)) {
    return 'illegal';
  }
  if (isEquilateral(this)) {
    return 'equilateral';
  }
  if (isIsosceles(this)) {
    return 'isosceles';
  }
  return 'scalene';
};

module.exports = Triangle;