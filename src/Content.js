import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';

function Content(){
    var i=1;
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <CoffeeCard avatarSrc={"https://i.pravatar.cc/300?img="+i} title={"Miley Cirus"} subtitle={"28 September, 1998"} imageSrc={"https://i.pravatar.cc/300?img="+(i++)}/>
            </Grid>
        </Grid>
    )
}

export default Content;