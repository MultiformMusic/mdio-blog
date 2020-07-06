import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => {
    return (
    <Row>
        <Col md="8">
          {/* AUTHOR INTRO STARTS */}
          <Media className="mb-4 admin-intro">
            <Image
              roundedCircle
              width={64}
              height={64}
              className="mr-3"
              src="https://avatars2.githubusercontent.com/u/29869105?s=400&u=f4e81b9076f30264801c39b2fbb8f6584583a108&v=4"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
              <p className="welcome-text">
              My name is Filip Jerga and I am an experienced software engineer and freelance developer.
              and this is my blog page.
              </p>
            </Media.Body>
          </Media>
          {/* AUTHOR INTRO ENDS */}
        </Col>
    </Row>
    )
}

export default AuthorIntro;
