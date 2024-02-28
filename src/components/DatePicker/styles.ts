import DatePicker from 'react-multi-date-picker';
import styled from 'styled-components';
import { getTheme, pxToRem } from '@platformbuilders/theme-toolkit';

const fontSizeSm = getTheme('fontSizes.sm');
const backgroundZ0 = getTheme('background.z0');
const colorBrandPrimaryMain = getTheme('brand.primary.main');
const colorBrandPrimaryContrast = getTheme('brand.primary.contrast');
const colorTextMain = getTheme('text.main');
const spacingSm = getTheme('spacing.sm');

export const CustomCalendar = styled(DatePicker)`
  &.custom-date-picker {
    margin-top: ${pxToRem(-18)};
    .rmdp-ym {
      flex-direction: row;
    }
    .rmdp-input {
      cursor: pointer;
    }
    .rmdp-header div {
      flex-direction: row;
    }
    .rmdp-header-values {
      margin-left: ${pxToRem(5)};
      font-size: ${fontSizeSm}px;
      font-weight: 700;
      color: ${colorTextMain};
      flex-direction: row;
    }
    .rmdp-arrow-container {
      padding-top: ${pxToRem(2)};
      &:hover {
        background-color: ${colorBrandPrimaryMain};
        box-shadow: none;
        > i {
          border: solid ${colorBrandPrimaryContrast};
          border-width: 0 ${pxToRem(2)} ${pxToRem(2)} 0;
        }
      }
    }
    .rmdp-arrow {
      border: solid ${colorBrandPrimaryMain};
      border-width: 0 ${pxToRem(2)} ${pxToRem(2)} 0;
    }
    .rmdp-left {
      padding-right: ${pxToRem(2)};
    }
    .rmdp-right {
      padding-left: ${pxToRem(1)};
    }
    .rmdp-arrow {
      color: ${colorBrandPrimaryMain};
    }
    .rmdp-week {
      margin: ${spacingSm} 0;
      flex-direction: row;
    }
    .rmdp-week-day {
      color: ${colorTextMain};
      font-weight: 700;
    }
    .rmdp-day {
      &:hover {
        .span {
          background-color: ${colorBrandPrimaryMain}10;
        }
      }
    }
    .rmdp-day span {
      &:hover {
        background-color: ${colorBrandPrimaryMain};
      }
    }
    .rmdp-day.rmdp-today span {
      background-color: ${backgroundZ0}20;
      color: ${colorTextMain};
      &:hover {
        background-color: ${colorBrandPrimaryMain};
        color: ${colorBrandPrimaryContrast};
      }
    }
    .rmdp-day.rmdp-selected span:not(.highlight) {
      background-color: ${colorBrandPrimaryMain};
      color: ${colorBrandPrimaryContrast};
    }
  }
`;
