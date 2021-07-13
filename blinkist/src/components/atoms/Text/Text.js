import { Typography } from "@material-ui/core";

function Text ({...props}){
    return(
        <Typography {...props}>{props.text}</Typography>
    );
}
export default Text;