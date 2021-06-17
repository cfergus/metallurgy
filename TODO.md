# Feature build out and ideas

* Units - ft/lbs vs joules, C vs F temp.
* Images with types. Micrograph, corrosion sample, etc.
* Search capability, especially across Steel names
* Trend lines using splines or otherwise (line fit for scatter)
* Filtering based on selectors, context, search, etc (see Filtering, below)
* Consistent color for steel, etc. UUID to color? Currently hashing

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

## Filtering

For various views, how to filter to only the information of interest. Examples:
* Stainless
* High alloy
* Custom group

May want to compare A vs B as groups. Use colors to distinguish a series. 

## Charts

X: Aus temper
Y: Hardness
Series: (by tempering temperature

X: Hardness (HRC) 
Y: toughness (ft-lbs)
Series: Aus + Temper temperatures (ie 1500 , 450 )

X: Catra Edge retention (mm)
Y: Toughhness

_less common_
X: hold time
Y: toughness


## Tables

* Chemical composition
* tempering time

## Other metrics

* Number of samples by type


# Developer Actions

## Env

Figure out env vars
  .env.local?
  docker-compose -> docker
  build, or runtime? In dev vs prod

Updates
* Use hasura 2 when released

Production build

## Input

How should new data be inserted and managed?

For start, use hasura console
Later, could try to recreate console style? Ex: https://github.com/hasura/graphql-engine/tree/master/console/src/components/Services/Data/TableInsertItem

Otherwise, a custom form could be created to simplify input

Consider backup, export, and other aspects.

## Bugs

* Hide menu button when full screen, or change behavior

## Tech and dependencies

* Typescript for frontend? https://nextjs.org/docs/basic-features/typescript
