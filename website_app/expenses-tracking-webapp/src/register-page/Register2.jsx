import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register2() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [dob, setDob] = useState(new Date());
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const [city, setCity] = useState("");
    const [town, setTown] = useState("");
    const [postCode, setPostCode] = useState("");
    const [error, hasError] = useState(false);

    const handleProfileSubmit = () => {

        const newProfile = {
            firstName,
            surname,
            dob,
            email,
            phoneNumber,
            address1,
            address2,
            address3,
            city,
            town, 
            postCode
        }

        axios
            .post(`http://localhost:7070/api/user/completeProfile`, newProfile)
            .then((res) => {
                hasError(false);
            })
            .catch((err => {
                hasError(true);
            }))
    }

    return (
        <div className="registerPage2">

            <div className="registerForm2">
                <h2>Online Registration Form</h2>
                <form method="post" onClick={handleProfileSubmit}>
                    <section className="section1">
                        <div className="section_firstNameField">
                            <label htmlFor="">First Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="section_surnameField">
                            <label htmlFor="">Surname</label>
                            <input type="text" name="" id="" />
                        </div>
                    </section>
                    <label htmlFor="">Date Of Birth</label>
                    <input type="date" name="" id="" />
                    <label htmlFor="">Email Address</label>
                    <input type="text" name="" id="" />
                    <section>
                        <label htmlFor="">Phone Number</label>
                        <div className="phoneType">
                            <select name="" id="">

                            </select>
                            <input type="number" name="" id="" />
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );


}