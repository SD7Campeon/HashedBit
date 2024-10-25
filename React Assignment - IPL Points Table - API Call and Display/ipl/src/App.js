import React, { useEffect, useState } from 'react';

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);
  const apiUrl = 'https://my-json-server.typicode.com/FreSauce/json-ipl/data';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Log data structure to confirm field names
        console.log('Fetched data:', data);
        
        // Sort the data by NRR in ascending order
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>IPL Season 2022 Points Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#87A2FF', color: '#FFF' }}>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Rank</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Team</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Played</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Won</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Lost</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>NRR</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id} style={{ backgroundColor: index % 2 === 0 ? '#C4D7FF' : '#FFF4B5' }}>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{team.team || team.Team}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>{team.played || team.Played || team.matches || team.Matches}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>{team.won || team.Won}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>{team.lost || team.Lost}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>{team.NRR}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>{team.points || team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLPointsTable;
