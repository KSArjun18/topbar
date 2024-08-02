import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getdropdownvalue, selecteddropdownvalue } from '../../redux/actions/dropdown';

const Home = () => {
  const dispatch = useDispatch();

  const [listedData, setListedData] = useState(() => {
    const saved = localStorage.getItem('city name');
    const initialValue = saved ? saved : '';
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem('city name', listedData);
  }, [listedData]);

  useEffect(() => {
    dispatch(getdropdownvalue());
    dispatch(selecteddropdownvalue());
  }, [dispatch]);

  const handleCity = (e) => {
    const selectedCity = e.target.value;
    dispatch(selecteddropdownvalue(selectedCity));
    setListedData(selectedCity);
  };

  const handleLocality = (e) => {
    dispatch(selecteddropdownvalue(e.target.value));
  };

  const data = useSelector((state) => state.DropdownValue);
  const selectedData = useSelector((state) => state.DropdownSelectedValue);

  const filterData = selectedData.filter((value) => value.city_name === listedData);

  return (
    <div className="mt-5 text-center">
      <h5 className="mb-3">Choose Location</h5>
      <div className="d-flex justify-content-center gap-3">
        <select
          className="card align-items-center px-3 py-1"
          onChange={handleCity}
          value={listedData} // Set the value of the select from state
        >
          <option value="">Select a city</option> {/* Default option */}
          {data.map((item, index) => (
            <option key={index} value={item.city_name}>
              {item.city_name}
            </option>
          ))}
        </select>
        <select className="card px-3 py-1" onChange={handleLocality}>
          <option value="">Select a locality</option> {/* Default option */}
          {filterData.map((item, index) => (
            <option key={index} value={item.locality_name}>
              {item.locality_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Home;
            
