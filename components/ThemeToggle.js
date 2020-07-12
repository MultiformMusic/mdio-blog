import Toggle from "react-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const ThemeToggle = ({onChange}) => 
        <label>
            <Toggle
                icons={{
                checked: <FontAwesomeIcon inverse icon="moon"/>,
                unchecked: <FontAwesomeIcon inverse icon="sun"/>,
                }}
                onChange={onChange} 
                
                className="day-night-toggle"    
            />
        </label>
 

 export default ThemeToggle;