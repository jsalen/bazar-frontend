import { HttpErrorResponse } from './types';

export async function getItems<T>(searchTerm?: string): Promise<T[]> {
  try {
    const res = await fetch(
      `${process.env.BAZAR_API}/items${searchTerm ? `?q=${searchTerm}` : ''}`,
    );
    const data: T[] = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getItemById<T>(id: string): Promise<T | null> {
  try {
    console.log(process.env.BAZAR_API);
    const res = await fetch(`${process.env.BAZAR_API}/items/${id}`);
    const data: T = await res.json();

    if ((data as HttpErrorResponse).error) {
      throw new Error((data as HttpErrorResponse).message);
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
