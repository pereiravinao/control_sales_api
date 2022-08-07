export const ERROR_STATUS = {
  BAD_REQUEST: {status: 400, message: 'Bad requestRequest'},
  CONFLICT: {status: 409, message: 'Conflict'},
  UNAUTHORIZED: {status: 401, message: 'Unauthorized'},
  METHOD_NOT_ALLOWED: {status: 405, message: 'Method Not Allowed'},
}

export const READY_STATUS = {
  CREATED: {status: 201, message: 'Created'},
  OK: {status: 200, message: 'Ok'},
}