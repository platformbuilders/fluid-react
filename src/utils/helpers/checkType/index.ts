type Param = string | boolean | undefined;

const ObjectType = {
  STRING: '[object String]',
};

const getType = (value: any): string => {
  return Object.prototype.toString.call(value);
};

export const isString = (value: Param): boolean =>
  getType(value) === ObjectType.STRING;
