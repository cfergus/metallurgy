import { ScatterChart, Tooltip, CartesianGrid, XAxis, Label, YAxis, Scatter, Legend } from 'recharts';

export default function ToughnessHardnessChart( { data } ) {

  const unrolledData = []

  data.steel.forEach( steel => {
    steel.samples.forEach( sample => {
      unrolledData.push( {
        id: sample.id,
        name: steel.name,
        hardness: sample.hardness,
        toughness: sample.toughness
      } )
    } )
  } )


  console.log( unrolledData )

  /*
  For font, consider global CSS
  https://github.com/recharts/recharts/issues/628
  svg.recharts-surface tspan {
    font-size: 0.8rem !important;
    color: black !important;
    font-family:  Roboto;
  }


  */

  // <ResponsiveContainer width={700} height="80%">
  return (
    <div>
      <ScatterChart
        width={800}
        height={600}
        data={unrolledData}
        margin={{ top: 20, right: 10, bottom: 20, left: 200 }}
      >

        <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
        <XAxis dataKey="toughness"
          type="number"
          domain={['auto', 'auto']}
          tick={{ fill: "#212121" }} tickLine={{ stroke: "#000000" }}
          fontFamily={'Roboto, sans-serif'}
          unit="ft/lb">
          <Label value="Toughness" position="bottom" offset={0} fontFamily={'Roboto, sans-serif'} />
        </XAxis>
        <YAxis dataKey="hardness" unit="HRC" domain={['auto','auto']} fontFamily={'Roboto, sans-serif'}>
          <Label value="Hardness" position="left" angle="-90" fontFamily={'Roboto, sans-serif'}/>
        </YAxis>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="top" align="right" margin={ {left: 12 } } />

        {data.steel.map(asScatterSeries)}

      </ScatterChart>
    </div>
  )


  function asScatterSeries( steel ) {
    const fillColor = steel.id.substring(0,6)
    return <Scatter name={steel.name} data={steel.samples} fill={'#' + fillColor} line={true} lineType="fitting" />
  }
  /*
  Some alternatives
    domain={['dataMin', 'dataMax']}
    unit="°F" (on xaxis)
    <Legend layout="vertical" wrapperStyle="right" />
    https://recharts.org/en-US/examples/LegendEffectOpacity - to help guide a user to the chart
  */
}
