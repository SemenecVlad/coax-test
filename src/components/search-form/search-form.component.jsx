import { useCallback } from "react";
import { Row, Col, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { SearchOutlined } from "@ant-design/icons";

import { selectCitiesList } from "../../redux/cities/cities.selectors";
import { HookFormAutocomplete } from "../../common/form/autocomplete/autocomplete.component";
import { HookFormRangePicker } from "../../common/form/range-picker/range-picker.component";
import { HookFormInputNumber } from "../../common/form/input-number/input-number.component";
import { fetchCollectionByCityId, fetchCollectionStart } from "../../redux/hotels/hotels.actions";
import { ErrorMessage } from '@hookform/error-message';

const { Title } = Typography;

export const SearchForm = () => {
  const { control, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = useCallback((values) => {
    if (values.city !== "ALL") {
      dispatch(fetchCollectionByCityId(values.city))
    } else {
      dispatch(fetchCollectionStart("ALL"))
    }
    console.log(values, errors);
  }, []);

  const cities = useSelector(selectCitiesList).map((city) => ({
    key: city.id,
    value: city.name,
  }));

  const renderError = () => <p style={{color: "red"}}>This field is required!</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row justify="space-between" style={{ border: "1px solid rgba(128, 128, 128, 0.3)", borderRadius: 10, padding: "25px 35px", marginBottom: 40 }}>
        <Col span={6} style={{borderRight: "1px solid rgba(128, 128, 128, 0.3)"}}>
          <Title level={5}>Location</Title>
          <HookFormAutocomplete
            name="city"
            placeholder="Where to?"
            options={cities}
            control={control}
          />
          <ErrorMessage
            errors={errors}
            name="city"
            render={renderError}
          />
        </Col>
        <Col span={8} style={{borderRight: "1px solid rgba(128, 128, 128, 0.3)"}}>
          <Title level={5}>Check In - Check Out</Title>
          <HookFormRangePicker name="daterange" control={control} />
          <ErrorMessage
            errors={errors}
            name="daterange"
            render={renderError}
          />
        </Col>
        <Col span={6}>
          <Title level={5}>Guests</Title>
          <HookFormInputNumber
            name="guests"
            control={control}
            defaultValue={1}
          />
          <ErrorMessage
            errors={errors}
            name="guests"
            render={renderError}
          />
        </Col>
        <Col span={1}>
          <Button
            style={{width: 60, height: 60, backgroundColor: "#4854ef", borderColor: "#4854ef"}}
            icon={<SearchOutlined style={{fontSize: 30, marginTop: 4}} />}
            type="primary"
            shape="circle"
            htmlType="submit"
          />
        </Col>
      </Row>
    </form>
  );
};
