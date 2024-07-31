import { sqrt, getNearestTick } from "./sqrt";

export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

  //time between deployment and checking if verification was seuccessful
export const deployment_wait_time = 20_000;

export { sqrt, getNearestTick };
