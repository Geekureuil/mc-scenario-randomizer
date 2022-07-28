import {ModularInterface} from "../interfaces/ModularInterface";
import {Card, CardHeader, CardMedia} from "@mui/material";

export const Modular = (props: { modular: ModularInterface }) => {

    return (
        <Card>
            <CardMedia>
                <img src={props.modular.img} style={{maxWidth: "250px"}} alt={props.modular.en}/>
            </CardMedia>
            <CardHeader title={props.modular.en}/>
        </Card>
    )
}