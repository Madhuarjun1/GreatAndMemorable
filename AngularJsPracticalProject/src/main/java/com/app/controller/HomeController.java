package com.app.controller;
import java.io.IOException;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jettison.json.JSONException;
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
	@RequestMapping(value = "/api/owners/",method = RequestMethod.GET,headers="Accept=application/json")
	public @ResponseBody String find2() throws JSONException, JsonGenerationException, JsonMappingException, IOException {
		String message="madhuarjun";
		System.out.println("Be Careful!!! Iam Rest");
		ObjectMapper objmap=new ObjectMapper();
		String jsonInString = objmap.writeValueAsString(message);
	return jsonInString;
	
	}
}