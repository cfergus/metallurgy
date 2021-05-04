# Future build out and ideas

Units - ft/lbs vs joules, C vs F temp.

Enums? image types, url types

Search capability, especially across Steel names

## Possible new fields and relationships

sample
  Dimensions - how to represent
  wear resistance 
  micrograph images - https://via.placeholder.com/150
    * as array relation, with types (type="micrograph")
  % carbide volume?
  corrosion resistance
  sharpenability / wear resistance
  
Steel
  Composition?
  Tags[]
  Articles, hrefs with rel
 
Equations, such as cementite https://knifesteelnerds.com/2018/11/19/steel-edge-retention/

# Actions

Connect up test gql to graph. Make sure it stays reactive.
  Might need to use state : https://www.apollographql.com/docs/tutorial/local-state/
  Might need to redo the dang dependencies: https://www.apollographql.com/blog/getting-started-with-apollo-client-in-next-js/

Figure out env vars
  .env.local?
  docker-compose -> docker
  build, or runtime? In dev vs prod

Updates
* frontend - warn  - React 17.0.1 or newer will be required to leverage all of the upcoming features in Next.js 11. Read more: https://err.sh/next.js/react-version
* Use hasura 2 when released

Production build
  https://nextjs.org/docs/deployment

# Vizualizations

## Common charts

X: Tempering temp
Y: Toughness

X: Tempering temp
Y: Hardness

X: Aus temper
Y: Hardness
Series: (by tempering temperature

X: Hardness (HRC) 
Y: toughness (ft-lbs)
Series: Aus + Temper temperatures (ie 1500 , 450 )

(less common)
X: hold time
Y: toughness

Radar chart of characteristics relative to context

## Features

Trend lines using spline etc (line fit for scatter)

Filtering based on selectors, context, search, etc

# Filtering

For various views, how to filter to only the information of interest. Examples:
* Stainless
* High alloy
* Custom group

May want to compare A vs B as groups. Use colors to distinguish a series. 

Suggest tag arrays for steel types

# Input

For start, use hasura console
Later, could try to recreate console style? Ex: https://github.com/hasura/graphql-engine/tree/master/console/src/components/Services/Data/TableInsertItem

Otherwise, a custom form

# DEV ideas

Typescript for frontend? https://nextjs.org/docs/basic-features/typescript
