import env from '../../config/serverConfig';

type ParsedMesearument = { distance: number; time: number };
type RawMesearument = {
  distance: string;
  time: string;
};

export async function getMeasurement(): Promise<RawMesearument | undefined> {
  const errMessage = 'failed to measure, try again';
  // flag
  let isValidMeasurement: boolean = false;

  if (!env.api || !env.token) {
    throw new Error('measurement unavailable');
  }
  while (!isValidMeasurement) {
    try {
      const measurement = await fetch(`${env.api}/v1/s1/e1/resources/measurement`, {
        headers: {
          'API-KEY': env.token,
          'Content-Type': 'application/json',
        },
      });
      const m = await measurement.json();

      const { distance, time }: RawMesearument = m;

      // si obtenemos datos cortamos el bucle
      if (distance !== errMessage || time !== errMessage) {
        isValidMeasurement = true;
        return { distance, time };
      }
    } catch (e) {
      console.log(e);
      throw new Error(errMessage);
    }
  }
}

export function calculateSpeed({ distance, time }: ParsedMesearument): number {
  return Math.round(distance / time);
}

export async function getSolution({ speed }: { speed: number }) {
  try {
    if (!env.api || !env.token) {
      throw new Error('measurement unavailable');
    }
    const res = await fetch(`${env.api}/v1/s1/e1/solution`, {
      method: 'POST',
      headers: { 'API-KEY': env.token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ speed }),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('something went wrong trying to send solution');
  }
}
