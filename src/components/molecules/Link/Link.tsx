import { useNavigate } from 'react-router-dom';
import { ILinkProps } from '.';
import { Text } from '../../atoms';
import { Link as LinkCss } from './styles';

export const Link = (props: ILinkProps) => {
  const { to, children, ...rest } = props;
  const navigate = useNavigate();

  const onLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <Text as={LinkCss} onClick={onLinkClick} {...rest}>
      {children}
    </Text>
  );
};
