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
  Composition? (typical chemistry, allowed deviation?)
  Tags[]
  Articles, hrefs with rel
 
Equations, such as cementite https://knifesteelnerds.com/2018/11/19/steel-edge-retention/

# Actions

Figure out env vars
  .env.local?
  docker-compose -> docker
  build, or runtime? In dev vs prod

Updates
* Use hasura 2 when released

Production build


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

X: Catra Edge retention (mm)
Y: Toughhness

(less common)
X: hold time
Y: toughness

Radar chart of characteristics relative to context

Samples by type

## Tables

Chemical composition

tempering time

## Features

Trend lines using spline etc (line fit for scatter)

Filtering based on selectors, context, search, etc

Consistent color for steel, etc. UUID to color?

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
