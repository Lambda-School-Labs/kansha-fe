import React from 'react';
import Auth from './Auth';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Button } from '@material-ui/core';

const auth = new Auth();

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    paper: {
        marginTop: '1rem',
    },
    typo: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem .5rem',
    },
    button: {
        width: '10%',
        margin: '1rem 45%',
        backgroundColor: '#349AFA',
        color: 'white',
        textDecoration: 'none',
    },
}));

export default function Login() {
    const classes = useStyles();

    const state = {
        credentials: {
            username: '',
            password: '',
            auth,
        },
    };

    const handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
        });
    };

    const login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/');
        });
    };

    return (
        <div id="App" className={classes.root}>
            <CssBaseline />
            <Container fixed>
                <Paper className={classes.paper}>
                    <Typography className={classes.typo} variant="h5">
                        Please Log In
                    </Typography>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={auth.login}
                    >
                        Login
                    </Button>
                </Paper>
            </Container>
        </div>
    );
}