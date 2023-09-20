"use client"
import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import SignOut from "@/components/sign-out";

export default class App extends Component {
  data = [
    {
      key: "iphone1",
      value: "iPhone 1",
    },
    {
      key: "iphone2",
      value: "iPhone 2",
    },
    {
      key: "iphone3",
      value: "iPhone 3",
    },
    {
      key: "iphone4",
      value: "iPhone 4",
    },
    {
      key: "iphone5",
      value: "iPhone 5",
    },
    {
      key: "iphone6",
      value: "iPhone 6",
    },
    {
      key: "iphone7",
      value: "iPhone 7",
    },
    {
      key: "iphone8",
      value: "iPhone 8",
    },
    {
      key: "iphoneX",
      value: "iPhone X",
    },
    {
      key: "iphone11",
      value: "iPhone 11",
    },
    {
      key: "iphone12",
      value: "iPhone 12",
    },
    {
      key: "iphone13",
      value: "iPhone 13",
    },
    {
      key: "iphone14",
      value: "iPhone 14",
    },
    {
      key: "iphone15",
      value: "iPhone 15",
    },
  ];

  data2 = [
    {
      key: "location1",
      value: "EcoRecycle Center ",
    },
    {
      key: "location2",
      value: "GreenTech Recycling ",
    },
    {
      key: "location3",
      value: "TechSavers E-waste Facility ",
    },
    {
      key: "location4",
      value: "CleanEarth Recycling ",
    },
    {
      key: "location5",
      value: "Sustainable Solutions ",
    },
  ];
  
  

  render() {
    return (
      <div data-theme="">
        
      <div className="h-full w-1/2 mx-auto d-block" style={{marginTop:'10%'}} >
        
        <h1>Search for Mobile Models</h1>
        <ReactSearchBox
          placeholder="Search for a model"
          value="Phone Models"
          data={this.data}
          callback={(record) => console.log(record)}
        />
        <h1>Search for E-waste Locations</h1>
        <ReactSearchBox
          placeholder="Search for a location"
          value="Phone Models"
          data={this.data2}
          callback={(record) => console.log(record)}
        />
      </div>
      </div>
    );
  }
}
