// @flow
import React from 'react';
import getArrayValueFromPercent from '../../lib/getArrayValueFromPercent';
import createInlineSVG from './createInlineSVG';

type StyledRangeProps = {|
  sliderIcons: string[],
  hasChanged: boolean,
  idleSlider?: string,
  value: number,
  max: number,
  min: number,
  step: number,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  onBlur: (SyntheticFocusEvent<HTMLInputElement>) => void,
|};

const StyledRange = ({
  hasChanged = false,
  idleSlider = '😴',
  max = 100,
  min = 0,
  sliderIcons = ['😳'],
  step = 1,
  value,
  onChange,
  onBlur,
}: StyledRangeProps) => {
  const icon = hasChanged
    ? getArrayValueFromPercent(value, sliderIcons)
    : idleSlider;

  return (
    <>
      <style data-description="dynamic styles" jsx>{`
      input::-webkit-slider-thumb {
                background-image: url('${createInlineSVG(icon)}');
      }
    `}</style>
      <style jsx>{`
        input {
          -webkit-appearance: none;
          background: none;
          width: 100%;
          height: 10px;
          margin: 0px 0px;
        }
        input::-webkit-slider-thumb {
          -webkit-appearance: none;
          background-size: contain;
          background-repeat: no-repeat;
          border-radius: 100%;
          cursor: pointer;
          height: 2em;
          width: 2em;
          margin-top: -0.2em;
          position: relative;
          transition: all 0.1s linear;
        }
        input:focus {
          outline: 0;
        }
        input:focus::-webkit-slider-thumb {
          box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.04);
          transform: translateY(-2px);
        }
      `}</style>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input
        max={max}
        min={min}
        step={step}
        type="range"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default StyledRange;
