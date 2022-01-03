import { ShortenedLinkCard as ShortenedLinkCardStyles } from './styles';
import { IShortenedLinkCardProps } from './types';
import {
  Button,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
  Text,
  TextVariants,
} from '../../atoms';
import { useTimeoutState } from '../../../utils';

export const ShortenedLinkCard = (props: IShortenedLinkCardProps) => {
  const { shortenedLink, originalLink, ...rest } = props;

  const [copyButton, setCopyButton] = useTimeoutState<string>('Copy');

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(shortenedLink);
    setCopyButton('Copied!', { timeout: 1000 });
  };

  return (
    <ShortenedLinkCardStyles {...rest}>
      <Text className="original-link" variant={TextVariants.REGULAR_ONE}>
        {originalLink}
      </Text>
      <Text className="short-link" variant={TextVariants.REGULAR_ONE}>
        {shortenedLink}
      </Text>
      <Button
        variant={
          copyButton === 'Copy'
            ? ButtonVariants.PRIMARY
            : ButtonVariants.SECONDARY
        }
        size={ButtonSizes.REGULAR}
        buttonType={ButtonTypes.REGULAR}
        onClick={copyToClipBoard}
      >
        {copyButton}
      </Button>
    </ShortenedLinkCardStyles>
  );
};
