import * as React from 'react';

const pinStyle = {
  cursor: 'pointer',
  fill: '#610000',
  stroke: '#000',
};

function Pin({ size = 20, onClick }: { size?: number; onClick?: () => void }) {
  return (
    <svg
      width="20"
      height="32"
      viewBox="0 0 280 459"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={pinStyle}
    >
      <path
        id="path4616"
        d="M127.673,449.594c-6.535,-9.973 -11.212,-28.127 -15.541,-60.318c-3.611,-26.855 -9.304,-93.835 -9.337,-109.854c-0.012,-5.67 -2.87,-7.874 -20.443,-15.768c-15.733,-7.069 -24.687,-13.431 -38.957,-27.682c-27.537,-27.5 -40.694,-57.899 -40.758,-94.17c-0.071,-40.072 12.443,-70.452 40.589,-98.535c28.078,-28.017 57.916,-40.57 96.575,-40.63c103.655,-0.164 169.216,108.111 121.946,201.394c-13.371,26.387 -45.927,54.512 -74.92,64.722l-14.046,4.946l-4.463,44.577c-7.411,74.034 -17.21,120.437 -28.122,133.168c-5.275,6.155 -7.493,5.827 -12.523,-1.85Zm111.518,-289.467c12.434,-15.787 -0.632,-69.641 -23.107,-95.239c-8.56,-9.75 -32.337,-25.3 -38.76,-25.349c-4.626,-0.035 -11.668,11.674 -9.858,16.392c0.84,2.188 7.315,7.729 14.389,12.313c23.877,15.472 36.931,40.83 36.931,71.742c0,10.258 1.338,16.489 4.143,19.294c4.978,4.978 12.691,5.38 16.262,0.847Z"
      />
    </svg>
  );
}

export default React.memo(Pin);