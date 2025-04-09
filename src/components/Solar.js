import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Solar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiToken = "YOUR_RENEWABLES_NINJA_API_TOKEN";
        const lat = 53.3498; // Latitude for Dublin
        const lon = -6.2603; // Longitude for Dublin
        const dateFrom = "2023-01-01";
        const dateTo = "2023-12-31";
        const capacity = 1; // Installed capacity in MW
        const systemLoss = 10; // System losses in percentage
        const tracking = 0; // Fixed solar panels

        const apiUrl = `https://www.renewables.ninja/api/data/solar?lat=${lat}&lon=${lon}&date_from=${dateFrom}&date_to=${dateTo}&capacity=${capacity}&system_loss=${systemLoss}&tracking=${tracking}&token=${apiToken}`;

        const response = await axios.get(apiUrl);
        const json = response.data;
        console.log("API Response:", json); // Log the response for debugging

        // Format the data for the chart
        const formattedData = json.data.map((item) => ({
          date: item.date,
          solar_generation: item.solar_generation,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching solar data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <h2>Solar Energy Generation in Ireland</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="solar_generation" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Solar;