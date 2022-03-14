export interface Point {
  x: number
  y: number
}

export interface Rect {
  bottom: number
  left: number
  right: number
  top: number
}

export const containsRect = (r1: Rect, r2: Rect): boolean => {
  return r1.left <= r2.left && r1.top <= r2.top && r1.right >= r2.right && r1.bottom >= r2.bottom
}

export const degreesAngle = (p1: Point, p2: Point): number => {
  return (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI
}

export const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180.0
}

export const distance = (p1: Point, p2: Point): number => {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

export const isPointInside = (p: Point, rect: Rect): boolean => {
  return p.x >= rect.left && p.x <= rect.right && p.y >= rect.top && p.y <= rect.bottom
}

export const lerp = (a: number, b: number, amount: number): number => {
  return (1 - amount) * a + amount * b
}

export const midpoint = (p1: Point, p2: Point): Point => {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2
  }
}

export const normalizeRatio = (value: number, min: number, max: number): number => {
  return (value - min) / (max - min)
}

export const overlaps = (r1: Rect, r2: Rect): boolean => {
  return (r1.left < r2.right && r2.left < r1.right) || (r1.top < r2.bottom && r2.top < r1.bottom)
}

export const radiansAngle = (p1: Point, p2: Point): number => {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x)
}

export const radiansToDegrees = (radians: number): number => {
  return (radians * 180) / Math.PI
}

export const roundToNearest = (value: number, nearest: number): number => {
  return Math.round(value / nearest) * nearest
}
