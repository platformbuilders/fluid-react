import { RSA, RSAKeychain } from 'react-native-rsa-native';
import * as Keychain from 'react-native-keychain';
import { AsyncStorage } from '~/utils/modules';

export const signMessage = async (
  keyTag: string,
  message: string,
): Promise<any> => RSAKeychain.sign(message, keyTag);

export const encryptWithHeader = async (
  key: string,
  message: string,
): Promise<any> => {
  const keyHeader = '-----BEGIN PUBLIC KEY-----';
  const keyFooter = '-----END PUBLIC KEY-----';
  const lineBreak = '\r\n';
  const publick = `${keyHeader}${lineBreak}${key}${lineBreak}${keyFooter}`;
  return RSA.encrypt(message, publick);
};

export const clearKey = async (): Promise<any> => {
  try {
    await AsyncStorage.removeItem('@token');
  } catch (error) {
    return error;
  }
};

export const createKeys = (keyTag: string): any => {
  const size = 2048;
  return RSAKeychain.generate(keyTag, size);
};

export const getKey = (): any => Keychain.getGenericPassword();

export const hasSetKey = async (): Promise<boolean> => {
  const key = await Keychain.getGenericPassword();
  return key && key.username === 'keyPayment';
};

export const saveKey = (publicKey: string): any => {
  const newPublic = publicKey
    .replace('-----BEGIN RSA PUBLIC KEY-----', '')
    .replace('-----END RSA PUBLIC KEY-----', '')
    .replace(/(\r\n|\n|\r)/gm, '');
  return Keychain.setGenericPassword('keyPayment', newPublic);
};

export const getKeyGeneric = (): any => Keychain.getGenericPassword();
