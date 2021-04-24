import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function EventDashboard(){
    return(
        <Grid>
            <Grid.Column width={10}>
                Left Coloumn
            </Grid.Column>
            <Grid.Column width={6}>
                Right Coloumn
            </Grid.Column>            
        </Grid>
    )
}