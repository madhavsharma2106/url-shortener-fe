import { ITextVariantStyles, TextVariants } from './types';

export const TextVariantStyles: ITextVariantStyles = {
  [TextVariants.HERO]: {
    tag: 'h1',
    size: '5rem',
    lineHeight: '1',
    device: {
      mobile: '2.3rem',
    },
  },
  [TextVariants.HERO_SUB_TEXT]: {
    tag: 'p',
    size: '1.4rem',
    device: {
      mobile: '1.2rem',
    },
  },
  [TextVariants.HEADING_ONE]: {
    tag: 'h1',
    size: '2.7rem',
    device: {
      mobile: '1.8rem',
    },
  },
  [TextVariants.HEADING_TWO]: {
    tag: 'h2',
    size: '1.4rem',
  },
  [TextVariants.HEADING_THREE]: {
    tag: 'h3',
  },
  [TextVariants.REGULAR_ONE]: {
    tag: 'p',
  },
};
