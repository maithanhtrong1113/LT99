import Footer from "@/Components/Index/Footer";
import GoTopPage from "@/Components/Index/GoTopPage";
import React, { Fragment } from "react";
import Content from "../Components/Index/Content";
import Navigation from "../Components/Index/Navigation";
import { ToastContainer } from "react-toastify";
import BottomNavigation from "@/Components/Index/BottomNavigation";
import NotShowMess from "@/Components/utils/showMess";
import LoadingScreen from "@/Components/Index/LoadingScreen";
const index = (props) => {
  NotShowMess();

  return (
    <Fragment>
      <LoadingScreen>
        <ToastContainer />
        <GoTopPage />
        <Navigation />
        <Content data={props.data} />
        <Footer />
      </LoadingScreen>
    </Fragment>
  );
};
export async function getServerSideProps() {
  // Fetch data from an API or perform any other async operations
  const response = await fetch(
    "https://khoaluanquanlynhathuoclt99.lol/khach-hang/xem-thuoc/danh-sach-thuoc"
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
export default index;
