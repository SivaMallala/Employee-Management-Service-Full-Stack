package com.lsp.ems.service.impl;

import com.lsp.ems.dto.EmployeeDto;
import com.lsp.ems.entity.Employee;
import com.lsp.ems.exception.Resourcenotfoundexc;
import com.lsp.ems.mapper.Employeemapper;
import com.lsp.ems.repository.Employerepositery;
import com.lsp.ems.service.Employeeservice;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class Employeeserviceimpl implements Employeeservice {

    private Employerepositery employerepositery;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = Employeemapper.maptoEmployee(employeeDto);
        Employee savedemployee = employerepositery.save(employee);
        return Employeemapper.maptoEmployeeDto(savedemployee);
    }

    @Override
    public EmployeeDto getEmployebyid(Long employeeID) {

        Employee employee= employerepositery.findById(employeeID).orElseThrow(()-> new Resourcenotfoundexc("Employee is not exist with id " + employeeID));

        return Employeemapper.maptoEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
        List<Employee> employees = employerepositery.findAll();
        return employees.stream().map((employee) -> Employeemapper.maptoEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        Employee employee = employerepositery.findById(employeeId).orElseThrow(
                ()-> new Resourcenotfoundexc("employee not exist with this id : "+ employeeId)
        );
        employee.setFirstname(updatedEmployee.getFirstname());
        employee.setLastname(updatedEmployee.getLastname());
        employee.setMail(updatedEmployee.getMail());

        Employee updatedempobj = employerepositery.save(employee);
        return Employeemapper.maptoEmployeeDto(updatedempobj);
    }

    @Override
    public void deleteEmploye(Long employeId) {
        Employee employee = employerepositery.findById(employeId).orElseThrow(
                ()-> new Resourcenotfoundexc("employee not exist with this id : "+ employeId)
        );
        employerepositery.deleteById(employeId);
    }
}
