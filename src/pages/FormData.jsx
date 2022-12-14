import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash,faCartPlus,} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "../libs/axios";

const FormData = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("/news");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/news/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }

  var config = {
    method: 'post',
    url: `/news`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,

    },
  };

  axios(config)
  .then(function (response) {
    log('ini respon create: ', response);
    swal({
      title: "Program berhasil dibuat!",
      icon: "success",
      button: "OK!",
    });
    Navigate('/organization')
  })
  // .catch(function (eror) {
  //   log('ini eror create: ', error);
  // });
  };



  return (
    <>
    <Navbar/>
    <h2 className="flex items-center justify-between my-4"style={{textAlign: 'center'}}>Dasboard Berita</h2>
      <button className="primary mb-3 mx-3" style={{color: 'white'}}><Link to={`/add`} ><FontAwesomeIcon icon={faCartPlus}/>
          Add New
        </Link>
      </button>
        <table className="table table-secondary table-striped" style={{textAlign: 'center'}}>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Content</th>
              <th>Summary</th>
              <th>CategoryId</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.title}</td>
                <td>{user.content}</td>
                <td>{user.summary}</td>
                <td>{user.categoryId}</td>
                <td>
                  <Link
                    to={`/edit/${user.id}`}>
                    
                      <FontAwesomeIcon icon={faEdit}/>Edit
                   
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}>
                   <FontAwesomeIcon icon={faTrash}/>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    <Footer/>
    </>
  );
};

export default FormData;