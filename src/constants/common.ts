export enum MessageException {
  USER_NOT_EXISTED = 'User not existed',
}

export enum APIPrefix {
  VERSION = 'api/v1',
}

// secret key should be stored in environment variable
export const jwtConstants = {
  secret: 'secretKey',
};
