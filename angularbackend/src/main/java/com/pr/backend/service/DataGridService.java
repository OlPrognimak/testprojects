package com.pr.backend.service;

import com.pr.backend.controller.entity.GridDataModelEntity;
import com.pr.backend.controller.model.GridDataModel;
import com.pr.backend.repository.jpa.DataGridRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DataGridService {
    @Autowired
    DataGridRepository dataGridRepository;


    public List<GridDataModel> getAllData(){
        List<GridDataModelEntity> entities = dataGridRepository.findAll();
        List<GridDataModel> dataModelList = entities.stream().parallel().map(m -> map(m)).collect(Collectors.toList());

        return dataModelList;

    }

    private static  GridDataModel map(GridDataModelEntity entity){
        GridDataModel model= new GridDataModel();
        model.setMake(entity.getMake());
        model.setModel(entity.getModel());
        model.setPrice(entity.getPrice());

        return model;
    }
}
