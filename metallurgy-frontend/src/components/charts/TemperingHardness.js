import { ScatterChart, Tooltip, CartesianGrid, XAxis, Label, YAxis, Scatter, Legend, ResponsiveContainer } from 'recharts';
import './ChartGeneric.css'


export default function TemperingHardnessChart( { data } ) {

  const unrolledData = []

  data.steel.forEach( steel => {
    steel.samples.forEach( sample => {
      unrolledData.push( {
        id: sample.id,
        name: steel.name,
        hardness: sample.hardness,
        temperingTemperature: sample.hardening_heat_treat.temper_temperature,
      } )
    } )
  } )

 return (
    <ResponsiveContainer width="100%" aspect={1.25}>
      <ScatterChart
        data={unrolledData}
        margin={{ top: 20, right: 10, bottom: 20, left: 20 }}
      >

        <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
        <XAxis dataKey="temperingTemperature"
          type="number"
          domain={['auto', 'auto']}
          tick={{ fill: "#212121" }} tickLine={{ stroke: "#000000" }}
          unit="°F">
          <Label value="Tempering Temperature" position="bottom" offset={0} />
        </XAxis>
        <YAxis dataKey="hardness" unit="HRC" domain={['auto','auto']} >
          <Label value="Hardness" position="left" angle="-90" />
        </YAxis>
        <Tooltip />

        {legend( data )}
        
        {allSeries(data)}
        

      </ScatterChart>
    </ResponsiveContainer>
  )

  function legend( data ) {
    if (data.steel.length > 1) {
      return (
        <Legend layout="vertical" verticalAlign="top" align="right" margin={{ left: 12 }} />
      )
    }
  }

  function allSeries( data ) {

    const scatterDatum = []

    data.steel.forEach(steel => {

      const steelSeriesData = []

      steel.samples.forEach(sample => {

        steelSeriesData.push({
          id: sample.id,
          name: steel.name,
          hardness: sample.hardness,
          temperingTemperature: sample.hardening_heat_treat.temper_temperature,
        })
      })

      const fillColor = steel.id.substring(0, 6)
      scatterDatum.push( 
        <Scatter name={steel.name} data={steelSeriesData} fill={'#' + fillColor} line={true} lineType="fitting" />
      )
    })

    return scatterDatum
 
  }

}
