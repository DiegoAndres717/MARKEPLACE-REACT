import React from "react";
import "./ListingDetail.css";

const ListingDetail = () => {
  return (
    <div className="listing-detail">
      <div className="listing-detail-content">
        <img
          className="listing-detail-img"  
          src="https://images.pexels.com/photos/7031596/pexels-photo-7031596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="detalles"
        />
        <h1 className="listing-detail-title">
          Awesome property
          <div className="listing-detail-action">
            <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
            <i class="listing-detail-action-icon  fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="listing-detail-meta-info">
          <span className="listing-detail-author">
            Author - <strong>Diego Andres Salas</strong>
          </span>
          <span className="listing-detail-time"> 1 day ago</span>
        </div>
        <p className="listing-detail-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam
          rerum minus, modi soluta saepe? Quaerat amet illum non tempore
          blanditiis sed, voluptate sunt similique impedit quasi doloribus
          repudiandae reiciendis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet impedit, fugiat id eligendi voluptatem
          deleniti laborum. Quae soluta sunt consectetur, eos at quidem
          distinctio officia, recusandae, ipsa veritatis obcaecati sit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam
          rerum minus, modi soluta saepe? Quaerat amet illum non tempore
          blanditiis sed, voluptate sunt similique impedit quasi doloribus
          repudiandae reiciendis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet impedit, fugiat id eligendi voluptatem
          deleniti laborum. Quae soluta sunt consectetur, eos at quidem
          distinctio officia, recusandae, ipsa veritatis obcaecati sit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam
          rerum minus, modi soluta saepe? Quaerat amet illum non tempore
          blanditiis sed, voluptate sunt similique impedit quasi doloribus
          repudiandae reiciendis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet impedit, fugiat id eligendi voluptatem
          deleniti laborum. Quae soluta sunt consectetur, eos at quidem
          distinctio officia, recusandae, ipsa veritatis obcaecati sit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam
          rerum minus, modi soluta saepe? Quaerat amet illum non tempore
          blanditiis sed, voluptate sunt similique impedit quasi doloribus
          
        </p>
      </div>
    </div>
  );
};

export default ListingDetail;
