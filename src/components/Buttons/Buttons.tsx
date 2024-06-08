import React from 'react';
import { Container } from 'reactstrap';
import ButtonBlack from '../ButtonBlack/ButtonBlack';
import ButtonWhite from '../ButtonWhite/ButtonWhite';

const Buttons = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center flex-wrap mb-5">
                <div className="m-3 my-3">
                    <ButtonWhite />
                </div>
                <div className="m-3">
                    <ButtonBlack />
                </div>
            </div>
        </Container>
    );
}

export default Buttons;
