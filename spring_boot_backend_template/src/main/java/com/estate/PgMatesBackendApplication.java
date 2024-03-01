package com.estate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.estate.models.Admin;
import com.estate.services.AdminService;
import com.estate.utils.FileUploadProperties;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties({
    FileUploadProperties.class
})
public class PgMatesBackendApplication {

	private static final Logger log = LoggerFactory.getLogger(PgMatesBackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(PgMatesBackendApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(AdminService srv) {
	    return (args) -> {
	    	if(srv.countAdmin()==0) {
	    		Admin admin=new Admin();
	    		admin.setUserid("admin");
	    		admin.setPwd(srv.encrypt("admin"));
	    		admin.setUname("Administrator");
	    		srv.saveAdmin(admin);
	    		log.info("Admin user created successfully");
	    	}
	    };
	}

}
