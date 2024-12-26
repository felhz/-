// const Map = dynamic(() => import("@/components/map"), { ssr: false });
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Map = dynamic(() => import("../components/map"), { ssr: false });
const Home: React.FC = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <Map />
    </div>
  );
};

export default Home;
export const getServerSideProps = async (a: Record<string, string>) => {
  console.log("demo,", a);
  return { props: {} };
};
export const getInitialProps = async (a: Record<string, string>) => {
  console.log("demo,", a);
  return { props: {} };
};
