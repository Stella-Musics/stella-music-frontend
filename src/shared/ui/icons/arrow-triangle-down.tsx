interface Props {
  size?: number;
}
export const ArrowTriangleDown = ({ size = 48 }: Props) => {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.04956 4.95654L43.9526 4.95654C45.5965 4.95654 46.595 6.76876 45.7169 8.15838L25.7653 39.73C24.9462 41.0261 23.056 41.0261 22.2369 39.73L2.28536 8.15838C1.4072 6.76876 2.40572 4.95654 4.04956 4.95654Z"
        fill="white"
        stroke="white"
        stroke-width="0.521739"
      />
    </svg>
  );
};
