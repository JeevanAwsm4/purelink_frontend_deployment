import React, { useState } from 'react';
import './Form.css';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default function WantBlood() {
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [bloodGroup,setBloodGroup] = useState('');
  const [units,setUnits] = useState('');
  const [phone,setPhone] = useState();
  const [district,setDistrict] = useState('');
  const [hospital,setHospital] = useState('');
  const [requestType,setRequestsType] = useState('');


  return (
    <div>
        <Helmet>
            <title>PureLink | WantBlood</title>
        </Helmet>

        <section id="form">
            <div className="top">
                <h1 className='tal'><span>Want</span> Blood</h1>
            </div>
            <section className="wrapper pl-0">
                <div className="right w-100">
                    <img src={require("./../assets/main-page-images/forms/left-side-arrows.png")} alt="" className='r-30' />
                    <div className="form">
                      <div className="form-field">
                        <input type="text" placeholder="Enter your Name" name="name" value={name} onChange={(e) => setName(e.target.value)}  id="name" required />
                        <select name="Blood Group" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}  id="group" required>
                            <option defaultChecked >Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        <input type="tel" placeholder="Enter phone number" name="tel" id="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        <input type="text" placeholder="Enter hospital name" value={hospital} onChange={(e) => setHospital(e.target.value)} name="hos" id="hos" required />
                      </div>
                      <div className="form-field">
                        <input type="number" placeholder="Enter your Age" min="18" max="65" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                        <select name="No.of Unit" value={units} onChange={(e) => setUnits(e.target.value)}  id="unit" required>
                            <option defaultChecked >No.of Unit</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                      </div>
                    </div>
                    <div className="bottom">
                      <NavLink to='' type='submit' className="button">Submit</NavLink>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}
