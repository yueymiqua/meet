import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const colors = ['#e3fdfd', '#cbf1f5', '#a6e3e9', '#71c9ce', '#30e3ca']
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
        return { name: genre, value };
      })
    return data.filter((data) => data.value >= 1);
  };

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % colors.length]}
            name={entry.name}
          />
        ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;