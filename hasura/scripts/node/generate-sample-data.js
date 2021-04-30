
const fetch = require("node-fetch");

// For now, just 3 tempering alternatives
// Later, could do different regiments
sampleHeatTreats = () => {
  return `
  mutation HTMutation {
    insert_hardening_heat_treat(objects: 
      [
        {austenitization_hold_time: "20 minutes", austenitization_temperature: "1875", temper_cycles: 2, temper_hold_time: "2 hours", temper_temperature: "325"},
        {austenitization_hold_time: "20 minutes", austenitization_temperature: "1875", temper_cycles: 2, temper_hold_time: "2 hours", temper_temperature: "350"},
        {austenitization_hold_time: "20 minutes", austenitization_temperature: "1875", temper_cycles: 2, temper_hold_time: "2 hours", temper_temperature: "375"},        
      ]) {
      returning {
        id
      }
    }
  }
  `
}

sampleSteels = () =>  {
  return `
  mutation SteelMutation {
    insert_steel(objects: [
      { name: "8670" },
      { name: "5160" },
      { name: "L6" },
      { name: "80CrV2" },
      { name: "1084" },
      { name: "52100" },
      { name: "O1" },
      { name: "1095" },
      { name: "26C3" },
      { name: "CruForgeV" },
      { name: "3V" },
      { name: "Z-Tuff" },
      { name: "CPM-M4" },
      { name: "10V" },
      { name: "AEB-L" },
      { name: "Z-Finit" },
      { name: "NioMax" },
      { name: "19C27" },
      { name: "MagnaCut" },
      { name: "Nitro-V" },
      { name: "S35VN" },
      { name: "S45VN" },
      { name: "S60V" },
      { name: "CPM-154" },
      { name: "VG10" },
      { name: "Vanax" }
    ]) {
      returning {
        id
      }
    }
  }
  `
}



submitRequest = (query) => {

  return fetch('http://localhost:8080/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify( { query: query } )
  })
  .then( r => r.json() )
  .then( r => {
    if( r.errors ) {
      console.warn( r.errors )
    }
    return r;
  })
  .then( d => d.data )
  .catch( err => console.warn( err ) )
}


driver = async() => {
  const htIds = await submitRequest( sampleHeatTreats() )
    .then( htRes => {
      return htRes.insert_hardening_heat_treat.returning
    })

  const steelIds = await submitRequest( sampleSteels() )
    .then( steelRes => {
      return steelRes.insert_steel.returning
    })

  steelIds.forEach( sId => {
    
    const hardest = 60 + Math.random() * 10
    const weakest = 5 + Math.random() * 5

    htIds.forEach( (htId, index) => {
      const hardness = hardest - (index * 2 + Math.random() * 2 )
      const toughness = weakest + (index * Math.random() * 3 ) // could be jittery

      const sampleRequest = `
        mutation SampleMutation {
          insert_sample_one( object: {
            hardness: ${hardness},
            toughness: ${toughness},
            steel_id: "${sId.id}",
            hardening_heat_treat_id: "${htId.id}"
          } ) {
            id
          }
        }
      `

      const res = submitRequest( sampleRequest )
      // ignore response for now
    } )

  })


}


(async () => {
  driver();

})()