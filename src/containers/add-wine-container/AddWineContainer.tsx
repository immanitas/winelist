import { Breadcrumbs, Container, Link, Typography } from '@mui/material';
import Header from '../../components/header/Header';
import WineForm from '../../components/wine/form/WineForm';
import Grid from '@mui/material/Unstable_Grid2'
import * as yup from 'yup';
import { FormikProps, useFormik } from 'formik';
import WineListItem from '../../components/wine/WineListItem';
import {useState} from 'react'
import AddWineSchema from './AddWineSchema';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addWine } from '../../services/wines/WineService';
import { LinkBehavior } from '../../components/link/LinkBehavior';

function AddWineContainer() {
  const [image, setImage] = useState<(string | ArrayBuffer | null)>(null);
  const dispatch = useAppDispatch()
  const formik: FormikProps<WineListItem> = useFormik<WineListItem>({
    initialValues: {
      name: "",
      alcoholPercentage: 12,
      description: "",
      id: new Date().getTime().toString(),
      image: "",
      location: "",
      rating: 0,
      size: 750,
      source: "",
      type: "red",
      winery: "",
      year: new Date().getFullYear()

    },
    onSubmit: (values) => {
      const formattedObject = {
        ...values, image: image ? image.toString(): "", size: `${values.size}ml`,
      }
      dispatch(addWine(formattedObject))

      alert(JSON.stringify(formattedObject, null, 2));

    },
    validationSchema: AddWineSchema

  });

  return (
    <Container>
      <Header />
      <Grid spacing={2}>
        <Grid sm={12} sx={{ mb: 3 }}>
          <Breadcrumbs sx={{ marginTop: 3 }} aria-label="breadcrumbs">
            <LinkBehavior color="inherit" href="/" aria-label="home">
              Home
            </LinkBehavior>
            <Typography aria-label="wine name" color="text.primary">Add Wine</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid sm={12}>
          <WineForm onImageUpload={image => setImage(image)} handleSubmit={formik.handleSubmit} formik={formik} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AddWineContainer;