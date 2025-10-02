import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register2() {

    const navigate = useNavigate();

    const location = useLocation();
    const { username, password } = location.state || {};
    const [userId, setUserId] = useState(0);
    const [firstname, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [dob, setDob] = useState("");
    const [email_address, setEmail_Address] = useState("");
    const [phone_number, setPhone_Number] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const [city, setCity] = useState("");
    const [town, setTown] = useState("");
    const [postcode, setPostcode] = useState("");
    const [error, hasError] = useState(false);

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();

        const newProfile = {
            firstname,
            surname,
            dob,        
            email_address,
            phone_number,
            address1,
            address2,
            address3,
            city,
            town, 
            postcode,
            user: { userId: userId }
        }
        console.log(newProfile);
        const newUser = {
            username, 
            password
        }

        axios
            .post(`http://localhost:7070/api/user/register`, newUser)
            .then(() => {
                return axios.get(`http://localhost:7070/api/user/findUser/${username}`)
            })
            .then((res) => {
                setUserId(res.data.userId);
                console.log("Retrieved User ID: " + userId);
                hasError(false);
                return axios.post(`http://localhost:7070/api/user/completeProfile/${userId}`, newProfile);
            })
            .catch(((err) => {
                hasError(true);
                console.error(err);
            }));
    }

    return (
        <div className="registerPage2">

            <div className="registerForm2">
                <h2 className="head_text">Online Registration Form</h2>
                <h6 className="section_title">1) Personal Information</h6>
                <form method="post" onSubmit={handleRegistrationSubmit}>
                    <section className="section1">
                        <div className="section_firstNameField">
                            <label htmlFor="">First Name</label>
                            <input type="text" name="" id="" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="section_surnameField">
                            <label htmlFor="">Surname</label>
                            <input type="text" name="" id="" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        </div>
                    </section>
                    <section className="section2">
                        <div className="field1">
                            <label htmlFor="">Date Of Birth</label>
                            <input type="date" name="" id="" value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div className="field2">
                            <label htmlFor="">Email Address</label>
                            <input type="text" name="" id="" value={email_address} onChange={(e) => setEmail_Address(e.target.value)} />
                        </div>
                        <div className="field3">
                            <label htmlFor="">Phone Number</label>
                            <input type="number" name="" id="" value={phone_number} onChange={(e) => setPhone_Number(e.target.value)} />
                        </div>
                    </section>

                    <h6 className="section_title">2) Address Information</h6>
                    <section className="section3">
                        <div className="address_field1">
                            <label htmlFor="">Address Line 1</label>
                            <input type="text" name="" id="" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                        </div>
                        <div className="address_field2">
                            <label htmlFor="">Address Line 2</label>
                            <input type="text" name="" id="" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                        </div>
                        <div className="address_field3">
                            <label htmlFor="">Address Line 3</label>
                            <input type="text" name="" id="" value={address3} onChange={(e) => setAddress3(e.target.value)} />
                        </div>
                        <div className="address_secondline_section">
                            <div className="address_field4">
                                <label htmlFor="">City</label>
                                <input type="text" name="" id="" value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="address_field5">
                                <label htmlFor="">Town</label>
                                <input type="text" name="" id="" value={town} onChange={(e) => setTown(e.target.value)} />
                            </div>
                            <div className="address_field6">
                                <label htmlFor="">Post Code</label>
                                <input type="text" name="" id="" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                            </div>
                        </div>
                        
                    </section>

                    <div className="button_section">
                        <button className="return_button_style" type="submit" onClick={() => { navigate("/register") }}>Back</button>
                        <button className="register_button" type="submit" onClick={() => { navigate("/login") }}>Complete Registration</button>
                    </div>
                </form>
            </div>
        </div>
    );


}