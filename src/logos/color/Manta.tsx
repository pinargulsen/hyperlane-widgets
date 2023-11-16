import * as React from 'react';
import { SVGProps } from 'react';

const SvgManta = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 200 200" {...props}>
    <linearGradient
      id="manta_svg__a"
      x1={0}
      x2={200.1}
      y1={101.8}
      y2={98.2}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: '#29ccb9',
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: '#0091ff',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#ff66b7',
        }}
      />
    </linearGradient>
    <path
      d="M46.5 171.7A89.3 89.3 0 0 1 100 10.5c40.8 0 85.3 24.4 96 61.7a100 100 0 1 0 4 27.8v-5.3h-5.5a95.6 95.6 0 0 1-3.5 0l-9.3-.6c-7.5-.7-16-2-21.9-4.3a59.8 59.8 0 0 1-20.7-14.5l-.4-.3a86 86 0 0 0-24.6-18 54.6 54.6 0 0 0-34-2.6A86 86 0 0 0 65 59.1c-4.8 2-9.4 4.4-14 6.6a615.3 615.3 0 0 0 17 5.2 53 53 0 0 1 8.7 4.4c4.8 3.2 8.9 7.1 10.5 12a75 75 0 0 0-27.2 10 112 112 0 0 0-13.7 9.5l-10 8.8s12.2 1.3 18.1 2.5c4 .7 9.3 2 14.9 4s11.3 4.5 16 7.8a26 26 0 0 1 9.8 11.4c5 12.6 0 25-9.7 31.9-9.6 6.9-24.3 8.5-38.9-1.6zm34.1 15.7c4-1.3 7.6-3.2 11-5.5a37 37 0 0 0 13.3-44.3c-2.7-7-7.9-12.3-13.6-16.3-5.8-4-12.4-7-18.5-9-4-1.5-8-2.6-11.4-3.4l4-2.4a58.5 58.5 0 0 1 28-9.1c14.8 0 25.8 4.5 36.2 9.3l3 1.4c9.3 4.4 19.1 9 30.6 9 11 0 19.7-3.1 25.6-6.4a89.5 89.5 0 0 1-108.2 76.7zm96.9-83.1a44 44 0 0 1-14.3 2.3c-9 0-16.7-3.6-26.5-8.2l-2.6-1.2A95.4 95.4 0 0 0 98 87a33.4 33.4 0 0 0-17.8-21.8l2-.5a44.2 44.2 0 0 1 27.3 1.9 76 76 0 0 1 22 16.1l.2.2a70 70 0 0 0 24.1 16.7 86.5 86.5 0 0 0 21.6 4.7z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        fill: 'url(#manta_svg__a)',
      }}
    />
  </svg>
);
export default SvgManta;
