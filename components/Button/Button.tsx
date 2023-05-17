'use client'
import styles from './Button.module.css';
import './Button.css';

const getContrast = (hexcolor: string) => {

	// If a leading # is provided, remove it
	if (hexcolor?.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// Convert to RGB value
	var r = parseInt(hexcolor?.substr(0,2),16);
	var g = parseInt(hexcolor?.substr(2,2),16);
	var b = parseInt(hexcolor?.substr(4,2),16);

	// Get YIQ ratio
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';

};

export default function Button(props: any) {
    let theme = "dark";

    function createRipple(event: any) {
        const button = event.currentTarget;
        const buttonRect = button.getBoundingClientRect();
      
        const circle = document.createElement("span");
        const diameter = Math.max(buttonRect.width, buttonRect.height);
        // const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
      
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - buttonRect.left - radius}px`;
        // circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - buttonRect.top - radius}px`;
        // circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple_cjh123");
        if (theme === "light") {
            circle.classList.add("light_cjh123");
        }
      
        const ripple = button.getElementsByClassName("ripple_cjh123")[0];
      
        if (ripple) {
          ripple.remove();
        }
      
        button.appendChild(circle);
      }

  let buttonClasses = styles.button;
  let sxs: any = {};
  theme === "light" ? buttonClasses += ` ${styles.light}` : ''
  props.size === 'sm' ? buttonClasses += ` ${styles.small}`: ''
  if (props.variant === 'outlined') {
    buttonClasses += ` ${styles.outlined}`
    sxs['borderColor'] = props.color;
    sxs['color'] = props.color;
  } else if (props.variant === 'contained') {
    buttonClasses += ` ${styles.contained}`
    sxs['backgroundColor'] = props.color;
    sxs['color'] = getContrast(sxs['backgroundColor'])
  } else if (props.variant === 'text') { 
    buttonClasses += ` ${styles.text}`
    sxs['color'] = props.color;
  }

  const handleClick = (e: any) => {
    createRipple(e);
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <button disabled={props.disabled} style={{...sxs, ...props.sxc}} className={`${buttonClasses} ${props.className}`} type="button" onClick={handleClick}>
      {/* {props.label} */}
      {props.children}
    </button>
  );
}