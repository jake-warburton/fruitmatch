export const UpdateCustomer = (newCustomer) => {
  return {
    type: 'UPDATE_CUSTOMER',
    customer: newCustomer,
  };
};
