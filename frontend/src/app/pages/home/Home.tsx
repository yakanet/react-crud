import * as React from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Container, Grid} from '@material-ui/core';


export default function Home() {
    return (
        <Container maxWidth="sm">
            <Grid container={true} spacing={4}>
                <Grid item={true} xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Link to="/todo">Todo</Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item={true} xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Link to="/contact">Contact</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
