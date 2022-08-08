const parseAccount = (account) => {
  return account.slice(0, 10) + "...";
};

export default parseAccount;
