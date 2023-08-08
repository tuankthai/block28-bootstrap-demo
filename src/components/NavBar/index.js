import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function NavSearchBar({ setKeyWord }) {

    const [keywordChanged, setKeywordChanged] = useState("")

    function handleKeyWordChange(e) {

        setKeywordChanged(e.target.value)
    }

    function handleSubmitSearch(e) {
        e.preventDefault();
        setKeyWord(keywordChanged)
    }

    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <Form inline>
                <InputGroup>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Form>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            onChange={handleKeyWordChange}
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" onClick={handleSubmitSearch}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}

export default NavSearchBar;