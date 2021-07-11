export type Modify<T, R> = Omit<T, keyof R> & R;
export type EventType = { target: { name: string; value: any } };
export interface BasicControlProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: EventType) => void;
}
export interface EmployeeType {
  id?: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  departmentId: number;
  hireDate: Date;
  isPermanent: boolean;
  department?: string;
}
