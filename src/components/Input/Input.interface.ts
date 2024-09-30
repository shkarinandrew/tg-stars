export interface IInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  classNameLabel?: string;
}
