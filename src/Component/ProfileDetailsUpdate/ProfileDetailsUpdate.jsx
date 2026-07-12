//import React from 'react';

import { use } from "react";
import Context from "../AuthContext/Context/Context";
import Swal from "sweetalert2";

const ProfileDetailsUpdate = () => {
    const { CurrentUser, Update_Name_Photo } = use(Context);
    //console.log(CurrentUser);

    const HndleProfile = (event) => {
        event.preventDefault();
        const photoS = event.target.Photo_Url.value;
        const Names = event.target.names.value;


        Update_Name_Photo(Names, photoS).then(() => Swal.fire({
            title: "Great",
            text: "Updated Your Profile Successfully",
            icon: "success"
        }),event.target.reset()).catch(err => err);
    }



    return (
        <div className="h-full mt-10 lg:mt-20 mb-10 lg:mb-0">
            <p className="w-full text-center text-4xl font-semibold">Update Profile</p>
            <div className="w-full flex justify-center items-center mx-auto mt-4">
                <form onSubmit={HndleProfile}>
                    <fieldset className="fieldset bg-gray-500 shadow-2xl border-base-300 rounded-box w-100 border p-4">

                        <label className="label text-xl font-semibold text-gray-200">Current Name</label>
                        <div className="flex items-center">
                            <input id='name' type="text" defaultValue={CurrentUser?.displayName} required className="input text-[1rem] w-full" placeholder="Current Name" />
                        </div>


                        <label className="label text-xl font-semibold text-gray-200">New Name</label>
                        <div className="flex items-center">
                            <input id='names' type="text" required className="input text-[1rem] w-full" placeholder="New Name" />
                        </div>

                        <label className="label text-xl font-semibold text-gray-200">Current Photo</label>
                        <div className="flex items-center">
                            <input defaultValue={CurrentUser?.photoURL} type="text" className="input text-[1rem] w-full" placeholder="Photo URL" />
                        </div>


                        <label className="label text-xl font-semibold text-gray-200">Update Photo</label>
                        <div className="flex items-center">
                            <input id='Photo_Url' type="text" required className="input text-[1rem] w-full" placeholder="Update Photo URL" />
                        </div>
                        <button className="btn btn-success mt-2 text-white font-semibold">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ProfileDetailsUpdate;