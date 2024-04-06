import  {useTheme} from '../themes/themeContext';

const Button = () => {
    const {toggleTheme} = useTheme();
    return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default Button;