export interface IImageProps extends React.HTMLAttributes<any> {
  isLink?: boolean;
  to?: string;
  src: string;
  alt: string;
}
