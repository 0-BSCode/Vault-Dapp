const parseRevertMessage = (errorMessage) => {
  return errorMessage.data.message.split("revert")[1];
};

export default parseRevertMessage;
