package com.lsp.ems.repository;

import com.lsp.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Employerepositery extends JpaRepository<Employee,Long> {

}
