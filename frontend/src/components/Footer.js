import React from 'react'
import { Row,Container,Col } from 'react-bootstrap'
function Footer() {
    return (
        <div>
            <footer>
                <Container>
                <Row>
                    <Col className='text-center py-3' >Footer &copy; MyApp </Col> 
                </Row>
                </Container>
            </footer>

        </div>
    )
}

export default Footer
