import React, { useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { useProfileData } from "../../hooks/useProfileData";

function ImgesPosts() {
  const { getProfileDetails, isLoading, data } = useProfileData();
  useEffect(() => {
    getProfileDetails();
  },[]);
  return (
    <div>
      <>
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid_images">
              {data?.images_list?.map((item) => (
                <img className="garally" src={item} alt="images_list" />
              ))}
            </div>
          )}
        </div>
      </>
    </div>
  );
}

export default ImgesPosts;
