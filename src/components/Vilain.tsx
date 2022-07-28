import {VilainInterface} from "../interfaces/VilainInterface";
import {Card, CardHeader, CardMedia} from "@mui/material";

export const Vilain = (props: { vilain: VilainInterface }) => {
    return (
        <Card>
            <CardMedia>
                <img src={props.vilain.img} style={{maxWidth: "250px"}} alt={props.vilain.en}/>
            </CardMedia>
            <CardHeader title={props.vilain.en}/>
        </Card>
    )
}