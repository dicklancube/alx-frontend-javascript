// Types for rows stored in our (mock) DB

export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
