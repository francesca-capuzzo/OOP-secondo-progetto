//

//AB = sqrt(xb-xa)^2 + (yb-ya)^2 --> distanza nel piano cartesiano tra A e B

class MathC{

    static calculateDistance(A, B){
        const xDif = B.x - A.x;                                 //this.x    this.y
        const xDif2 = xDif * xDif;
        const yDif = B.y - A.y;
        const yDif2 = yDif * yDif;
        const sumDif2 = xDif2 + yDif2;
        const sqrtsumDif2 = Math.sqrt(sumDif2);
        return sqrtsumDif2;

        //in una riga:
        //return Math.sqrt(Math.pow((B.x - A.x), 2) + (Math.pow((B.y - A.y), 2)));
    }

    static medianPoint(A, B){
        // const xM = (A.x + B.x)/2;
        // const yM = (A.y + B.y)/2;
        // const pointM = new Point(xM, yM);
        // return pointM;

        return new Point((A.x + B.x)/2, (A.y + B.y)/2);
    }

    static distanceFromOrigin(P){
        const origin = new Point(0,0);
        return this.calculateDistance(origin, P);
    }



    static nearestPoint(startingPoint, ...points){
        let lowestPoint = startingPoint;
        let lowestDistance = +Infinity;
        for (let i = 0; i < points.length; i++) {
            const element = points[i];
            let currentDistance = this.calculateDistance(element, startingPoint);
            if (currentDistance < lowestDistance) {
                lowestDistance = currentDistance; 
                lowestPoint = element;
            }
        }
        return lowestPoint;


    //     let nearest = points[0];

    //     for (let i = 1; i < points.length; i++) {
    //         const point = points[i];
    //         if (this.calculateDistance(startingPoint, point) < this.calculateDistance(startingPoint, nearest)) {
    //             nearest = point;
    //         }
    //     }
    //     return nearest;
    // }


//     return points.reduce((p, c) => this.calculateDistance(startingPoint, p) < this.calculateDistance(startingPoint, c) ? p : c);
    }
}