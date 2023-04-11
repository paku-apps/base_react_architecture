import styled from 'styled-components';

const AppButton = styled.button`
    background: white;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
    border-radius: 15px;
`;

const Button = () => {
    return <AppButton>Boton con estilo</AppButton>;
};

export default Button;