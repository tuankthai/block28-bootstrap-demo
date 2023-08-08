import Card from 'react-bootstrap/Card';

function MusicCard({ artist, genre, year, albumName }) {
    // console.log({ artist, genre, year, albumName })
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ albumName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ artist}</Card.Subtitle>
                <Card.Text>
                    {genre}
                </Card.Text>
                <Card.Text>
                    {year}
                </Card.Text>
                <Card.Link href="#">demo</Card.Link>
                
            </Card.Body>
        </Card>
    );
}

export default MusicCard;