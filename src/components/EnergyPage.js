import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const EnergyPage = ({ title, imageSrc, description, sourceLink }) => {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiToken = "6cdbe1a474b9b25d3527fa18f508be6d8577ecb9"; // API token
        const countryCode = "IE"; // Country code for Ireland

        const apiUrl = `https://www.renewables.ninja/api/countries/${countryCode}?token=${apiToken}&capacity=1`;

        // CORS proxy
        const proxyUrl = "https://corsproxy.io/?url=";
        const response = await axios.get(proxyUrl + encodeURIComponent(apiUrl));
        const json = response.data;

        // Format data
        const formattedData = json.chart_data.map((item) => ({
          year: item.date.split("-")[0], // Year
          solar: item["pv_merra-2"], // Solar
          windOnshore: item["wind_current_merra-2_onshore"], // Wind onshore
          windOffshore: item["wind_current_merra-2_offshore"], // Wind offshore
        }));
        setEnergyData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to format Y-axis ticks as percentages
  const formatYAxisTick = (value) => {
    return `${(value * 100).toFixed(0)}%`; // Convert decimal to percentage
  };

  // Calculate the maximum value in the dataset for Y-axis synchronization
  const maxValue = Math.max(
    ...energyData.map((item) => Math.max(item.solar, item.windOnshore, item.windOffshore))
  );

  // Add a 5% buffer to the maxValue
  const maxValueWithBuffer = maxValue * 1.05;

  return (
    <div className="page">
      <h2>{title}</h2>
      <img src={imageSrc} alt={title} />
      <br />
      <br />
      <div class="description" dangerouslySetInnerHTML={{ __html: description }} />
      <p style={{ textAlign: "right" }}>
        <i>Source: </i>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          <i>{sourceLink}</i>
        </a>
      </p>

      <h3>Average annual capacity factors for PV and wind in Ireland</h3>
      <h6>Source: <a href="https://www.renewables.ninja/" target="_blank" rel="noopener noreferrer">
          <i>https://www.renewables.ninja/</i>
        </a></h6>
      <ResponsiveContainer width="60%" height={400}>
        <LineChart data={energyData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis
            yAxisId="left"
            tickFormatter={formatYAxisTick} // Format left Y-axis as percentage
            domain={[0, maxValueWithBuffer]} // Apply buffer to Y-axis range
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={formatYAxisTick} // Format right Y-axis as percentage
            domain={[0, maxValueWithBuffer]} // Apply buffer to Y-axis range
          />
          <Tooltip
            formatter={(value) => `${(value * 100).toFixed(2)}%`} // Format tooltip as percentage
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="solar"
            stroke="#D77530"
            name="Solar (PV)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="windOnshore"
            stroke="#3D5E9C"
            name="Wind Onshore"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="windOffshore"
            stroke="#6A9DC5"
            name="Wind Offshore"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyPage;