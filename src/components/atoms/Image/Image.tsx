/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom';
import { Img } from './styles';
import { IImageProps } from './types';

export const Image = (props: IImageProps) => {
  const { to, ...rest } = props;
  const navigate = useNavigate();

  const onLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    to && navigate(to);
  };

  return <Img onClick={onLinkClick} {...rest} />;
};
