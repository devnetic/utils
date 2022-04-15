import test from 'ava'

import * as utils from './../src'

test('should check if a rectangle is inside another rectangle', t => {
  const rectangle1 = {
    bottom: 260,
    left: 100,
    right: 280,
    top: 100
  }

  const rectangle2 = {
    bottom: 160,
    left: 100,
    right: 180,
    top: 100
  }

  t.true(utils.containsRect(rectangle1, rectangle2))
})

test('should calculate the degress angle of a line defined by two points', t => {
  const point1 = {
    x: 200,
    y: 200
  }

  const point2 = {
    x: 300,
    y: 300
  }

  t.is(utils.degreesAngle(point1, point2), 45)
})

test('should convert degrees to radians', t => {
  t.is(utils.degreesToRadians(45), Math.PI / 4)
})

test('should calculate the distance between two points', t => {
  const point1 = {
    x: 200,
    y: 200
  }

  const point2 = {
    x: 300,
    y: 200
  }

  t.is(utils.distance(point1, point2), 100)
})

test('should check if a point is inside a rectangle', t => {
  const point = {
    x: 200,
    y: 200
  }

  const rectangle1 = {
    bottom: 260,
    left: 100,
    right: 280,
    top: 100
  }

  const rectangle2 = {
    bottom: 160,
    left: 100,
    right: 180,
    top: 100
  }

  t.true(utils.isPointInside(point, rectangle1))
  t.false(utils.isPointInside(point, rectangle2))
})

test('should calculate the linear interpolation between two numbers', t => {
  t.is(utils.lerp(2, 6, 7), 30)
})

test('should calculate the midpoint between two points', t => {
  const point1 = {
    x: 200,
    y: 200
  }

  const point2 = {
    x: 300,
    y: 200
  }

  t.deepEqual(utils.midpoint(point1, point2), { x: 250, y: 200 })
})

test('should normalize the ratio of a number in a range', t => {
  t.is(utils.normalizeRatio(0, 0, 100), 0)
  t.is(utils.normalizeRatio(50, 0, 100), 0.5)
  t.is(utils.normalizeRatio(100, 0, 100), 1)
})

test('should check if a rectangle overlaps another rectangle', t => {
  const rectangle1 = {
    bottom: 260,
    left: 100,
    right: 280,
    top: 100
  }

  const rectangle2 = {
    bottom: 160,
    left: 100,
    right: 180,
    top: 100
  }

  const rectangle3 = {
    bottom: 300,
    left: 100,
    right: 300,
    top: 100
  }

  const rectangle4 = {
    bottom: 560,
    left: 500,
    right: 700,
    top: 500
  }

  t.true(utils.overlaps(rectangle1, rectangle2))
  t.false(utils.overlaps(rectangle3, rectangle4))
})

test('should calculate the radians angle of a line defined by two points', t => {
  const point1 = {
    x: 200,
    y: 200
  }

  const point2 = {
    x: 300,
    y: 300
  }

  t.is(utils.radiansAngle(point1, point2), 0.7853981633974483)
})

test('should convert radians to degrees', t => {
  t.is(utils.radiansToDegrees(Math.PI / 4), 45)
})

test('should round a number to the nearest multiple of another number', t => {
  t.is(utils.roundToNearest(100, 30), 90)
  t.is(utils.roundToNearest(200, 30), 210)
  t.is(utils.roundToNearest(200, 40), 200)
})
