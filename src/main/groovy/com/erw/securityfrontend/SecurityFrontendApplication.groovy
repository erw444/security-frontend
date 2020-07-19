package com.erw.securityfrontend

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.zuul.EnableZuulProxy

@EnableZuulProxy
@SpringBootApplication
class SecurityFrontendApplication {

	static void main(String[] args) {
		SpringApplication.run(SecurityFrontendApplication, args)
	}

}
