import { styled } from '@linaria/react';
import { useContext } from 'react';
import { SiteThemeContext } from 'package-context';
import { IButtonProps, IStyleButtonProps } from 'package-types/horizon';
import Icon from '../Icon/index';

const PrimaryButton = styled.button<IStyleButtonProps>`
    background-color: ${(props) => props.backgroundColor};
    cursor: pointer;
    color: ${(props) => props.color || '#fff'};
    border-color: ${(props) => props.border || 'transparent'};
    border-style: solid;
    font-size: 0.75rem; // 12px
    padding: 0.8125rem 2.25rem; // 13px 36px
    text-transform: uppercase;

    &:hover,
    &:focus {
        background-color: #fff;
        color: ${(props) => props.backgroundColor};
        border-color: ${(props) => props.backgroundColor};
        transition: all 0.2s ease-in-out;
    }

    &:disabled {
        background-color: #E6E6E6;
        border-color: transparent;
        color: #525252;
        cursor: not-allowed;
    }
`;

const SecondaryButton = styled(PrimaryButton)<IStyleButtonProps>`
    background-color: #fff;

    &:hover,
    &:focus {
        background-color: ${(props) => props.backgroundColor};
        color: #fff;
        border-color: ${(props) => props.backgroundColor};
    }

    &:disabled {
        background-color: #fff;
        color: #525252;
        border-color: #E6E6E6;
    }
`;

const IconWrapper = styled.span`
    position: relative;
`;

const ButtonText = styled.span`
    margin-left: 1.5rem;
`;

const Button: React.FC<IButtonProps> = (props) => {
    const { children, disabled, primary, secondary, icon } = props
    const { colors } = useContext(SiteThemeContext);

    const maybeWithIcon = icon ? (
        <IconWrapper>
            <Icon />
            <ButtonText>{children}</ButtonText>
        </IconWrapper>
    ) : (
        <>{children}</>
    )
    
    if (primary) {
        return (
            <PrimaryButton backgroundColor={colors.brand} type="button" disabled={disabled}>
                {maybeWithIcon}
            </PrimaryButton>
        );
    }

    if (secondary) {
        return (
            <SecondaryButton backgroundColor={colors.brand} border={colors.brand} color={colors.brand} type="button" disabled={disabled}>
                {maybeWithIcon}
            </SecondaryButton>
        );
    }

    return null;
}

export default Button