
const pointA = new Point(3, 5);

const pointB = new Point(6, 1);

const origin = new Point(0,0);



const distance = MathC.calculateDistance(pointA, pointB);
console.log(distance);

const median = MathC.medianPoint(pointA, pointB);
console.log(median);

const distanceOrigin = MathC.distanceFromOrigin(pointB);
console.log(distanceOrigin);

const distanceOrigin2 = MathC.distanceFromOrigin(pointA);
console.log(distanceOrigin2);

const nearest = MathC.nearestPoint(origin, new Point(3, 6), new Point(15, 5), new Point(0, 1));
console.log(nearest);


const distanceFromA = pointA.distanceFrom(pointB);


const distanceFromOrigin = pointA.distanceFromOrigin();

