import React from "react";

import './icons-styles.css'

export const LinkedIn = () => {
  return (
    <a href="www.linkedin.com/in/farida-a-" target="blank">
      <svg
        //   height="50"
        viewBox="0 0 512 512"
        //   width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
      </svg>
    </a>

  );
};

export const Github = ({link}) => {
  return (
    <a href={link} target="blank">
      <svg
        id="Bold"
        enableBackground="new 0 0 24 24"
        //   height="50"
        viewBox="0 0 24 24"
        //   width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
      </svg>
    </a>

  );
};

export const Email = () => {
  return (
    <a href="mailto: faridaalin8@gmail.com" target="blank">
      <svg
        //   height="50"
        viewBox="0 0 448 448"
        //   width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m314.375 144h-180.75l90.375 77.464844zm0 0" />
        <path d="m224 240c-1.910156 0-3.757812-.683594-5.207031-1.929688l-98.792969-84.679687v150.609375h208v-150.609375l-98.792969 84.679687c-1.449219 1.246094-3.296875 1.929688-5.207031 1.929688zm0 0" />
        <path d="m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.140625-123.652344-100.347656-223.859375-224-224zm120 312c0 4.417969-3.582031 8-8 8h-224c-4.417969 0-8-3.582031-8-8v-176c0-4.417969 3.582031-8 8-8h224c4.417969 0 8 3.582031 8 8zm0 0" />
      </svg>
    </a>

  );
};
