import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';

import { marvel } from '../../services';

import DynamicAccordion, {
  ItemAccordionI,
} from '../../components/DynamicAccordion/DynamicAccordion';
import { ICharacters } from '../../store/modules/characters/reducer';
import {
  clearComic,
  createComic,
} from '../../store/modules/comics/comicsSlice';

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState<ItemAccordionI[]>([]);

  const comicRedux = useSelector((state: any) => state.comic);
  const charactersRedux = useSelector((state: any) => state.characters);

  useEffect(() => {
    dispatch(clearComic());
  }, []);

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
          Personagens - {comicRedux}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DynamicAccordion items={characters} />
      </Grid>
    </Grid>
  );
};

export default Characters;
