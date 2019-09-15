package com.pr.backend.controller;

import com.pr.backend.controller.model.GridDataModel;
import com.pr.backend.service.DataGridService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
public class MainController {

    private static final String PATH = "/griddata";
    private static final String APPLICATION_JSON = "application/json";
    @Autowired
    private Environment env;
    @Autowired
    DataGridService dataGridService;


    @RequestMapping(value = PATH, method = RequestMethod.GET, produces = APPLICATION_JSON)
    public ResponseEntity<List<GridDataModel>> getGridDataModel(){
        List<GridDataModel> gridDataModels = dataGridService.getAllData();
        ResponseEntity<List<GridDataModel>> responseEntity = ResponseEntity.ok().body(gridDataModels);
        return responseEntity;
    }

    private List<GridDataModel> createListData(){
        List<GridDataModel> gridDataModels = new ArrayList<>();

        gridDataModels.add(new GridDataModel("Toyota", "Celica",35000d));
        gridDataModels.add(new GridDataModel("Ford", "Mondeo",32000d));
        gridDataModels.add(new GridDataModel("Porsche", "Boxter",72000d));

        return gridDataModels;
    }



}
