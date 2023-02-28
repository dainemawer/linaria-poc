import { styled } from '@linaria/react';
import { useContext } from 'react';
import { SiteThemeContext } from 'package-components/context';
import { IButtonProps, IStyleButtonProps } from 'package-types/horizon';
import Icon from '../Icon/index';

/**
 * Similiar to Styled Components, this component creates a button element and styles it.
 * Every styled function allows you to pass props to be used to manage css values dynamically.
 * 
 * This component is also made type safe by passing through the IStyleButtonProps interface.
 * This gives us the ability to make sure that we dont pass values that should not be used.
 * 
 * THIS IS NOT A REACT COMPONENT, it is a function that returns a React component.
 * 
 * @param {string} backgroundColor - The background color of the button.
 * @param {string} color - The text color of the button.
 * @param {string} border - The border color of the button.
 */
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

/**
 * Using Linaria, the Secondary Button below is how we extend the PrimaryButton.
 * This can be used to handle different treatments of the same component without
 * the need to override all the CSS of the PrimaryButton.
 * 
 * It can still be passed props and still be made type safe.
 * 
 * @param {string} backgroundColor - The background color of the button.
 */
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

/**
 * Everything in CSS-in-JS looks like a component.
 * In this case, we are creating a component that will wrap the Icon and ButtonText.
 * 
 */
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
    
    /**
     * Here you will see the backgroundColor prop being passed to the PrimaryButton.
     * It uses colors.brand which is imported from SiteThemeContext - this value
     * can be overridden by each engineer in the project-{one|two|three}.config.ts file.
     * 
     * This means that changing theme values for each site becomes less about changing CSS
     * and more about changing a configuration.
     */
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