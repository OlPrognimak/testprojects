package com.pr.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


import javax.servlet.Filter;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"com.pr.backend.repository.jpa"})
public class AngularBackendApplication {


    /**
     *
     * @param args
     */
    public static void main(String[] args) {
        SpringApplication
                .run(AngularBackendApplication.class,
                        args);
    }


    @Bean(name = "corsFilter")
    public Filter corsFilter() {
        return new CorsFilter();
    }



    @Bean
    public FilterRegistrationBean corsFilterRegistration() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(corsFilter());
        registration.addUrlPatterns("/*");
        registration.setName("corsFilter");
        registration.setOrder(1);
        return registration;
    }
}
