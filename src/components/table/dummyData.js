import React, {useState} from 'react';
import { Table, Tag, Space } from 'antd';
import Card from '../card';
import axios from 'axios';

const paymentColorMap = {
  "cc" : "green",
  "check": "gold",
  "money order": "purple",
  "paypal": "red"
}
/**
 * Define the render methods for the columns in our table
 */


export const columns = [
  {
    title: "Personal Details",
    key: "FullName",
    render: (text, record, index) => {
      const {
        FirstName, LastName,
        Email, UserName, PhoneNumber,
        LastLogin
      } = record;
      return (
        <div>
          <p style={{fontWeight: "bold", letterSpacing: "1px", fontSize: "16px"}}>
            {FirstName} {LastName}
          </p>
          <p className="customfield">
            <i class="fas fa-envelope"></i>
            <span>{Email}</span>
          </p>
          <p className="customfield">
            <i class="fas fa-phone"></i>
            <span>{PhoneNumber}</span>
          </p>
          <p className="customfield">
            @
            <span>{UserName}</span>
          </p>
          <p className="customfield">
            <i class="fas fa-eye"></i>
              <span>{LastLogin}</span>
          </p>
        </div>
      )
    },
  },
  {
    title: "Location Details",
    key: "Location",
    render:  (text, record, index) => {
      const {
        Latitude, Longitude
      } = record;
      return (
        <p className="customfield">
          <i class="fas fa-3x fa-street-view"></i>
          <span style={{marginLeft: "10px"}}>
            {Latitude}, {Longitude}
          </span>
        </p>
      )
    }
  },
  {
    title: "Card Details",
    key: "Card",
    render: (text, record, index ) => {
      const {
        CreditCardNumber, CreditCardType
      } = record
      return (
        <Card
          number={CreditCardNumber}
          type={CreditCardType}
        />
      )
    }
  },
  {
    title: 'Gender',
    dataIndex: 'Gender',
    key: 'Gender',
    render: tag => {
      let color = tag.toLowerCase() === "male" ?
                  'geekblue' : tag.toLowerCase() === "female"? 'pink' : 'volcano';
      return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
      )
    }
  },
    {
      title: 'Payment Method',
      dataIndex: 'PaymentMethod',
      key: 'PaymentMethod',
      render: method => {
        let color = paymentColorMap[method]
        return (
            <Tag color={color} key={method}>
              {method.toUpperCase()}
            </Tag>
        )
    }, 
  },{
    title: "Meta Data",
    key: "metaData",
    render: (text, record, index ) => {
      const {
        DomainName,
        MacAddress,
        URL,
      } = record;
      return (
        <>
          <p className="customfield">
            Domain: 
            <span>{DomainName}</span>
          </p>
          <p className="customfield">
            Mac Address:
          <span>{MacAddress}</span>
          </p>
          <p className="customfield">
            URL: 
            <span>
              <a href={URL}>
                {URL}
              </a>
            </span>
          </p>
        </>
      )
    }
  }
];