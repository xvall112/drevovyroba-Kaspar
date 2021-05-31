import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaMapMarkerAlt } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { AiOutlinePhone } from "react-icons/ai"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

import socialKontakt from "../../constants/socialKontakt"
import FormContact from "./formContact"

const Kontakt = () => {
  return (
    <Wrapper id="kontakt">
      <div className="kontakt">
        <section id="kontakt">
          <Container>
            <div className="contact">
              <Row>
                <div className="content col-12 text-center">
                  <h2 className="pb-5">Kontakt</h2>
                </div>
              </Row>
              <Row>
                <Col xs={12} xl={6}>
                  <div className="contactInfo">
                    <div className="box">
                      <div className="icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="text">
                        <h3>Adresa</h3>
                        <p>Kozinova 1073/11</p>
                        <p>Liberec 1, 46001</p>
                        <p>IČ: 87953439</p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="icon">
                        <AiOutlineMail />
                      </div>
                      <div className="text">
                        <h3>Email</h3>
                        <a href="mailto:stavbydrevo@seznam.cz">
                          stavbydrevo@seznam.cz
                        </a>
                      </div>
                    </div>
                    <div className="box">
                      <div className="icon">
                        <AiOutlinePhone />
                      </div>
                      <div className="text">
                        <h3>Telefon</h3>
                        <a className="tel" href="tel:+420605372498">
                          +420605372498
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} xl={6}>
                  <Card>
                    <CardContent>
                      <FormContact />
                    </CardContent>
                  </Card>
                </Col>
              </Row>
              <div className="row mt-5">
                <div className="col-12">
                  <div className="socialIcons mb-4">
                    {socialKontakt.map((item, index) => {
                      return (
                        <a href={item.url} key={index}>
                          <div className="icon">{item.icon}</div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .kontakt {
    background-color: var(--clr-secondary);
    padding-top: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='759' height='632.5' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.01'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
  }

  .contact {
    padding-top: 3rem;
    position: relative;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      min-height: 60vh;
    }
    .content {
      text-align: center;
    }
    .content p {
      font-weight: 300;
      color: var(--clr-primary);
    }
  }

  .contactInfo {
    display: flex;
    flex-direction: column;
  }
  .contactInfo .box {
    position: relative;
    padding: 20px 0;
    display: flex;
  }

  .contactInfo .box .icon {
    min-width: 60px;
    height: 60px;
    background: var(--clr-fourth);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
  }

  .contactInfo .box .text {
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: var(--clr-fourth);
    flex-direction: column;
    font-weight: 300;
  }
  .contactInfo .box .text a {
    text-decoration: none;
    color: var(--clr-fourth);
  }
  .contactInfo .box .text p {
    margin-bottom: 0;
  }

  .contactInfo .box .text h3 {
    font-weight: 500;
    color: var(--clr-primary);
    margin-bottom: 0px;
  }

  .socialIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    a {
      color: black;
      margin: 10px;
    }
    .icon {
      min-width: 60px;
      height: 60px;
      background: var(--clr-fourth);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 22px;
      transition: all 0.2s ease-in-out;
    }
    .icon:hover {
      background-image: linear-gradient(
        to right,
        var(--clr-primary) 0%,
        #d6ae7b 51%,
        var(--clr-primary) 100%
      );
      transform: scale(1.2);
    }
  }
`
export default Kontakt
