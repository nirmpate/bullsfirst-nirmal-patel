import './Button.css';

interface ButtonType {
    variant: 'filled' | 'outline';
    color: 'primary' | 'secondary';
    type: 'link' | 'button',
    linkText: string;
    linkHref?: string;
    click?: (event: any) => {}
}

export const Button = (props: ButtonType) => {
    const { variant, color, type, linkText, linkHref, click } = props;

    let classList = ['button'];
    
    variant === 'filled' ? classList.push('button--filled') : classList.push('button--outline');
    color === 'primary' ? classList.push('button--primary') : classList.push('button--secondary');

    if (type === 'link') {
        return (<a className={ classList.join(" ") } href={ linkHref }> { linkText }</a>);
    } else {
        return (<button className={ classList.join(" ") } onClick={click}> { linkText }</button>);
    }
}