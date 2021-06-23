import './Button.css';

export interface ButtonType {
    variant: 'filled' | 'outline';
    color: 'primary' | 'secondary';
    
    /** Link or Button Element */
    type: 'link' | 'button',
    children?: string;

    /** Href URL */
    linkHref?: string;

    /** Simple Click Handler */
    onClick?: (event: any) => {}
}

export const Button = (props: ButtonType) => {
    const { variant, color, type, children, linkHref, onClick } = props;

    let classList = ['button'];
    
    variant === 'filled' ? classList.push('button--filled') : classList.push('button--outline');
    color === 'primary' ? classList.push('button--primary') : classList.push('button--secondary');

    if (type === 'link') {
        return (<a className={ classList.join(" ") } href={ linkHref }> { children }</a>);
    } else {
        return (<button className={ classList.join(" ") } onClick={onClick}> { children }</button>);
    }
}