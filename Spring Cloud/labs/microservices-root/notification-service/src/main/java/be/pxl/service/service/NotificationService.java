package be.pxl.service.service;

import be.pxl.service.model.Notification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class NotificationService {
    public void sendMessage(Notification notification){

        log.info("Receiving notification..."   );
        log.info("Receiving notification..."   );
    }
}
