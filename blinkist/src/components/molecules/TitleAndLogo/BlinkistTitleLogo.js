import Image from '../../atoms/Image/Image'
import {Box} from "@material-ui/core"
// const logo = require('./BlinkistLogo.png');
import logo from "../../../images/BlinkistLogo.png"

function BlinkistTitleLogo() {
  const label = "Blinkist";
  return (
    <Box display="flex" alignItems="center" className="ui__header__logo">
       <Image style={{maxWidth:140,maxHeight:150}}
       src={logo} alt="Blinkist"></Image>
    </Box>
  );

}

export default BlinkistTitleLogo;
