import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import WineTable from '../../components/wine/table/WineTable';
import WineListItem from '../../components/wine/WineListItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getWines } from '../../services/wines/WineService';

function WineContainer() {
  const state = useAppSelector((state) => state);
  const wineList = getWines(state);
  const [txtFilter, setTxtFilter] = useState<string>("")
  const [filteredWines, setFilteredWines] = useState<WineListItem[]>([])

  useEffect(() => {
    const wines = wineList.filter(wine => {
      const name = (wine.name + wine.location).toLowerCase()
      return name.includes(txtFilter)
    });
    setFilteredWines(wines)
  }, [JSON.stringify(wineList), txtFilter])

  return (
    <Container>
      <Header enableSearch onChange={e => setTxtFilter(e.target.value)} />
      <WineTable items={filteredWines} />
    </Container>
  )
}

export default WineContainer;