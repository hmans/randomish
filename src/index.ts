const { random, sin, cos, acos, sqrt, cbrt, PI } = Math

/* Export good old Math.random */
export { random }

/**
 * Returns a random number between 0 and the specified maximum (exclusive.)
 *
 * @param max Maximum value (exclusive) of the generated number.
 */
export const number = (max: number = 1) => random() * max

export const upTo = number

export const between = (min: number, max: number) => min + number(max - min)

export const plusMinus = (a: number) => between(-a, +a)

export const power = (exponent = 2) => Math.pow(number(), exponent)

export const angle = () => number(2 * PI)

export const onCircle = (radius = 1) => {
  const theta = angle()
  const x = radius * Math.cos(theta)
  const y = radius * Math.sin(theta)

  return { x, y }
}

export const insideCircle = (radius = 1) => {
  const theta = angle()
  const r2 = sqrt(number()) * radius

  const x = r2 * cos(theta)
  const y = r2 * sin(theta)

  return { x, y }
}

/* via: https://karthikkaranth.me/blog/generating-random-points-in-a-sphere/ <3 */
export const insideSphere = (radius = 1) => {
  const u = random()
  const v = random()

  const theta = u * 2 * Math.PI
  const phi = acos(2 * v - 1)
  const r = cbrt(random()) * radius

  const sinTheta = sin(theta)
  const cosTheta = cos(theta)
  const sinPhi = sin(phi)
  const cosPhi = cos(phi)

  const x = r * sinPhi * cosTheta
  const y = r * sinPhi * sinTheta
  const z = r * cosPhi

  return { x, y, z }
}

export const chance = (probability = 0.5) => Math.random() < probability
