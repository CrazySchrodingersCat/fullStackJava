package be.pxl.service.controller;

import be.pxl.service.model.dto.EmployeeRequest;
import be.pxl.service.model.dto.EmployeeResponse;
import be.pxl.service.service.IEmployeeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
@Slf4j
public class EmployeeController {
    @Autowired
    private IEmployeeService employeeService;

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void getEmployee(@PathVariable Long id){
        log.info("Hitting employee with id {}", id);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeResponse>> getEmployee(){
        //return employeeService.getEmployees();
        return new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.OK);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createdEmployee(@RequestBody EmployeeRequest employeeRequest){
        employeeService.createEmployee(employeeRequest);
    }

    @GetMapping("/department/{departmentId}")
    @ResponseStatus(HttpStatus.OK)
    public void findByDepartment(@PathVariable Long departmentId){

    }
    @GetMapping("/organization/{organizationId}")
    @ResponseStatus(HttpStatus.OK)
    public void findByOrganization(@PathVariable Long organizationId){

    }




}
