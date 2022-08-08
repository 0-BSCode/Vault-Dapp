const validateAmount = (amount) => {
  return amount.length > 0 && !isNaN(amount) && amount >= 0;
};

export default validateAmount;
