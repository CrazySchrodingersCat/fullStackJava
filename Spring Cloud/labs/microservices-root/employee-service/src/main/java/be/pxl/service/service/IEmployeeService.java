package be.pxl.service.service;

import be.pxl.service.model.dto.EmployeeRequest;
import be.pxl.service.model.dto.EmployeeResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IEmployeeService {
    List<EmployeeResponse> getEmployees();
    void createEmployee(EmployeeRequest employeeRequest);
}
