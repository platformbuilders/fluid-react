import { PopperProps } from '@material-ui/core';
import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteGetTagProps,
  AutocompleteRenderGroupParams,
  AutocompleteRenderInputParams,
  Value,
} from '@material-ui/lab';

declare global {
  namespace PropsAutocomplete {
    export type {
      AutocompleteChangeDetails,
      AutocompleteChangeReason,
      AutocompleteGetTagProps,
      AutocompleteRenderGroupParams,
      AutocompleteRenderInputParams,
      PopperProps,
      Value,
    };
  }
}