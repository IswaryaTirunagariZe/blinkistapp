import { Typography } from "@material-ui/core";

function Label ({...props}){
    return(
        <Typography {...props}>{props.label}</Typography>
    );
}
export default Label;