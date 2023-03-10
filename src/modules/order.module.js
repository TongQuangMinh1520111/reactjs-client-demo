import axios from "axios";

const OrderModule = {
  oderProduct: async (order) => {
    try {
      let orderproduct = await axios.post("https://nodejs-server-demo.herokuapp.com/api/order", order);
      if (orderproduct) {
        return {
          success: true,
        };
      } else {
        return {
          success: false,
          errMsg: "order khoong thanh cong "
        };
      }
    } catch (err) {
      return {
        success: false
      }
    }
  }
};
export default OrderModule;
