package com.pr.backend.repository.jpa;


import com.pr.backend.controller.entity.GridDataModelEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataGridRepository extends JpaRepository<GridDataModelEntity, Long> {

}
