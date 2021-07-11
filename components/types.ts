export type Modify<T, R> = Omit<T, keyof R> & R;
export type EventType = { target: { name: string; value: any } };
export interface BasicControlProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: EventType) => void;
}
