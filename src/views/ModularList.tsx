import modulars from "../data/modular.json";
import {Grid} from "@mui/material";
import {Modular} from "../components/Modular";

export const ModularList = () => {

    return (
        <Grid container spacing={1}>
            {modulars.map(modular => {
                return (
                    <Grid item key={modular.id}>
                        <Modular modular={modular}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}