export function liqVol(p: number): number {
  return 0.001 + (0.0035 - 0.001) * (p / 10);
  //10 es critico 0.001 es el minimo de presion
  //interpolamos linealmente hasta llegar a 0.0035
}

export function vapVol(p: number): number {
  // la presion va bajando linealmente
  return 30 - (30 - 0.0035) * (p / 10);
}
