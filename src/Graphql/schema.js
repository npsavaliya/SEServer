const { gql } = require('apollo-server');

const typeDefs = gql`
  type Flourmills {
    commercial: Commercial
    domestic: Domestic
  }

  type Commercial {
    flourmill_With_Mid_Range_Stone: Flourmill_With_Mid_Range_Stone
    flourmill_With_Large_Range_Stone: Flourmill_With_Large_Range_Stone
    flourmill_DSP_DSSP: Flourmill_DSP_DSSP
    pulverizer: Pulverizer
  }

  type Flourmill_With_Mid_Range_Stone {
    models: [String]
    data: [Flourmill_With_Mid_Range_Stone_Data]
  }

  type Data {
    name: String
    value: String
  }

  type Flourmill_With_Mid_Range_Stone_Data {
    id: String!
    name: Data
    grindingStone: Data
    electricMotorCapacity: Data
    powerConsumption: Data
    vBeltSize: Data
    shaftSize: Data
    bearingSize: Data
    grindingCapacity: Data
  }

  type Flourmill_With_Large_Range_Stone {
    models: [String]
    data: [Flourmill_With_Large_Range_Stone_Data]
  }

  type Flourmill_With_Large_Range_Stone_Data {
    id: String!
    name: Data
    grindingStone: Data
    electricMotorCapacity: Data
    pulleySize: Data
    pulleyKeySize: Data
    bearingSizeCover: Data
    bearingSizeBracket: Data
    shaftSize: Data
    shaftKeySlotSize: Data
    grindingCapacity: Data
  }

  type Flourmill_DSP_DSSP {
    models: [String]
    data: [Flourmill_DSP_DSSP_Data]
  }

  type Flourmill_DSP_DSSP_Data {
    id: String!
    name: Data
    grindingStone: Data
    electricMotorCapacity: Data
    flourmillPulleySize: Data
    motorPulleySize: Data
    bearingSize: Data
    shaftSize: Data
    grindingCapacity: Data
  }

  type Pulverizer {
    models: [String]
    data: [Pulverizer_Data]
  }

  type Pulverizer_Data {
    id: String!
    name: Data
    electricMotorCapacity: Data
    singleChamberSize: Data
    hopperSize: Data
    weight: Data
    machineSize: Data
    grindingCapacity: GrindingCapacityData
  }

  type GrindingCapacityData {
    name: String
    value: [Data]
  }

  type Domestic {
    table_Top: Table_Top
    stoneless: Stoneless
  }

  type Table_Top {
    models: [String]
    data: [Table_Top_Data]
  }

  type Table_Top_Data {
    id: String!
    name: Data
    grindingStone: Data
    weight: Data
    machineSize: Data
    electricMotorCapacity: Data
    grindingCapacity: GrindingCapacityData
  }

  type Stoneless {
    models: [String]
    data: [Stoneless_Data]
  }

  type Stoneless_Data {
    id: String!
    name: Data
    electricMotorCapacity: Data
    powerSupply: Data
    electricConsumption: Data
    weight: Data
    machineSize: Data
    grindingCapacity: GrindingCapacityData
  }

  type Query {
    allFlourmills: Flourmills
    commercialFlourmills: Commercial
    domesticFlourmills: Domestic
    midRangeStoneFlourmills: Flourmill_With_Mid_Range_Stone
    largeRangeStoneFlourmills: Flourmill_With_Large_Range_Stone
    dspDsspFlourmills: Flourmill_DSP_DSSP
    pulverizerFlourmills: Pulverizer 
    tableTopFlourmills: Table_Top
    stonelessFlourmills: Stoneless
    midRangeStoneFlourmillData(id: String!): Flourmill_With_Mid_Range_Stone_Data
    largeRangeStoneFlourmillData(id: String!): Flourmill_With_Large_Range_Stone_Data
    dspDsspFlourmillData(id: String!): Flourmill_DSP_DSSP_Data
    pulverizerFlourmillData(id: String!): Pulverizer_Data
    tableTopFlourmillData(id: String!): Table_Top_Data
    stonelessFlourmillData(id: String!): Stoneless_Data
  }

`;

module.exports = typeDefs;
