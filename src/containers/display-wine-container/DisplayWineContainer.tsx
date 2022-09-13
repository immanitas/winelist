import { Breadcrumbs, Container, Link, Typography } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import { LinkBehavior } from '../../components/link/LinkBehavior';
import WineView from '../../components/wine/view/WineView';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getWine } from '../../services/wines/WineService';

function DisplayWineContainer() {
  const params = useParams<{ id: string }>()
  const state = useAppSelector(state => state)
  const wine = getWine(state, params.id || "")

  return wine === null ? <Navigate to="/" replace /> : (
    <Container sx={{ flexGrow: 1 }}>
      <Header />
      <Breadcrumbs sx={{ marginTop: 3 }} aria-label="breadcrumbs">
        <LinkBehavior color="inherit" href="/" aria-label="home">
          Home
        </LinkBehavior>
        <Typography aria-label="wine name" color="text.primary">{wine ? wine.name : '-'}</Typography>
      </Breadcrumbs>
      {wine ? <WineView wine={wine} /> : null }
    </Container>
  )
}

export default DisplayWineContainer;