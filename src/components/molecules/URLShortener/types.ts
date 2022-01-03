export interface IURLShortenerProps extends React.HTMLAttributes<any> {
  shorten: (url: string) => void;
  loading: boolean;
  error: any;
}

export type FormValues = {
  urlShortener: string;
};
