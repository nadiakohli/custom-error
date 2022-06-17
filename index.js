class BaseError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'BaseError';
  }
};

class BadInputError extends BaseError {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'BadInputError';
  }
};

class WrongCredentials extends BaseError {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'WrongCredentials';
  }
};

(() => {
  try {
     mnklnkn
  } catch ({ message }) {
    throw new WrongCredentials(message, 'Error with login field');
  }
})();