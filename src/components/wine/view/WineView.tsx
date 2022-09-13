import { Box, Card, CardMedia, Link, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { LinkBehavior } from '../../link/LinkBehavior';
import WineListItem from '../WineListItem';
import { WineViewProps } from './WineViewProps';

class WineView extends React.PureComponent<WineViewProps> {

  render() {
    return (
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid xs={12} sx={{pb: 0}}>
          <Box>
            <Typography variant="h5">{this.props.wine.name}</Typography>
          </Box>
          <Divider />
        </Grid>
        <Grid xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardMedia
              image={this.props.wine.image}
              height="auto"
              sx={{ backgroundSize: "contain", maxHeight: 600 }}
              component={'img'}
              alt="Talamonti"
            />
          </Card>
        </Grid>
        <Grid xs={12} sm={4} md={6} lg={8}>
          <Paper elevation={0}>
            <Box sx={{ p: 1 }}>
              <List sx={{ width: '100%', pt: 0, mt: 0 }}>
                {this.getListItems()}
              </List>
            </Box>
          </Paper>
        </Grid>
        <Grid xs={12}>
          <Paper elevation={1}>
            <Box sx={{ p: 1 }}>
              {this.getDescription()}
              {this.getSource()}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    )
  }

  private getListItems() {
    const { wine } = this.props;
    const excludedKeys = ["id", "image", "description", "source"];
    const result = [];
    if (wine) {
      let key: keyof WineListItem;
      for (key in wine) {
        if (!excludedKeys.includes(key)) {
          const value = (wine[key] as string);
          result.push((
            <ListItem key={key} disableGutters sx={{ py: 0 }}>
              <ListItemText primary={(
                <Typography variant="subtitle1" sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}>
                  {this.transformString(key)}:
                  <Typography variant="body1">{value}</Typography>
                </Typography>
              )} />
            </ListItem>
          ))
        }
      }
    }

    return result;
  }

  /**
   * @see https://stackoverflow.com/questions/4149276/how-to-convert-camelcase-to-camel-case
   */
  private transformString(str: string) {
    return str
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function (str) { return str.toUpperCase(); })
  }

  private getDescription() {
    return (
      <Typography variant="subtitle1" sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}>
        Description:
        <Typography variant="body1">{this.props.wine.description}</Typography>
      </Typography>
    )
  }


  private getSource() {
    return (
      <Typography variant="body1">{`Source: `}
        <LinkBehavior target="blank" href={this.props.wine.source}>
          {`${this.props.wine.source}`}
        </LinkBehavior>
      </Typography>
    )
  }
}

export default WineView;