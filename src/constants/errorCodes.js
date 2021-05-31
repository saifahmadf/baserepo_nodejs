import { OK, BAD_REQUEST, UNAUTHORIZED, FORBIDDEN } from "http-status";

export const errorCodes = {
  EMAIL_ALREADY_EXISTS: {
    code: 'email_already_exist',
    status: OK
  },
  INVALID_REQUEST: {
    code: 'Invalid_Request',
    status: BAD_REQUEST
  },
  INVALID_USER_PASSSWORD: {
    code: 'invalid_user_password',
    status: FORBIDDEN
  },
  EMAIL_NOT_VERIFIED: {
    code: 'email_not_verified',
    status: UNAUTHORIZED
  },
  UNAUTHORIZED_REQUEST: {
    code: 'unauthorized',
    status: UNAUTHORIZED
  },
  RUNTIME_ERROR: {
    code: 400,
    status: BAD_REQUEST
  },
  RATELIMIT_ERROR: {
    code: 'RATELIMIT_ERROR',
    status: BAD_REQUEST
  },
  INTERNAL_SERVER_ERROR: {
    code: 'SERVER_ERROR',
    status: BAD_REQUEST
  },
  RESOURCE_NOT_FOUND: {
    code: 'resource_not_found',
    status: BAD_REQUEST
  },
  NOT_FOUND_ERROR: {
    code: 404,
    status: BAD_REQUEST
  }
}