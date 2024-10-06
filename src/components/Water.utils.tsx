import { State } from "../interfaces";

const steps: string[] = [];
const listSteps: State[] = [{ bucket1: 0, bucket2: 0, steps: [] }];
const visited = new Set<string>();

export const mcdItems = (a: number, b: number): number => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };


export const waterBucketChallenge = (x: number, y: number, z: number): string[] => {
    if (z % mcdItems(x, y) !== 0) {
      steps.push(`No solution.`);
      return steps;
    }
  
    while (listSteps.length > 0) {
      const { bucket1, bucket2, steps } = listSteps.shift()!;
  
      if (bucket1 === z || bucket2 === z) {
        return [...steps, `Solved`];
      }
  
      const currentState = `${bucket1},${bucket2}`;
      if (visited.has(currentState)) continue;
      visited.add(currentState);
  
      listSteps.push({
        bucket1: x,
        bucket2,
        steps: [
          ...steps,
          `Bucket X: ${x} - Bucket Y: ${bucket2} - Explanation: Fill bucket X`,
        ],
      });
  
      listSteps.push({
        bucket1,
        bucket2: y,
        steps: [
          ...steps,
          `Bucket X: ${bucket1} - Bucket Y: ${y} - Explanation: Fill bucket y`,
        ],
      });
  
      listSteps.push({
        bucket1: 0,
        bucket2,
        steps: [
          ...steps,
          `Bucket X: ${0} - Bucket Y: ${bucket2} - Explanation: Empty bucket X`,
        ],
      });
  
      listSteps.push({
        bucket1,
        bucket2: 0,
        steps: [
          ...steps,
          `Bucket X: ${bucket1} - Bucket Y: ${0} - Explanation: Empty bucket Y`,
        ],
      });
  
      const transferToY = Math.min(bucket1, y - bucket2);
      listSteps.push({
        bucket1: bucket1 - transferToY,
        bucket2: bucket2 + transferToY,
        steps: [
          ...steps,
          `Bucket X: ${bucket1 - transferToY} - Bucket Y: ${
            bucket2 + transferToY
          } - Explanation: Transfer from bucket x to bucket y.`,
        ],
      });
  
      const transferToX = Math.min(bucket2, x - bucket1);
      listSteps.push({
        bucket1: bucket1 + transferToX,
        bucket2: bucket2 - transferToX,
        steps: [
          ...steps,
          `Bucket X: ${bucket1 + transferToX} - Bucket Y: ${
            bucket2 - transferToX
          } - Transfer from bucket y to bucket x.`,
        ],
      });
    }
  
    return steps;
  };