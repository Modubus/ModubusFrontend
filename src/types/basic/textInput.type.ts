export type textInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void; // 고친 부분
  className?: string;
  type?: string;
  readOnly?: boolean;
};
