package be.pxl.service.client;

import be.pxl.service.model.Employee;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@FeignClient(name="emlpoyee-service")
public interface EmlpoyeeClient {
    @PostMapping("api/employee/department/{id}")
    ResponseEntity<List<Employee>> findByDepartment(@PathVariable Long id);

}
