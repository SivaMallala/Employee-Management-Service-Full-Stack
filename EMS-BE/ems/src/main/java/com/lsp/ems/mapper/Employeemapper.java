package com.lsp.ems.mapper;

import com.lsp.ems.dto.EmployeeDto;
import com.lsp.ems.entity.Employee;

public class Employeemapper {

    public static EmployeeDto maptoEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(), employee.getFirstname(), employee.getLastname(), employee.getMail()
        );
    }
    public static Employee maptoEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(), employeeDto.getFirstname(), employeeDto.getLastname(), employeeDto.getMail()
        );
    }
}
