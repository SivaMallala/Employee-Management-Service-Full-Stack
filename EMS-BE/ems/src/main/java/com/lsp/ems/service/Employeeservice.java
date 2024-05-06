package com.lsp.ems.service;

import com.lsp.ems.dto.EmployeeDto;

import java.util.List;

public interface Employeeservice {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployebyid(Long employeeID);

    List<EmployeeDto> getAllEmployee();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmploye(Long employeId);
}
