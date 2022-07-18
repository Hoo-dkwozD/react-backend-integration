import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function PokemonCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "1em" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png` }
          alt={ data.name }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { data.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Height: { data.height }<br />
            Weight: { data.weight }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default PokemonCard;
