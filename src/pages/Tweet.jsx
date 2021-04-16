import React, { Fragment, useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom'; 

export default function Tweet() {
    return (
        <Fragment>
            <Helmet>
                <title>Tweet</title>
            </Helmet>
            <Container>
                <Row>
                    <Col>
                    <h2>Tweet</h2>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
