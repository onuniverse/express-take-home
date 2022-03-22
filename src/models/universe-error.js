class UniverseError extends Error {
  static badRequest(message, canRetry, contactSupport) {
    return new UniverseError(
      400,
      message || "Bad request",
      canRetry,
      contactSupport
    );
  }
  static unauthorized(message, canRetry, contactSupport) {
    return new UniverseError(
      401,
      message || "Unauthorized",
      canRetry,
      contactSupport
    );
  }
  static forbidden(message, canRetry, contactSupport) {
    return new UniverseError(
      403,
      message || "Forbidden",
      canRetry,
      contactSupport
    );
  }
  static notFound(message, canRetry, contactSupport) {
    return new UniverseError(
      404,
      message || "Not found",
      canRetry,
      contactSupport
    );
  }
  static conflict(message, canRetry, contactSupport) {
    return new UniverseError(
      409,
      message || "Conflict",
      canRetry,
      contactSupport
    );
  }
  static gone(message, canRetry, contactSupport) {
    return new UniverseError(410, message || "Gone", canRetry, contactSupport);
  }
  static unprocessable(message, canRetry, contactSupport) {
    return new UniverseError(
      422,
      message || "Unprocessable entity",
      canRetry,
      contactSupport
    );
  }
  static internalError(message, canRetry, contactSupport) {
    return new UniverseError(
      500,
      message || "Internal error",
      canRetry,
      contactSupport
    );
  }
  static badGateway(message, canRetry, contactSupport) {
    return new UniverseError(
      502,
      message || "Bad gateway",
      canRetry,
      contactSupport
    );
  }

  constructor(code, message, canRetry, contactSupport) {
    super(message);

    this.statusCode = code;
    this.canRetry = canRetry === undefined ? code >= 500 : canRetry;
    this.contactSupport = contactSupport === undefined ? true : contactSupport;
  }
}

module.exports = UniverseError;
