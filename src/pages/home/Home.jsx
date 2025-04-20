import React, { useEffect } from "react";
// import FilterBar from "./filterBar/FilterBar";
import Body from "./body/Body";
import './home.css'
import { Query } from "appwrite";
import appwriteService from "../../appwrite/config";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userAddress as address } from "../../store/authSlice";


const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  const userAddress = useSelector((state) => state.auth.userAddress);
  useEffect(() => {
    if (userAddress === null && user) {
      appwriteService.getUsers([Query.equal('user_id', user?.$id)]).then((res) => {
        if (res.documents.length > 0) {
          dispatch(address(res.documents[0]))
        }
      })
    }
    else{
      console.log(userAddress)
    }

  }, [user])
  return (
    <div className="flex">
      <div className="max-[570px]:hidden">
        {/* <FilterBar /> */}
      </div>

      <Body />
    </div>
  );
};

export default Home;
