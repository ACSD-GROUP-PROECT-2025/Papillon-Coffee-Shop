import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Solar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {      
          const apiUrl = `https://www.renewables.ninja/api/countries/IE?token=6cdbe1a474b9b25d3527fa18f508be6d8577ecb9`;
      
          const response = await axios.get(apiUrl);
          const json = response.data;
          console.log("API Response:", json); // Log the response for debugging
      
          // Format the data for the chart
          const formattedData = json.data.map((item) => ({
            date: item.date,
            wind_generation: item.wind_generation,
          }));
          setData(formattedData);
        } catch (error) {
          console.error("Error fetching wind data:", error);
        }
      };

    fetchData();
  }, []);

  return (
    <div className="page">
      <h2>Wind Energy Generation in Ireland</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="wind_generation" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Wind;