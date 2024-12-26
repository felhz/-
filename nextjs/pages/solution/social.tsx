import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Shejiao = ({ locale }) => {
  const { t } = useTranslation("common");
  return (
    <div>
      语言:{locale}
      <br />
      name: {t("second.title")}
    </div>
  );
};
export default Shejiao;
export const getServerSideProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale, ["common"]);
  return {
    props: {
      locale,
      ...i18n,
    },
  };
};
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
