import axios from 'axios';

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization:'Bearer Y3I-NPtCqmKOfQqqoVcNIHeBscwwoy8X1AAoQqcW0ldwuyhPiQHW28pAXrfJ3I5x8ZovrcW9kL-EY5p6KzmVG71Yk55Lp_2_Vbr4NFO2ORE0CO2UJNMuYSNnOdB-XnYx'
  }
})