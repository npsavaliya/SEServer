const data = require('../Fixtures/data.json');

module.exports = {
    Query: {
        allFlourmills: () => data,
        commercialFlourmills: () => data.commercial,
        domesticFlourmills: () => data.domestic,
        midRangeStoneFlourmills: () => data.commercial.flourmill_With_Mid_Range_Stone,
        largeRangeStoneFlourmills: () => data.commercial.flourmill_With_Large_Range_Stone,
        dspDsspFlourmills: () => data.commercial.flourmill_DSP_DSSP,
        pulverizerFlourmills: () => data.commercial.pulverizer,
        tableTopFlourmills: () => data.domestic.table_Top,
        stonelessFlourmills: () => data.domestic.stoneless,
        midRangeStoneFlourmillData: (_, { id }, { dataSources }) => {
            const filterList = data?.commercial?.flourmill_With_Mid_Range_Stone?.data?.filter?.((e, idx) => e.id === id);
            if((filterList?.length ?? 0) === 1) {
                return filterList[0]
            }
            return null;
        },
        largeRangeStoneFlourmillData: (_, { id }, { dataSources }) => {
            const filterList = data?.commercial?.flourmill_With_Large_Range_Stone?.data?.filter?.((e, idx) => e.id === id);
            if((filterList?.length ?? 0) === 1) {
                return filterList[0]
            }
            return null;
        },
        dspDsspFlourmillData: (_, { id }, { dataSources }) => {
            const filterList = data?.commercial?.flourmill_DSP_DSSP?.data?.filter?.((e, idx) => e.id === id);
            if((filterList?.length ?? 0) === 1) {
                return filterList[0]
            }
            return null;
        },
        pulverizerFlourmillData: (_, { id }, { dataSources }) => {
            const filterList = data?.commercial?.pulverizer?.data?.filter?.((e, idx) => e.id === id);
            if((filterList?.length ?? 0) === 1) {
                return filterList[0]
            }
            return null;
        },
        tableTopFlourmillData: (_, { id }, { dataSources }) => {
            const filterList = data?.domestic?.table_Top?.data?.filter?.((e, idx) => e.id === id);
            if((filterList?.length ?? 0) === 1) {
                return filterList[0]
            }
            return null;
        },
        stonelessFlourmillData: (_, { id }, { dataSources }) => {
            const filterList = data?.domestic?.stoneless?.data?.filter?.((e, idx) => e.id === id);
            if((filterList?.length ?? 0) === 1) {
                return filterList[0]
            }
            return null;
        },
      },
};

