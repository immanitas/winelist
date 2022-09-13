import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import WineListItem from '../WineListItem'
import { FormikProps } from 'formik'
import { Card, CardMedia, CardContent } from '@mui/material'

interface WineFormState {
  image: string | null
}

interface WineFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  formik: FormikProps<WineListItem>
  onImageUpload: (image: string | ArrayBuffer | null) => void
}

class WineForm extends React.Component<WineFormProps, WineFormState> {
  state: WineFormState = {
    image: null
  }

  render() {
    return (
      <Paper elevation={1}>
        <Box
          onSubmit={event => {
            this.props.handleSubmit(event)
          }} component={"form"} sx={{ display: 'flex', padding: 2 }}>
          <Grid container spacing={2}>
            {this.renderUploadImageButton()}
            {this.renderName()}
            {this.renderWinery()}
            {this.renderLocation()}
            {this.renderWineType()}
            {this.renderRating()}
            {this.renderYear()}
            {this.renderSize()}
            {this.renderAlcoholPercentage()}
            {this.renderSource()}
            {this.renderDescription()}
            {this.renderSubmitButton()}
          </Grid>

        </Box>
      </Paper >
    )
  }

  private renderUploadImageButton() {
    const key: keyof WineListItem = "image"
    const { image } = this.state;
    
    return <Grid xs={12} sx={{ textAlign: 'center', alignItems: 'center' }}>
      <Card elevation={0} sx={{ maxWidth: 200, margin: "0 auto" }}>
        {
          image ? <CardMedia
            component="img"
            sx={{ height: "auto", width: 200, backgroundSize: "cover" }}
            src={image}
          /> : null
        }
        <CardContent>
          {!image ?
            <Button
              variant="contained"
              component="label"
              aria-label="upload wine image"
            >
              Add image
              <input onChange={this.handleImageChange} type="file" name={key} id={key} hidden accept="image/*" />
            </Button>
            :
            <Button
              variant="contained"
              component="label"
              aria-label="delete wine image"
              onClick={() => setTimeout(() => this.setState({ image: null }, () => {
                this.props.onImageUpload(null);
              }), 100)}
            >
              Delete image
            </Button>
          }
        </CardContent>
      </Card>
    </Grid>
  }

  handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target && event.target.files) {
      const file = event.target.files[0];
      const image = URL.createObjectURL(file)
      this.setState({ image }, () => {
        const fileReader = new FileReader();
        // @ts-ignore
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
          const base64 = fileReader.result;
          this.props.onImageUpload(base64)
        }
      });
    }
  }

  private renderSubmitButton() {
    return <Grid xs={12} sx={{ textAlign: 'right' }}>
      <Button
        variant="contained"
        component="button"
        color="success"
        aria-label="submit button to add the wine data to list"
        type="submit"
      >
        Create entry
      </Button>
    </Grid>
  }


  private renderDescription() {
    const key: keyof WineListItem = "description"
    const { formik } = this.props;

    return <Grid xs={12}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Description</FormLabel>
        <TextField
          multiline
          id={key}
          aria-label="wine description"
          name={key}
          type={"text"}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          placeholder="A classic Cabernet Sauvignon/Petite Sirah with a nose of blackcurrants, dark chocolate, and subtle toasty notes with hints of coffee and vanilla on the palate."
          maxRows={10} />
      </FormControl>
    </Grid>
  }

  private renderSize() {
    const key: keyof WineListItem = "size"
    const { formik } = this.props;

    return <Grid xs={12} sm={6} md={3}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Size</FormLabel>
        <TextField
          required
          id={key}
          name={key}
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">ml</InputAdornment>,
            inputProps: {
              max: Number.MAX_SAFE_INTEGER, min: 0,
            }
          }}
          value={formik.values.size}
          onChange={formik.handleChange}
          error={formik.touched.size && Boolean(formik.errors.size)}
          helperText={formik.touched.size && formik.errors.size}
          placeholder="750"
        />
      </FormControl>
    </Grid>
  }

  private renderYear() {
    const key: keyof WineListItem = "year";
    const { formik } = this.props;

    return <Grid xs={12} sm={6} md={3}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Year</FormLabel>
        <TextField
          aria-label="wine year input field"
          required
          id={key}
          name={key}
          type="number"
          InputProps={{
            inputProps: {
              max: new Date().getFullYear(), min: 0
            }
          }}
          value={formik.values.year}
          onChange={formik.handleChange}
          error={formik.touched.year && Boolean(formik.errors.year)}
          helperText={formik.touched.year && formik.errors.year}
          placeholder="2004" />
      </FormControl>
    </Grid>
  }

  private renderRating() {
    const key: keyof WineListItem = "rating";
    const { formik } = this.props;

    return <Grid xs={12} sm={6} md={3}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Rating</FormLabel>
        <TextField
          required
          name={key}
          aria-label="wine rating input field"
          id={key}
          type="number"
          InputProps={{
            inputProps: {
              max: 5, min: 0
            }
          }}
          value={formik.values.rating}
          onChange={formik.handleChange}
          error={formik.touched.rating && Boolean(formik.errors.rating)}
          helperText={formik.touched.rating && formik.errors.rating}
          placeholder="5"
        />
      </FormControl>
    </Grid>
  }

  private renderWineType() {
    const key: keyof WineListItem = "type"
    const { formik } = this.props;

    return <Grid xs={12} sm={6}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Type</FormLabel>
        <Select
          labelId="type-label"
          id={key}
          name={key}
          aria-label="wine type select list"
          value={formik.values.type}
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
        >
          <MenuItem value={"red"}>Red</MenuItem>
          <MenuItem value={"white"}>White</MenuItem>
          <MenuItem value={"green"}>Green</MenuItem>
          <MenuItem value={"rose"}>Rose</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  }

  private renderLocation() {
    const key: keyof WineListItem = "location"
    const { formik } = this.props;

    return <Grid xs={12} sm={6}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Location</FormLabel>
        <TextField
          aria-label="location input field"
          required
          id={key}
          name={key}
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
          placeholder="Texas" />
      </FormControl>
    </Grid>
  }

  private renderWinery() {
    const key: keyof WineListItem = "winery"
    const { formik } = this.props;

    return <Grid xs={12} sm={6}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Winery</FormLabel>
        <TextField
          aria-label="winery input field"
          value={formik.values.winery}
          onChange={formik.handleChange}
          error={formik.touched.winery && Boolean(formik.errors.winery)}
          helperText={formik.touched.winery && formik.errors.winery}
          required
          id={key}
          name={key}
          placeholder="Kai Simone" />
      </FormControl>
    </Grid>
  }

  private renderName() {
    const key: keyof WineListItem = "name";
    const { formik } = this.props;

    return <Grid xs={12} sm={6}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Name</FormLabel>
        <TextField
          aria-label="wine name input field"
          required
          id={key}
          name={key}
          placeholder="Cabernet"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </FormControl>
    </Grid>
  }

  private renderAlcoholPercentage() {
    const key: keyof WineListItem = "alcoholPercentage";
    const { formik } = this.props
    return <Grid xs={12} sm={6} md={3}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Alcohol Percentage</FormLabel>
        <TextField
          aria-label="wine name input field"
          required
          id={key}
          name={key}
          placeholder="12"
          type={"number"}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
            inputProps: {
              max: Number.MAX_SAFE_INTEGER, min: 0,
            }
          }}
          value={formik.values.alcoholPercentage}
          onChange={formik.handleChange}
          error={formik.touched.alcoholPercentage && Boolean(formik.errors.alcoholPercentage)}
          helperText={formik.touched.alcoholPercentage && formik.errors.alcoholPercentage}
        />
      </FormControl>
    </Grid>
  }

  private renderSource() {
    const key: keyof WineListItem = "source"
    const { formik } = this.props

    return <Grid xs={12}>
      <FormControl fullWidth>
        <FormLabel htmlFor={key}>Source</FormLabel>
        <TextField
          id={key}
          name={key}
          type="url"
          value={formik.values.source}
          onChange={formik.handleChange}
          error={formik.touched.source && Boolean(formik.errors.source)}
          helperText={formik.touched.source && formik.errors.source}
          placeholder="https://example.com/" />
      </FormControl>
    </Grid>
  }
}

export default WineForm;