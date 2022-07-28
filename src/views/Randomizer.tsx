import vilains from "../data/vilains.json";
import modulars from "../data/modular.json";
import {useEffect, useState} from "react";
import {Vilain} from "../components/Vilain";
import {Grid} from "@mui/material";
import {Modular} from "../components/Modular";

export const Randomizer = (props: { key: number }) => {
    const [vilainIndex, setVilainIndex] = useState<number>();
    const [modularIndexes, setModularIndexes] = useState<number[]>([]);

    useEffect(() => {
        randomize();
    }, [props.key])

    const randomize = () => {
        let index = Math.round(Math.random() * vilains.length);
        if (index === vilains.length) {
            index--;
        }
        setVilainIndex(index);

        let modular = JSON.parse(JSON.stringify(vilains[index].modularMandatory));
        for (let i = 0; i < vilains[index].modularRandom; i++) {
            modular = chooseModular(modular);
        }

        setModularIndexes(modular)
    }

    const chooseModular = (modular: number[]) => {
        let found = false;
        while (!found) {
            let modularIndex = Math.round(Math.random() * modulars.length);
            if (modularIndex === modulars.length) {
                modularIndex--;
            }

            if (!modular.find(element => element === modularIndex)) {
                modular.push(modularIndex);
                found = true;
            }
        }
        return modular;
    }

    if (!vilainIndex) {
        return null;
    }

    return (
        <Grid container spacing={1}>
            <Grid item key={"vilain"}> <Vilain vilain={vilains[vilainIndex]}/></Grid>
            {modularIndexes.map(index => {
                return (
                    <Grid item key={index}>
                        <Modular modular={modulars[index]}/>
                    </Grid>
                )
            })}
        </Grid>
    )

}