import { Typography, Layout, Spin } from "antd";
import { SearchForm } from "./components/search-form/search-form.component";
import { HotelItem } from "./components/hotel-item/hotel-item.component";
import tripadvisorLogo from "./assets/img/tripadvisor.png";
import { selectHotelsList, isFetchingHotels } from "./redux/hotels/hotels.selectors";
import { useSelector } from "react-redux";

const { Title } = Typography;
const { Content } = Layout;

function App() {
  const hotels = useSelector(selectHotelsList).map(hotel => <HotelItem key={hotel.id} id={hotel.id} hotel={hotel} />);
  const loading = useSelector(isFetchingHotels);
  return (
    <Content style={{ padding: "20px 50px" }}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40}}>
        <div>
          <Title style={{marginBottom: 10}}>Best Deals</Title>
          <Title style={{marginTop: 10}} level={3}>Check for some amazing deals all year round</Title>
        </div>
        <img style={{height: 120}} src={tripadvisorLogo} />
      </div>

      <SearchForm />

      <Content style={{ padding: "20px 0" }}>
        {
          loading
            ? <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><Spin size="large" /></div>
            : hotels}
      </Content>
    </Content>
  );
}

export default App;
