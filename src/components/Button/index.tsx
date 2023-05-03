import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { KeyOfColors, theme } from '../../theme';
import { Text } from '../Text';
import { Typography } from '../Text/token';

export type ButtonType = 'primary' | 'general' | 'ghost';

type ButtonSize = 'medium' | 'large';

type ButtonStatus = 'normal' | 'hover' | 'disabled';

type ButtonHTMLType = 'button' | 'reset' | 'submit' | undefined;

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonType;
  width?: number;
  size?: ButtonSize;
  buttonStyle?: React.CSSProperties;
  disabled?: boolean;
  htmlType?: ButtonHTMLType;
  children: React.ReactNode;
}

type ButtonColorMap = {
  [key in ButtonStatus]: {
    [key in ButtonType]: string;
  };
};

const BUTTON_COLOR: ButtonColorMap = {
  normal: {
    primary: theme.colors.primary,
    ghost: 'transparent',
    general: theme.colors.white,
  },
  hover: {
    primary: theme.colors.primary_press,
    ghost: theme.colors.gray070,
    general: theme.colors.gray040,
  },
  disabled: {
    primary: theme.colors.primary_opacity,
    ghost: theme.colors.gray080,
    general: theme.colors.gray060,
  },
};

const BUTTOON_TEXT_COLOR: { [key in ButtonType]: KeyOfColors } = {
  primary: 'white',
  general: 'gray110',
  ghost: 'white',
};

const BUTTOON_TEXT_SIZE: { [key in ButtonSize]: Typography } = {
  large: 'subhead',
  medium: 'headline',
};

const BUTTON_HEIGHT: { [key in ButtonSize]: string } = {
  large: '54px',
  medium: '46px',
};

export function Button({
  type = 'primary',
  width,
  size = 'medium',
  disabled,
  buttonStyle,
  htmlType,
  children,
  ...rest
}: Props) {
  return (
    <StyledButton
      style={{
        ...buttonStyle,
      }}
      width={width}
      size={size}
      buttontype={type}
      disabled={disabled}
      type={htmlType}
      {...rest}
    >
      <Text color={BUTTOON_TEXT_COLOR[type]} variant={BUTTOON_TEXT_SIZE[size]}>
        {children}
      </Text>
    </StyledButton>
  );
}

const StyledButton = styled('button')<{
  buttontype: ButtonType;
  disabled?: boolean;
  width?: number;
  size: ButtonSize;
}>`
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  font-weight: 700;
  font-size: 16px;

  ${({ width, disabled, size, buttontype }) => {
    return css`
      background: ${BUTTON_COLOR[disabled ? 'disabled' : 'normal'][buttontype]};
      width: ${width ? `${width}px` : '100%'};
      height: ${BUTTON_HEIGHT[size]};
      border: 'none';
      color: ${BUTTOON_TEXT_COLOR[buttontype]};
    `;
  }}
  &:hover {
    background: ${({ buttontype }) => BUTTON_COLOR.hover[buttontype]} !important;
  }
`;
