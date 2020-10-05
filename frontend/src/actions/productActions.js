import axios from 'axios'

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

export const listProducts = () => async (dispath) => {
  try {
    dispath({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products')

    dispath({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.reponse.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
