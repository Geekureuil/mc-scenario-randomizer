import vilains from "../data/vilains.json";
import {Grid} from "@mui/material";
import {Vilain} from "../components/Vilain";

export const VilainList = () => {

    return (
        <Grid container spacing={1}>
            {vilains.map(vilain => {
                return (
                    <Grid item key={vilain.id}>
                        <Vilain vilain={vilain}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}