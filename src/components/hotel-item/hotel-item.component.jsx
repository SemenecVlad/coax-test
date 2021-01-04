import { Row, Col, Typography, Rate, Button } from "antd";
import moment from "moment";
import { CalendarOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import tripadvisorLogo from "../../assets/img/tripadvisor_small.jpg";

const { Title } = Typography;

const hotelDefault = {
  name: "Hilton Garden Inn Baltimore White Marsh",
  price: "$135 - $193*",
  address: "5015 Campbell Blvd, Baltimore, MD 21236",
  id: "100407",
  cover:
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/12/62/45/exterior.jpg",
  cityId: 1,
  rating: 3,
};

export const HotelItem = ({
  hotel = hotelDefault,
  checkIn = moment(),
  checkOut = moment().add(1, "week"),
}) => {
  const bookClick = useCallback(() => {
    alert("thanks for booking");
  }, []);

  return (
    <Row style={{paddingLeft: 4, marginBottom: 40}}>
      <Col
        span={12}
        style={{
          backgroundImage: `url(${hotel.cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        }}
      ></Col>
      <Col span={12}
        style={styles.titleRow}>
        <Title style={{marginBottom: 5}} level={2}>{hotel.name}</Title>
        <Row justify="space-between">
          <Col span={8}><Rate value={hotel.rating} disabled /></Col>
          <Col span={11}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
              <img style={{height: 30, marginRight: 10}} src={tripadvisorLogo} />
              <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <div style={styles.tripRateCircleWrap}>
                  <div style={styles.tripRateCircle} />
                </div>
                <div style={styles.tripRateCircleWrap}>
                  <div style={styles.tripRateCircle} />
                </div>
                <div style={styles.tripRateCircleWrap}>
                  <div style={styles.tripRateCircle} />
                </div>
                <div style={styles.tripRateCircleWrap}>
                  <div style={styles.tripRateCircle} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row justify="space-between">
          <Col span={11} style={styles.colorBlock}>
            <Title level={5}>Check In</Title>
            <div style={styles.greyTextRow}>
              <CalendarOutlined style={styles.calendarIcon} />
              <span>{checkIn.format("DD MMM YYYY")}</span>
            </div>
          </Col>
          <Col span={11} style={styles.colorBlock}>
            <Title level={5}>Check Out</Title>
            <div style={styles.greyTextRow}>
              <CalendarOutlined style={styles.calendarIcon} />
              <span>{checkOut.format("DD MMM YYYY")}</span>
            </div>
          </Col>
        </Row>
        <br />
        <Row justify="space-between">
          <Col span={11}>
            <Title level={5}>Address</Title>
            {hotel.address}
          </Col>
          <Col span={11}>
            <Title level={5}>Guests</Title>
            <span>2 adults, 1 bed, 1 bath</span>
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col span={24}>
            <Title level={5}>Original price</Title>
            <span style={{padding: "5px 15px", borderRadius: 8, backgroundColor: "#EC3499", width: "auto", color: "white"}}>$310  -50% off</span>
          </Col>
        </Row>
        <br />
        <Button
          style={styles.button}
          size="large"
          type="primary"
          onClick={bookClick}
        >
          Book for - {hotel.price}
        </Button>
        <p style={{marginTop: 20, marginBottom: 10}}>Review COVID-19 travel restrictions before you book.</p>
        <a href="#">Learn more</a>
      </Col>
    </Row>
  );
};

const styles = {
  titleRow: {
    padding: "40px",
    border: "1px solid rgba(128, 128, 128, 0.22)",
    borderRadius: 10,
    marginLeft: -8,
    backgroundColor: "white"
  },
  tripRateCircleWrap: {
    width: 20,
    height: 20,
    borderRadius: 10,
    border: "2px solid #00AF87",
    display: "flex",
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center",
    marginRight: 5
  },
  tripRateCircle: {width: 12, height: 12, borderRadius: 10, backgroundColor: "#00AF87"},
  calendarIcon: {
    marginRight: 10,
    fontSize: 17,
    marginTop: -2
  },
  button: {
    width: "100%",
    borderRadius: 8,
    height: 50,
    backgroundColor: "#4854ef",
    borderColor: "#4854ef"
  },
  colorBlock: {
    border: "1px solid rgba(128, 128, 128, 0.22)",
    padding: 20,
    borderRadius: 8,
    backgroundColor: "rgba(128, 128, 128, 0.03)"
  },
  greyTextRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "grey"
  },
}
