package com.lsp.ems.controller;

import com.lsp.ems.dto.EmployeeDto;
import com.lsp.ems.service.Employeeservice;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class Employeecontroler {
    private Employeeservice employeeservice;

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmploye(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmploye = employeeservice.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmploye, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployebyid(@PathVariable("id") Long employeeId){
        EmployeeDto employeeDto = employeeservice.getEmployebyid(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employees = employeeservice.getAllEmployee();
        return ResponseEntity.ok(employees);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId ,
                                                     @RequestBody EmployeeDto updatedEmployee){
        EmployeeDto employeeDto = employeeservice.updateEmployee(employeeId,updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeservice.deleteEmploye(employeeId);
        return ResponseEntity.ok("employee deleted susses");
    }

}
