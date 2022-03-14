# Math Functions

## Interfaces

```ts
interface Point {
  x: number
  y: number
}

interface Rect {
  bottom: number
  left: number
  right: number
  top: number
}
```

---

## containsRect(r1: Rect, r2: Rect): boolean

Check if a rectangle contains other one.

```ts
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

utils.containsRect(rectangle1, rectangle2)  // true
```

---

## degreesAngle(p1: Point, p2: Point): number

Calculate the angle in degrees of a line defined by two points.

```ts
const point1 = {
  x: 200,
  y: 200
}

const point2 = {
  x: 300,
  y: 300
}

utils.degreesAngle(point1, point2)  // 45
```

---

## degreesToRadians(degrees: number): number

Convert degrees to radians.

```ts
utils.degreesToRadians(45)  // Math.PI / 4
```

---

## distance(p1: Point, p2: Point): number

Calculate the distance between two points.

```ts
const point1 = {
  x: 200,
  y: 200
}

const point2 = {
  x: 300,
  y: 200
}

utils.distance(point1, point2)  // 100
```

---

## isPointInside(p: Point, rect: Rect): boolean

Check if a point is inside a rectangle.

```ts
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

utils.isPointInside(point, rectangle1)  // true
utils.isPointInside(point, rectangle2)  //false
```

---

## lerp(a: number, b: number, amount: number): number

Calculate the linear interpolation between two numbers.

```ts
utils.lerp(2, 6, 7)  // 30
```

---

## midpoint(p1: Point, p2: Point): Point

Calculate the midpoint between two points.

```ts
const point1 = {
  x: 200,
  y: 200
}

const point2 = {
  x: 300,
  y: 200
}

utils.midpoint(point1, point2)  // { x: 250, y: 200 })
```

---

## normalizeRatio(value: number, min: number, max: number): number

Normalize the ratio of a number in a range.

```ts
utils.normalizeRatio(0, 0, 100)  // 0
utils.normalizeRatio(50, 0, 100)  // 0.5
utils.normalizeRatio(100, 0, 100)  // 1
```

---

## overlaps(r1: Rect, r2: Rect): boolean

Check if a rectangle overlaps other one.

```ts
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

utils.overlaps(rectangle1, rectangle2)  // true
```

---

## radiansAngle(p1: Point, p2: Point): number

Calculate the angle in radians of a line defined by two points.

```ts
const point1 = {
  x: 200,
  y: 200
}

const point2 = {
  x: 300,
  y: 300
}

utils.radiansAngle(point1, point2)  // 0.7853981633974483
```

---

## radiansToDegrees(radians: number): number

Convert radians to degrees.

```ts
utils.radiansToDegrees(Math.PI / 4)  // 45
```

---

## roundToNearest(value: number, nearest: number): number

Round a number to the nearest multiple of a given value.

```ts
utils.roundToNearest(100, 30)  // 90
utils.roundToNearest(200, 30)  // 210
utils.roundToNearest(200, 40)  // 200
```

---
