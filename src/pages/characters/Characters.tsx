import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DynamicAccordion, {
  ItemAccordionI,
} from '../../components/DynamicAccordion/DynamicAccordion';
import { ICharacters } from '../../store/modules/characters/reducer';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ItemAccordionI[]>([]);

  const charactersRedux: ICharacters = useSelector(
    (state: any) => state.characters
  );

  useEffect(() => {
    if (charactersRedux.result.length) {
      const parse: ItemAccordionI[] = charactersRedux.result.map(
        (item: any, index: number) => {
          const temp: ItemAccordionI = {
            id: index,
            text: item,
            title: item,
          };
          return temp;
        }
      );
      setCharacters(parse);
    }
  }, [charactersRedux]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Personagens
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DynamicAccordion items={characters} />
      </Grid>
    </Grid>
  );
};

export default Characters;
