import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

import { Typography, typography as typographyObject } from './token';
import { KeyOfColors, theme } from '../../theme';

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'bolder' | 'lighter';
type TextTag = 'span' | 'strong' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: TextTag;
  size?: number;
  weight?: FontWeight;
  color?: KeyOfColors;
  variant?: Typography;
  children: ReactNode;
}

export function Text({
  size = 16,
  weight = 'normal',
  color = 'white',
  children,
  variant,
  as = 'span',
  ...rest
}: TextProps) {
  return (
    <StyledText size={size} weight={weight} color={color} variant={variant} as={as} {...rest}>
      {children}
    </StyledText>
  );
}

type StyleProps = Pick<TextProps, 'size' | 'weight' | 'color' | 'variant'>;

const StyledText = styled('span')<StyleProps>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => theme.colors[color ?? 'white']};
  letter-spacing: -0.6px;
  line-height: 100%;

  ${({ variant }) => (variant == null ? '' : typographyObject[variant])}
`;
