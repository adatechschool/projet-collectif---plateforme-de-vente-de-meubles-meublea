import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "./Images/avatar.jpg";

const LeftMenu = ({
  handleDeleteAccount,
  setEditMode,
  editMode,
  handleSaveChanges,
  handleCancelChanges,
  handleImageUpload,
  profileImage,
}) => {
  return (
    <div className="left-menu menu">
      <div className="image-block">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-photo large-profile-photo"
        />
        <div className="button-block">
          {!editMode ? (
            <button className="button" onClick={() => setEditMode(true)}>
              Edit
            </button>
          ) : (
            <>
              <button className="button" onClick={handleCancelChanges}>
                Cancel
              </button>
              <button className="button" onClick={handleSaveChanges}>
                Save
              </button>
            </>
          )}
          {!editMode && (
            <button className="button" onClick={handleDeleteAccount}>
              Delete Account
            </button>
          )}
        </div>
      </div>
      {editMode && (
        <div>
          <input
            type="file"
            name="profileImage"
            onChange={handleImageUpload}
            accept=".jpg,.png"
            placeholder="Select a file"
            id="inputFile"
            className="hidden"
          />
          <label htmlFor="inputFile" className="label-button">
            select a photo
          </label>
        </div>
      )}
    </div>
  );
};

const RightMenu = ({
  firstName,
  lastName,
  email,
  address,
  phoneNumber,
  editMode,
  handleChange,
}) => {
  return (
    <div className="right-menu menu">
      <div className="details-block">
        <h2>Profile Information</h2>
        {!editMode ? (
          <>
            <p>
              <strong>First Name:</strong> {firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {lastName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Address:</strong> {address}
            </p>
            <p>
              <strong>Phone Number:</strong> {phoneNumber}
            </p>
          </>
        ) : (
          <>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
              />
            </label>
          </>
        )}
        {!editMode ? (
          <Link
            to=".src/Components/FurnitureCreation"
            className="button button-icon"
          >
            Vous voulez vendre vos meubles dans notre magasin ? Cliquez-ici !
          </Link>
        ) : null}
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImage, setProfileImage] = useState(logo);
  const [menuWrapperClassName, setMenuWrapperClassName] =
    useState("left-menu-wrapper");

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get("/api/profile");
      const { firstName, lastName, email, address, phoneNumber, profileImage } =
        response.data;
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setAddress(address);
      setPhoneNumber(phoneNumber);
      setProfileImage(profileImage);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put("/api/profile", {
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
        profileImage,
      });
      setEditMode(false);
      setMenuWrapperClassName("left-menu-wrapper"); // Réinitialiser la classe du wrapper de menu
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  const handleCancelChanges = () => {
    setEditMode(false);
    fetchProfileData();
    setMenuWrapperClassName("left-menu-wrapper"); // Réinitialiser la classe du wrapper de menu
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (editMode) {
      setMenuWrapperClassName("left-menu-wrapper edit-mode"); // Ajouter une classe pour ajuster la taille du wrapper de menu
    } else {
      setMenuWrapperClassName("left-menu-wrapper"); // Réinitialiser la classe du wrapper de menu
    }
  }, [editMode]);

  return (
    <div className="profile-page">
      <div className="content">
        <div className={menuWrapperClassName}>
          <LeftMenu
            setEditMode={setEditMode}
            editMode={editMode}
            handleSaveChanges={handleSaveChanges}
            handleCancelChanges={handleCancelChanges}
            handleImageUpload={handleImageUpload}
            profileImage={profileImage}
          />
        </div>
        <div className="right-menu-wrapper">
          <RightMenu
            firstName={firstName}
            lastName={lastName}
            email={email}
            address={address}
            phoneNumber={phoneNumber}
            editMode={editMode}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
