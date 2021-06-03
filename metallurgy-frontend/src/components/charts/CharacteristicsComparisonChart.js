import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
import './ChartGeneric.css'


export default function CharacteristicsComparisonChart({ data }) {

  // TODO : need to convert all facets to a common scale (percentile)
  // alternately, a different chart. ie box-and whiskers for quartiles. But this isn't supported by recharts yet.
  const radarData = [
    {
      "facet": "Toughness",
      "minimums": 8,
      "maximums": 100,
      "thissteel": 13
    },
    {
      "facet": "Hardness",
      "minimums": 48,
      "maximums": 100,
      "thissteel": 58
    },
    {
      "facet": "Cutting Performance",
      "minimums": 20,
      "maximums": 100,
      "thissteel": 70
    }
    
  ]

  

  return (
    <ResponsiveContainer width="100%" aspect={1.25}>
      <RadarChart
        data={radarData}
        margin={{ top: 20, right: 10, bottom: 20, left: 20 }}
      >

        <PolarGrid />
        <PolarAngleAxis dataKey="facet" />
        <PolarRadiusAxis type="number" angle={90} domain={[0, 100]} />
        {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}

        <Legend />

        <Radar name="This Steel" dataKey="thissteel" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        {/* <Radar name="Minimums" dataKey="minimums" stroke="#8884d8" fill="#222222" fillOpacity={0.3} /> */}
        {/* <Radar name="Maximums" dataKey="maximums" stroke="#8884d8" fill="#AA0000" fillOpacity={0.3} /> */}


      </RadarChart>
    </ResponsiveContainer>
  )


}
