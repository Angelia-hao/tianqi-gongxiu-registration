import { gql } from '@apollo/client';

export const WHITELIST_BY_TIANQI = gql`
  query WhitelistByTianqi($where: ud_baomingbaimingdan_de4adc_bool_exp!) {
    ud_baomingbaimingdan_de4adc(where: $where, limit: 1) {
      id
      ud_shenfen_f01e46
    }
  }
`;
