package com.app.controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping(value = "/api/owners/{id}", method = RequestMethod.GET)
	public @ResponseBody String find(@PathVariable String id) {
	    return "I am successfull"+id;
	}
	@RequestMapping(value = "/api/owners/", method = RequestMethod.GET)
	public @ResponseBody String find2() {
	    return "I am Arjun";
	}
}