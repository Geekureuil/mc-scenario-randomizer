import {Outlet, useNavigate} from "react-router-dom";
import {Grid, Paper, MenuList, MenuItem, Box} from "@mui/material";

export const Home = (props: { refresh: () => void }) => {
    const navigate = useNavigate();
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={3} md={2} xl={1}>
                <Paper>
                    <MenuList>
                        <MenuItem onClick={() => navigate("vilain-list")}>Liste Vilains</MenuItem>
                        <MenuItem onClick={() => navigate("modular-list")}>Liste Modular</MenuItem>
                        <MenuItem onClick={() => {
                            props.refresh();
                            navigate("randomizer");
                        }
                        }>Random</MenuItem>
                    </MenuList>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={10} xl={11}>
                <Outlet/>
            </Grid>
        </Grid>
    )
}