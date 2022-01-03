export enum TextVariants {
  HEADING_THREE = 'HEADING_THREE',
  HEADING_TWO = 'HEADING_TWO',
  HEADING_ONE = 'HEADING_ONE',
  REGULAR_ONE = 'REGULAR_ONE',
  HERO = 'HERO',
  HERO_SUB_TEXT = 'HERO_SUB_TEXT',
}

export interface ITextProps extends React.HTMLAttributes<any> {
  variant: TextVariants;
  as?: React.ElementType;
  size?: string;
  lineHeight?: string;
  device?: {
    mobile: string;
  };
  italic?: boolean;
}

export type ITextVariantStyles = {
  [key in TextVariants]: {
    tag: React.ElementType;
    size?: string;
    lineHeight?: string;
    device?: {
      mobile: string;
    };
  };
};
