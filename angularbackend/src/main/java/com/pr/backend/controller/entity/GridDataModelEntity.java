package com.pr.backend.controller.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class GridDataModelEntity {

    public GridDataModelEntity(){

    }

    public GridDataModelEntity(String make,
                         String model,
                         Double price){

        this.make=make;
        this.model=model;
        this.price=price;

    }

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String make;
    private String model;
    private Double price;

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
