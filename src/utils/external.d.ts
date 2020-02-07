declare module '*.png';
declare module '*.jpg';

declare module '@fnando/cpf' {
  const BLACKLIST: string[];

  const STRICT_STRIP_REGEX: RegExp;
  const LOO_STRIP_REGEX: RegExp;

  export function verifierDigit(numbers: string): number;

  export function format(cpf: string): string;

  export function strip(cpf: string, isStrict: boolean): string;

  export function isValid(cpf: string, isStrict: boolean): boolean;

  export function generate(useFormat: boolean): string;
}

declare module '@fnando/cnpj' {
  const BLACKLIST: string[];
  const STRIC_STRIP_REGEX: RegExp;
  const LOOSE_STRIP_REGEX: RegExp;

  export function verifierDigit(numbers: string): number;

  export function format(cnpj: string): string;

  export function strip(cnpj: string, isStrict: boolean): string;

  export function isValid(cnpj: string, isStrict: boolean): string;

  export function generate(useFormat: boolean): string;
}
