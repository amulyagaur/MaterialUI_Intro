import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CoffeeCard(props) {
  const classes = useStyles();
  const {avatarSrc, title, subtitle, imageSrc} = props;
  return (
    <Card className={classes.root} variant="outlined">
        <CardHeader
        avatar={
          <Avatar src={avatarSrc}/>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon/>
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardContent>
      <CardMedia
        style={{ height: "200px" }}
        image={imageSrc}
      />
      </CardContent>
      <CardActions>
        <Button size="small">Add Friend</Button>
        <Button size="small">Profile</Button>
      </CardActions>
    </Card>
  );
}
