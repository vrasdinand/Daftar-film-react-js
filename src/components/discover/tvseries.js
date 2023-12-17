import { useEffect, useState } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import axios from "axios"

const Tvseries = () => {
  const [series, setSeries] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}tv/popular`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY
      }
    }).then((response) => {
      setSeries(response.data.results)
    })
  }, [])


  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TV SERIES</h1>
        <br />
        <Row>
          {series.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" id="tvseries" key={index}>
                <Card className="seriesImage">
                  <Image src={`${process.env.REACT_APP_IMG_URL1}/${result.poster_path}`} alt="test" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">{result.name}</Card.Title>
                      <Card.Text className="text-left">
                        {result.overview}
                      </Card.Text>
                      <Card.Text className="text-left">
                        {result.first_air_date}
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Tvseries
