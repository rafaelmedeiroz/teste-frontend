export class RegionalAverage {
  regional: string;
  average: number;

  constructor(object: any) {
    for (const prop of Object.keys(object)) {
     this[prop] = object[prop];
    }
  }
}
