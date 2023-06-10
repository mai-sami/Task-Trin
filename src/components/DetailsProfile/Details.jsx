import React, { useEffect } from "react";
import { useProfileData } from "../../hooks/useProfileData";
import Spinner from "../Spinner/Spinner";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Button from "../Button/Button";

function Details() {
  const { getProfileDetails, isLoading, data } = useProfileData();

  useEffect(() => {
    getProfileDetails();
  },[]);
  return (
    <div>
      {isLoading ? (
        <div className="tab_secations">
          <Spinner />
        </div>
      ) : (
        <div className="intro">
          <h1 className="title">{data.name}</h1>
          <div className="details_number_colum">
            <span>interior designer</span>
            <div className="details_number">
              <AddLocationIcon style={{ color: "rgb(167 163 163)" }} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
          <div className="details_number">
            <div className="details_number_colum">
              <label className="title text_details">{data.followers}</label>
              <label>followers</label>
            </div>
            <div className="details_number_colum">
              <label className="title text_details">{data.follow}</label>
              <label>following</label>
            </div>
            <div className="details_number_colum">
              <label className="title text_details">{data.likes}</label>
              <label>likes</label>
            </div>
          </div>
          <div className="details_number">
            <Button name={"Edit profile"} />
            <Button name={"Add friends"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
