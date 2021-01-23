import { useState, useEffect } from 'react';
import { message } from 'antd';
import axios from 'axios';
import Table from './components/table/index';

import 'antd/dist/antd.css';
import './App.css';


function App() {
  const [ searchParam, setSearchParam ] = useState("");
  const [ profiles, setProfiles ] = useState([]);
  const [ filteredProfile, setFilteredProfile ] = useState([]);
  const [ genders, setGenders ] = useState([]);
  const [ paymentMethods, setPaymentMethod ] = useState([]);
  const [ filters, setFilters ] = useState([]);

  /**
   *Add a new filter to the filters set
  */
  const addFilter = (newFilter) => {
    setFilters([...filters, newFilter])
  }
  /**
   * Remove a filter from our saed collection
   */
  const removeFilter = (pasedfilter) => {
    setFilters(
      filters.filter(filter => !(
        filter.key === pasedfilter.key &&
        filter.value === pasedfilter.value
      ))
    )
  }
  /**
   * Filter the entire dataset based on the filters currently selected
   */
  const filterRow = (row) => {
    if(!filters.length){
      return true
    }
    const allKeys = [...new Set(filters.map((filter) => filter.key))]
    return allKeys.every((oneKey)  => {
      const allKeyValues = filters
                              .filter((oneFilter) => oneFilter.key === oneKey)
                              .map((oneFilter) => oneFilter.value)
      return allKeyValues.includes(row[oneKey])
    });
  }

  const filterDataset = (dataset) => {
    const tempDataset = dataset.filter((dataRow) => filterRow(dataRow));
    return tempDataset;
  }

  /**
   * Filter the dataset based on what is passed into the search bar
   */
  const filterText = (profilesToFilter) =>{
    if(!searchParam.length) return profilesToFilter;
    return profilesToFilter.filter(({FirstName, LastName}) => {
      const totalString = `${FirstName} ${LastName}`
      return totalString.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1
    })
  }
  /**
   * Filter related functions
  */
  const Filter = ({type,text}) => {
    const foundFilter = filters.findIndex(filter => (
      filter.key === type &&
      filter.value === text
    )) !== -1

    const iconClass = type === "Gender"? 
    'fa-venus-mars' : 'fa-credit-card'

    const filter = {key: type, value: text};

    return (
      <div
        className={`filter_option ${foundFilter && "--active"}`}
        onClick={() => {
          foundFilter? removeFilter(filter): addFilter(filter)
        }}
      >
        <i class={`filter_icon fas ${iconClass}`}></i>
        {text}
      </div>
    )
    
  }
  /**
   * Fetch the data on render of the component
   */
  useEffect(() => {
    axios.get('https://api.enye.tech/v1/challenge/records')
    .then((response) => {
      const { data: {records: {profiles}} } = response;
      setProfiles(profiles);
      setFilteredProfile(profiles);
    })
    .catch(res => {
      message.error('There was an error loading the data');
    })
  }, []);

  /**
   * Dynamically calculate the filters
   */
  useEffect(() =>{
      // get all the unique genders
      const allGendersList = [...new Set(profiles.map(profile => profile['Gender']))];
      setGenders(allGendersList)
      // get the unique payment methods
      const allPayments = [...new Set(profiles.map(profile => profile['PaymentMethod']))];
      setPaymentMethod(allPayments);
  }, [profiles]);

  /**
   * Watch for input into the search bar
  */
 useEffect(() => {
  let filteredData = [...filteredProfile];
  if(searchParam){
    filteredData = profiles.filter(({FirstName, LastName}) => {
      const totalString = `${FirstName} ${LastName}`
      return totalString.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1
    })
    setFilteredProfile(filterDataset(filteredData))
  }else{
    setFilteredProfile(filterDataset(profiles));
  }
 }, [searchParam])

 /**
  * Watch for changes in the filters
  */
 useEffect(() => {
  //  filter by both filters and search bat
  const filteredDataset = filterText(filterDataset(profiles));
  setFilteredProfile(filteredDataset);
 }, [filters])

  return (
    <div className="App">

      <div className="sidenav">
        <img
          src="https://i.pravatar.cc/200"
          className="sidenav__fauxicon"
          alt=""
        />
        <i className="fas fa-2x fa-home"></i>
      </div>

      {/* section for the filters */}
      <div className="main_content">
        <div className="main_content__filters">
          <input
            type="text"
            placeholder="Seatch for a user by first name or last name"
            value={searchParam}
            onChange = {(e) => setSearchParam(e.target.value)}
          />

          <div className="filters_wrapper">
              {
                genders.map(gender => (
                  <Filter
                    type="Gender"
                    text={gender}
                    changeFilters = {setFilters}
                  />
                ))
              }
              {
                paymentMethods.map(payments => (
                  <Filter
                    type="PaymentMethod"
                    text={payments}
                    changeFilters = {setFilters}
                  />
                ))
              }
          </div>


        </div>
        {/* section for the filters */}

        {/* section for the table */}
        <div className="main_content__tablewrapper">
          <div className="customstyle">
            <div className="styledline" />
          </div>
          <Table profiles={filteredProfile}/>
        </div>
        {/* section for the table */}

      </div>

    </div>
  );
}

export default App;
