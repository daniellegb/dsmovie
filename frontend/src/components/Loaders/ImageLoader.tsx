import ContentLoader from "react-content-loader";

const ImageLoader = () => (
  <ContentLoader
    speed={2}
    width={1440}
    height={440}
    viewBox="0 0 1440 440"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="100" y="20" rx="5" ry="5" width="265" height="350" />
    <rect x="385" y="20" rx="5" ry="5" width="265" height="350" />
    <rect x="670" y="20" rx="5" ry="5" width="265" height="350" />
    <rect x="955" y="20" rx="5" ry="5" width="265" height="350" />
  </ContentLoader>
);

export default ImageLoader;
